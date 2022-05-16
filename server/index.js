const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
const mysql = require('mysql');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "amerezturs",

});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))

app.post("/register", (req, res) => {

    const firstname = req.body.firstname;
    const phonenumber = req.body.phonenumber;
    const cn_passeport = req.body.cn_passeport;
    const E_mail = req.body.E_mail;
    const password = req.body.password;
    const sqlInsert =
        "INSERT INTO appusers (firstname,phonenumber,cn_passeport,E_mail,password) VALUS (?,?,?,?,?)"
    db.query(sqlInsert, [firstname, phonenumber, cn_passeport, E_mail, password], (err, result) => {
        if (err) throw err
        console.log(result)
    })
});


app.listen(3001, () => {
    console.log("running on port 3001")
})