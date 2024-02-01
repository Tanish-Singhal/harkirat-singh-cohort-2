const { application } = require("express");
const zod = require("zod");

// FIXME: If this is an array of number with atleast 1 input, return true, else return false
// function validateInput(arr) {
//     const schema = zod.array(zod.number());

//     const response = schema.safeParse(arr);
//     console.log(response);
// }

// validateInput([1, 2, 3]);


// FIXME:
// {
//     email: string => email
//     password: atleast 8 letters
// }

function validateLoginCredentials(obj) {
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8),
    })

    // If you don't want Zod to throw errors when validation fails, use .safeParse
    const response = schema.safeParse(obj);
    console.log(response);
}

// validateLoginCredentials({
//     email: "tanish@gmail.com",
//     password: "1"
// })

app.post("/login", function(rec, res) {
    const response = validateLoginCredentials(req.body);
    if (!response.sucess) {
        res.json({
            msg: "Your inputs are invalid"
        })
        return;
    }
})

// Refer Zod documentation for more checks for validation
// There are many other packages for Validation (Zod, Joi, Yup)