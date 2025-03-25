

const express = require('express');
const path = require('path');
const cors = require('cors');
const { redirect } = require('react-router-dom');
const app = express();
const port = process.env.PORT || 5001;

const corsOptions = {

    origin: 'http://localhost:3000', // ✅ อนุญาตให้ React เรียก API
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // ✅ อนุญาตเฉพาะ HTTP Methods ที่กำหนด
    allowedHeaders: ['Content-Type', 'Authorization'],// ✅ อนุญาต Header ที่ใช้
    credentials: true,// ✅ อนุญาตให้ส่ง cookies (ถ้ามี)
    optionSuccessStatus: 200,

};

console.log("Access server file SUCCESS !!!")
app.use(cors(corsOptions));
app.use(express.json());

// ✅ รองรับ OPTIONS method (Preflight Request)
app.options('*', cors(corsOptions));

app.use(express.static(path.join(__dirname,'build')));

app.get('/',function (req,res){
    res.sendFile(path.join(__dirname,'build','index.html'));
})

app.get('/', (req, res) => {
    res.json({ message: "hello world" });
    console.log(`Example app listening on port`);
});

app.post("/checklogin", (req, res) => {
    console.log("access check login success");

    const username = req.body.username;
    const password = req.body.password;
    console.log("username server :", username);
    console.log("password server :", password);
    try {
        if (username === 'Admin' && password === '123456') {
            // return res.status('success').json({message:"Login successful"});
            return res.send('success');
        }
        else {
            // return redirect('/LoginPage.js');
            // return res.status('fail').json({message:"Missing username or password"});
            return res.send('fail');
        }
    } catch (error) {
        console.log(error);
        return res.status('error');
        
    }

});

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});

