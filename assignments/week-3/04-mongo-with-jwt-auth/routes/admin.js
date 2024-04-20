const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config")
const { Admin, Course } = require("../db/index");
const router = Router();


// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    if (!username || !password) {
        return res.status(400).json({
            message: "Both username and password are required."
        });
    }

    await Admin.create({
        username: username,
        password: password
    })
    
    res.json({
        msg: "Admin created successfully"
    })
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const user = await Admin.find({
        username: username,
        password: password
    })

    if (user) {
        const token  = jwt.sign({
            username: username,
            password: password
        }, JWT_SECRET);

        res.json({
            token
        })
    }
    else {
        res.status(403).json({
            msg: "Incorrect email and password"
        })
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;

    const newCourse = await Course.create({
        title: title,
        description: description,
        imageLink: imageLink,
        price: price
    })

    res.json({
        msg: "Course created successfully",
        courseId: newCourse._id
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const allCourses = await Course.find({});

    res.json({
        courses: allCourses
    })
});

module.exports = router;