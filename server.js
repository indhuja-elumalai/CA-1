const express = require('express');
const app = express();
const PORT = 3000;

// app.get('/signup', (req, res) => {

//     const username = req.query.username;

//     if (!username){
//         return res.status(400).json({ error : "Username cannot be empty"});
//     }

//     const email = req.query.email;

//     if (!email){
//         return res.status(400).json({ error : "Email cannot be empty"});
//     }


//     const password = req.query.password;

//     if(length(password)<8 || length(password)>16){
//         return res.send(" Password length should be greater than 8 or less than or equal to 16");
//     }

//     const dob = req.query.dob;


//     res.json({
//         username,
//         email,
//         password,
//         dob
//     });
// });


app.get('/signup',(req,res) => {
    return res.send('SIGNUP PAGE');

})
app.get('/signup/username', (req, res) => {

    const username = req.query.username;

    if (!username){
        return res.status(400).json({ error : "Username cannot be empty"});
    }else{
        return res.send("username :",username);
    }
});

app.get('/signup/email', (req, res) => {

    const email = req.query.email;

    if (!email){
        return res.status(400).json({ error : "Email cannot be empty"});
    }
});

app.get('/signup/password',(req,res) => {

    const password = req.query.password;

    if(length(password)<8 || length(password)>16){
        return res.send(" Password length should be greater than 8 or less than or equal to 16");
    }
});

app.get('/signup/dob',(req,res)=>{

    const dob = req.query.dob;
});

    // res.json({
    //     "username" : username,
    //     "email" : email,
    //     "password" : password,
    //     "dob" : dob
    // });


app.listen(PORT,() => {
    console.log(`Server is running on http://localhost:${PORT}`);
})