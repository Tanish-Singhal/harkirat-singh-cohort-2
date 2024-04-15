const express = require("express")
const app = express();
const zod = require("zod");

// FIXME: If this is an array of number with atleast 1 input, return true, else return false
function validateInput(arr) {
    const schema = zod.array(zod.number());

    const response = schema.safeParse(arr);
    console.log(response);
}

validateInput([1, 2, 3]);


// FIXME:
// {
//     email: string => email
//     password: atleast 8 letters
// }

const loginSchema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8),
})

function validateLoginCredentials(obj) {
    // If you don't want Zod to throw errors when validation fails, use .safeParse
    // const response = loginSchema.safeParse(obj);
    // console.log(response);
    return loginSchema.safeParse(obj);
}

// validateLoginCredentials({
//     email: "tanish@gmail.com",
//     password: "1"
// })

app.use(express.json());

app.post("/login", function(req, res) {
    const response = validateLoginCredentials(req.body);
    if (!response.success) {
        res.status(400).json({
            msg: "Your inputs are invalid"
        });
        return;
    }
    res.json({
        success: true
    })
})

// Refer Zod documentation for more checks for validation
// There are many other packages for Validation (Zod, Joi, Yup)

app.listen(3000);