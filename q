[1mdiff --git a/Week 8/Week 8.1/youtube-clone b/Week 8/Week 8.1/youtube-clone[m
[1m--- a/Week 8/Week 8.1/youtube-clone[m	
[1m+++ b/Week 8/Week 8.1/youtube-clone[m	
[36m@@ -1 +1 @@[m
[31m-Subproject commit 32eddd66ddd8a58661162a0aef10e4b26a8b7b24[m
[32m+[m[32mSubproject commit 32eddd66ddd8a58661162a0aef10e4b26a8b7b24-dirty[m
[1mdiff --git a/Week 8/Week 8.2/paytm-main/backend/routes/user.js b/Week 8/Week 8.2/paytm-main/backend/routes/user.js[m
[1mindex 0943e8f..398c97d 100644[m
[1m--- a/Week 8/Week 8.2/paytm-main/backend/routes/user.js[m	
[1m+++ b/Week 8/Week 8.2/paytm-main/backend/routes/user.js[m	
[36m@@ -117,4 +117,31 @@[m [mrouter.put("/", authMiddleware, async (req, res) => {[m
   });[m
 });[m
 [m
[32m+[m
[32m+[m[32m// TODO: Route to get users from the backend, filterable via firstName/lastName[m
[32m+[m[32mrouter.get("/bulk", async (req, res) => {[m
[32m+[m[32m  const filter = req.query.filter || "";[m
[32m+[m
[32m+[m[32m  const users = await User.find({[m
[32m+[m[32m    $or: [{[m
[32m+[m[32m      firstName: {[m
[32m+[m[32m        "$regex": filter[m
[32m+[m[32m      }[m
[32m+[m[32m    }, {[m
[32m+[m[32m      lastName: {[m
[32m+[m[32m        "$regex": filter[m
[32m+[m[32m      }[m
[32m+[m[32m    }][m
[32m+[m[32m  })[m
[32m+[m
[32m+[m[32m  res.json({[m
[32m+[m[32m    user: users.map(user => ({[m
[32m+[m[32m      username: user.username,[m
[32m+[m[32m      firstName: user.firstName,[m
[32m+[m[32m      lastName: user.lastName,[m
[32m+[m[32m      _id: user._id[m
[32m+[m[32m    }))[m
[32m+[m[32m  })[m
[32m+[m[32m})[m
[32m+[m
 module.exports = router;[m
