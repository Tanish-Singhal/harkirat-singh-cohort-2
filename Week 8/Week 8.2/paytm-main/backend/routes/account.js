const express = require("express");
const { authMiddleware } = require("../middleware");
const { Account } = require("../db");

const router = express.Router();

router.get("/balance", authMiddleware, async (req, res) => {
  const account = await Account.findOne({
    userId: req.userId,
  });

  res.json({
    balance: account.balance,
  });
});

router.post("/transfer", authMiddleware, async (req, res) => {
  const { amount, to } = req.body;

  if (!amount || !to) {
    return res.status(400).json({
      message: "Amount and recipient are required",
    });
  }

  if (amount <= 0) {
    return res.status(400).json({
      message: "Transfer amount must be positive",
    });
  }

  try {
    const fromAccount = await Account.findOne({
      userId: req.userId,
    });

    if (fromAccount.balance < amount) {
      return res.status(400).json({
        message: "Insufficient Balance",
      });
    }

    const toAccount = await Account.findOne({
      userId: to,
    });

    if (!toAccount) {
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
      );

      await Account.updateOne(
        {
          userId: to,
        },
        {
          $inc: {
            balance: amount,
          },
        }
      );

      res.status(200).json({
        message: "Funds transfer successful",
      });
      
    } catch (error) {
      res.status(500).json({
        message: "Funds transfer failed!",
        error: error.message,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
});

module.exports = router;
