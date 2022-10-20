const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(cors());
let Users = [
    { "id": 1, "name":"John", "age":20, "email":"john@john.john", "password":"johnjohn" },
];
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = Users.find(user => user.email === username && user.password === password);
    if (!user) {
        res.status(401).send({ error: 'Invalid email or password' });
        return
    } 

    // Generate random token
    const token = () => Math.random().toString(36).substring(7);
    
    res.send({
        user: {
            id: user.id,
            name: user.name,
            email: user.email,
            age: user.age
        },
        token: token() + token()
    })
});
app.listen(8080, () => console.log('Server started on port 8080'));