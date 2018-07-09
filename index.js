const express = require('express');
const app = express();
var path  = require("path");
const bodyParser = require("body-parser")
const fs = require('fs') // gebruik je om bestanden te lezen en te schrijven

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/login', function(req,res){
  res.redirect('/');
})

app.post('/login', function(req,res){
// ww en geb naam uit de request
// is er een gebruiker met die gebruikersnaam? en heeft hij ook dit wachtwoord?
// als ja => redirect naar /pages
// als nee => geef een error (403)
  const rawData = fs.readFileSync('accounts.json')
  const data = JSON.parse(rawData);
  const username = req.body.username
  const password = req.body.password
  const account = data.accounts.find(function(account){
    return username === account.username
  })
  if (account === undefined || password !== account.password) {
    res.status(403)
    return res.send('Wachtwoord of gebruikersnaam is onjuist')
  } else {
    res.sendFile(__dirname + "/zelfPresentatieMaken/pages.html")
  }
  console.log(account)
})

app.post('/comments', function(req,res){
  const rawData = fs.readFileSync('comments.json');
  const data = JSON.parse(rawData);
  const newComment = {
    name: req.body.name,
    email: req.body.email,
    rate: req.body.cijfer,
    comment: req.body.comment
  }
  data.comments.push(newComment)
  fs.writeFileSync('comments.json', JSON.stringify(data));
  res.sendFile(path.join(__dirname + '/zelfPresentatieMaken/index.html'));
  res.redirect('/');
});

app.post('/welkom', function(req,res){
  const accountRawData = fs.readFileSync('accounts.json');
  const accountData = JSON.parse(accountRawData);
  const newAccount =  {
    username: req.body.newUsername,
    password: req.body.newPassword
  }
  accountData.accounts.push(newAccount);
  fs.writeFileSync('accounts.json', JSON.stringify(accountData));
  res.sendFile(path.join(__dirname + '/zelfPresentatieMaken/zelf_presentatie_maken.html'));
})

app.get('/welkom', function(req,res){

});
app.get('/pages', function(req,res){
  res.sendFile(__dirname + '/zelfPresentatieMaken/pages.html');
  res.json(JSON.parse(fs.readFileSync('accounts.JSON')))
});

app.get('/comments', function(req,res){
  const rawData = fs.readFileSync('comments.json')
  const comments = JSON.parse(rawData);
  res.json(comments)
})

app.get('/afbeelding', function(req,res){
  res.sendFile(__dirname + '/zelfPresentatieMaken/handleidingAfbeelding.html');
});
app.get('/afbInset', function(req,res){
  res.sendFile(__dirname + '/zelfPresentatieMaken/afbInset.png');
})

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname + '/zelfPresentatieMaken/index.html'));
});

app.get('/bewerken',function(req,res){
  res.sendFile(path.join(__dirname + '/zelfPresentatieMaken/zelf_presentatie_maken.html'));
});

app.get('/script', function(req,res){
  res.sendFile(path.join(__dirname + '/zelfPresentatieMaken/script.js'))
});

app.get('/preview',function(req,res){
  res.sendFile(path.join(__dirname + '/zelfPresentatieMaken/watch.html'));
});

app.get('/help', function(req,res){
  res.sendFile(path.join(__dirname + '/zelfPresentatieMaken/handleiding.html'));
});

app.get('script1', function(req,res){
  res.sendFile(path.join(__dirname + '/zelfPresentatieMaken/script1.js'));
});

app.listen(3000);

//app.get('/', (req, res) => res.send('Hello World!'))
//app.get('D:/Documents/gezin/Hananja/Atom/server/zelfPresentatieMaken/index.html', function(req, res) {
//  res.sendFile('index.html')
//})

//app.post('/', function (req, res) {
//  res.send('Got a POST request')
//})
// TODO:
// Maak server X
// Maak route /comments
// Stuur comments terug in JSON formaat
// Op de website: Haal de comments op

// TODO REIN: voorbeelden sturen
