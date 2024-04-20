const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db/index");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    if (!username || !password) {
        return res.status(400).json({
            message: "Both username and password are required."
        });
    }

    User.create({
        username: username,
        password: password
    })

    res.json({
        msg: "User created successfully"
    })
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const allCourses = await Course.find({});

    res.json({
        courses: allCourses
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;
    const password = req.headers.password;

    await User.updateOne({
        username: username,
        password: password
    }, {
        $push: {
            purchasedCourse: courseId
        }
    });

    res.json({
        msg: "Course purchased successfully"
    });
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.headers.username;
    const password = req.headers.password;

    const user = await User.findOne({
        username: username,
        password: password
    });

    if (!user) {
        return res.status(403).json({
            msg: "User not found" 
        });
    }

    const coursesPurchased = await Course.find({
        _id: { 
            "$in": user.purchasedCourse 
        }
    });

    res.json(coursesPurchased);
});

module.exports = router