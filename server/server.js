require('dotenv').config();
const express = require('express'),
    axios = require('axios'),
    massive = require('massive'),
    session = require('express-session');

const app = express();

let {
    SERVER_PORT,
    REACT_APP_CLIENT_ID,
    CLIENT_SECRET,
    REACT_APP_DOMAIN,
    SESSION_SECRET,
    CONNECTION_STRING
} = process.env

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
})

app.get('/auth/callback', async (req, res) => {
    let payload = {
        client_id: REACT_APP_CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code: req.query.code,
        grant_type: 'authorization_code',
        redirect_uri: `http://${req.headers.host}/auth/callback`
    }
    let repsonseWithToken =  await axios.post(`https://${REACT_APP_DOMAIN}/oauth/token`, payload);
    let userData = await axios.get(`https://${REACT_APP_DOMAIN}/userinfo?access_token=${repsonseWithToken.data.access_token}`)

    const db = req.app.get('db');

    let {sub, name: username} = userData.data;
    let userExists = await db.find_user([sub]);
    if(userExists[0]) {
        req.session.user = userExists[0]
        res.redirect('http://localhost:3000/#/note')
    } else {
        let createdUser = await db.create_user([sub, username])
        req.session.user = createdUser[0]
        res.redirect('http://localhost:3000/#/note')
    }
})

app.get('/api/user_data', (req, res) => {
    if(req.session.user) {
        res.status(200).send(req.session.user)
    } else {
        res.status(401).send("Nooope!")
    }
})

app.get('/api/logout', (req, res) => {
    req.session.destroy()
    res.redirect('http://localhost:5000/#/')
})

app.listen(SERVER_PORT, ( ) => {
    console.log(`Listening on port: ${SERVER_PORT}`)
});