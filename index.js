// kerangka aplikasi express.js
const express = require("express");
const PORT = 4000;
const app = express();
app.get("/ping", (req, res) => {
res.send({
error: false,
message: "Server is healthy",
});
});
app.listen(PORT, () => {
console.log("Server started listening on PORT : " + PORT);
});

//static response html
app.get("/", (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
    });

//menampilkan file index.html
app.get("/test", (req, res) => {
        res.sendFile(__dirname+'/index.html');
        });

//mengembalikan nilai response berupa JSON
app.get("/uji1", (req, res) => {
    res.status(200).json({
    success: true,
    data: [
    {
    nim:"2019420005",
    nama: "Andi",
    prodi: "Teknik Informatika",
    fakultas: "Teknik",
    notelp: "087727837721",
    alamat: "Darmo indah III"
        },
    {
    nim:"2020420005",
    nama: "Fauzi",
    prodi: "Teknik Informatika",
    fakultas: "Teknik",
    notelp: "087725483161",
    alamat: "perum mas II"
    },
    {
    nim:"2021420017",
    nama: "Faisal",
    prodi: "Teknik Informatika",
    fakultas: "Teknik",
    notelp: "085405834501",
    alamat: "Banyu urip II"
    }]
    })
});