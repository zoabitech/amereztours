const express = require('express');
const app = express();
const bodyParser = require('body-parser')
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
    database: "amereztous",
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
    const first_name = req.body.firstName;
    const last_name = req.body.phoneNumber;
    const Passeport = req.body.CIN_Passeport;
    const hash = bcrypt.hashSync(Passeport, 5);

    const sqlInsert = "INSERT INTO test (first_name,cn_passeport,phone_number) VALUES (?,?,?);"

    db.query(sqlInsert, [first_name, hash, last_name], (err, result) => {
        if (err) throw err
        console.log(result)
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