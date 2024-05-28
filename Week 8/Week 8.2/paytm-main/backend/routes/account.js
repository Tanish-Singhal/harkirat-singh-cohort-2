const express = require("express");
const { authMiddleware } = require("../middleware");
const { Account } = require("../db");
const zod = require("zod");
const mongoose = require("mongoose");

const router = express.Router();

router.get("/balance", authMiddleware, async (req, res) => {
  try {
    const account = await Account.findOne({
      userId: req.userId,
    });
  
    res.json({
      balance: account.balance,
    });

  } catch(error) {
    res.status(500).json({
      message: "Error while fetching the balance",
      error: error.message,
    })
  }
});

const transferSchema = zod.object({
  amount: zod.number().positive(),
  to: zod.string(),
});

router.post("/transfer", authMiddleware, async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  const { success, data } = transferSchema.safeParse(req.body);

  if (!success) {
    return res.status(400).json({
      message: "Both the fields are required with positive amount",
    });
  }

  const { amount, to } = data;

  try {
    const fromAccount = await Account.findOne({
      userId: req.userId,
    }).session(session);

    if (fromAccount.balance < amount) {
      await session.abortTransaction();
      session.endSession();
  
      return res.status(400).json({
        message: "Insufficient Balance",
      });
    }

    const toAccount = await Account.findOne({
      userId: to,
    }).session(session);

    if (!toAccount) {
      await session.abortTransaction();
      session.endSession();

      return res.status(400).json({
        message: "Invalid Account",
      });
    }

    // TODO: changelling part:- updating the balance of the user, after the transaction
    try {
      await Account.updateOne(
        {
          userId: req.userId,
        },
        {
          $inc: {
            balance: -amount,
          },
        }
      ).session(session);

      await Account.updateOne(
        {
          userId: to,
        },
        {
          $inc: {
            balance: amount,
          },
        }
      ).session(session);

      await session.commitTransaction();
      session.endSession();

      res.status(200).json({
        message: "Funds transfer successful",
      });

    } catch (error) {
      await session.abortTransaction();
      session.endSession();

      res.status(500).json({
        message: "Funds transfer failed!",
        error: error.message,
      });
    }

  } catch (error) {
    await session.abortTransaction();
    session.endSession();

    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
    
  } finally {
    session.endSession();
  }
});

module.exports = router;
