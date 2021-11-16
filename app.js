const express = require('express');
const fs = require('fs');
const path = require('path');
const { off } = require('process');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('views', path.join(__dirname, './public/views'));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));
app.listen(3000)
app.use(sendViewMiddleware);


/* render the sign-in page function*/
function sendViewMiddleware(req, res, next) {
    res.sendView = function(view) {
        return res.sendFile(__dirname + "/public/views/" + view);
    }
    next();
}

/* routes */
app.get('/', function(req, res) {
    res.sendView('index.html');
});
app.get('/coa', (req, res)=>{
    res.render('chart-of-accounts');
})
app.get('/users', (req, res)=>{
    res.render('sys-users');
})
app.get('/tbalance', (req, res)=>{
    res.render('trial-balance');
})
app.get('/journal', (req, res)=>{
    res.render('journal-voucher.ejs');
})
app.get('/welcomepage', (req, res)=>{
    res.render('welcomepage.ejs');
})
