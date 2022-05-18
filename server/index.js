const express = require('express');
const app = express();
// const bodyParser = require('body-parser')
const cors = require('cors')
const bcrypt = require("bcrypt");
const mysql = require('mysql');

// app.use(bodyParser.json({ type: 'applaction/josn' }))
// app.use(bodyParser.urlencoded({ extended: true }))
// let ecodedBodyParser = bodyParser.urlencoded({ extended: true })
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const db = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "",
    database: "amereztours",
})



const server = app.listen(3001, () => {
    let host = server.address().address
    let port = server.address().port
    console.log("start")
})

db.connect((error) => {
    if (error) console.log(error)
    else console.log("connected")
})

app.get('/user', (req, res) => {
    db.query('select * from test', (error, rows, fileds) => {
        if (error) console.log(error)
        else {
            console.log(rows)
            res.send(rows)
        }
    })
})
app.post("/register", (req, res) => {

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const phone_number = req.body.phoneNumber;
    const passeport = req.body.CIN_Passeport;
    const address = req.body.address;
    const userName = req.body.userName;
    const email = req.body.Email;
    const password = req.body.Password;
    const hashPassword = bcrypt.hashSync(password, 5);

    const sqlUserInsert =
        "INSERT INTO users (first_name,last_name,phone,passport,address,username,email,password) VALUES (?,?,?,?,?,?,?,?);"

    db.query(sqlUserInsert, [firstName, lastName, phone_number, passeport, address, userName, email, hashPassword], (err, result) => {
        if (err) throw err
        res.send()
    })
});





















// app.post("/register", (req, res) => {

//     const firstname = req.body.firstname;
//     const phonenumber = req.body.phonenumber;
//     const cn_passeport = req.body.cn_passeport;
//     const E_mail = req.body.E_mail;
//     const password = req.body.password;
//     const sqlInsert =
//         "INSERT INTO appusers (firstname,phonenumber,cn_passeport,E_mail,password) VALUS (?,?,?,?,?)"
//     db.query(sqlInsert, [firstname, phonenumber, cn_passeport, E_mail, password], (err, result) => {
//         if (err) throw err
//         console.log(result)
//     })
// });