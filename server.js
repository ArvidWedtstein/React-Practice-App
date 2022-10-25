const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(cors());
let Users = [
    { "id": 1, "name":"John", "age":20, "email":"john@john.john", "password":"johnjohn" },
];
let Cars = [
    { "id": 1, "color":"red", "brand":"Mercedes", "year":2049 },
    { "id": 2, "color":"blue", "brand":"Audi", "year":2018 },
    { "id": 3, "color":"green", "brand":"Volvo", "year":2019 },
    { "id": 4, "color":"yellow", "brand":"BMW", "year":2017 },
    { "id": 5, "color":"black", "brand":"Ford", "year":2016 },
    { "id": 6, "color":"white", "brand":"Fiat", "year":2015, img: 'https://preview.redd.it/ui3zesfmnfu91.jpg?width=108&crop=smart&auto=webp&s=5d65219ea7be97c0a532a4ce453710f3d9abd06c' }
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
app.get('/cars', (req, res) => {
    res.send(Cars);
});
app.patch('/users/:id', (req, res) => {
    const { id } = req.params;
    const { name, age, email, password } = req.body;
    const user = Users.find(user => user.id === Number(id));
    if (!user) {
        res.status(404).send({ error: 'User not found' });
        return
    }

    
    if (name) user.name = name;
    if (age) user.age = age;
    if (email) user.email = email;
    if (password) user.password = password;

    res.send({
        user: {
            id: user.id,
            name: user.name,
            email: user.email,
            age: user.age
        }
    })
});
app.listen(8080, () => console.log('Server started on port 8080'));