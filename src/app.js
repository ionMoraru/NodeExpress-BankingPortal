const fs = require('fs');
const path = require('path');
const express = require('express')
const { accounts, users, writeJSON } = require('./data')
const app = express();

const accountRoute = require('./routes/account')
const servicesRoute = require('./routes/services')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))

app.use('/', accountRoute)
app.use('/', servicesRoute)

app.get('/', (req, res) => res.render('index', { title: 'Account Summary', accounts }))
app.get('/profile', (req, res) => res.render('profile', { user: users[0] }))


app.listen(3000, () => console.log('Server running on 3000'))

