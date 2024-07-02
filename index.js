const express = require('express');
// const bodyParser = require('body-parser');
// const jwt = require('jsonwebtoken');
//const bcrypt = require('bcryptjs')

const app = express();
const port = 3000;

app.use(express.json());
// app.use(bodyParser.json());

// User database
// const users = [
//     {
//         id: 1,
//         username: 'user1',
//         password: bcrypt.hashSync('password1', 8) // Hash the pswd
//     },
//     {
//         id: 2,
//         username: 'user2',
//         password: bcrypt.hashSync('password2', 8) // Hash the pswd
//     }
// ];

// // Secret key for jwt
// const secretKey = 'your_secret_key';

// items array
const items = [
    { id: 1, name: 'Book', color: 'Red', price: '1500' },
    { id: 2, name: 'Pencil', color: 'Blue', price: '2000' },
    { id: 3, name: 'Pen', color: 'Pink', price: '1000'},
    { id: 4, name: 'Pin', color: 'White', price: '3000' },
    { id: 5, name: 'Pencil case', color: 'Purple', price: '20000' },
    { id: 6, name: 'Backpack', color: 'Yellow', price: '100000' },
    { id: 7, name: 'Eraser', color: 'Green', price: '2000'},
    { id: 8, name: 'Pen corrector', color: 'Magenta', price: '2300' },
    { id: 9, name: 'Shoes', color: 'Black and White', price: '80000'},
    { id: 10, name: 'Hair pin', color: 'Beige',  price: '4500' },
    { id: 11, name: 'Lunch box', color: 'Torquise', price: '7500' },
    { id: 12, name: 'Uniform', color: 'Amber', price: '135000' },
    { id: 13, name: 'Jumpper', color: 'Fuchsia', price: '75000' },
    { id: 14, name: 'Report card', color: 'Peach', price: '0' },
    { id: 15, name: 'Shocks', color: 'Dark Yellow', price: '8000' },
    { id: 16, name: 'Tracksuits', color: 'Dark Brown', price: '95000' },
    { id: 17, name: 'Envelope', color: 'White', price: '200' }, 
    { id: 18, name: 'Water bottle', color: 'Lavender', price: '10000'},
    { id: 19, name: 'Hair tie', color: 'Maroon', price: '500' },
    { id: 20, name: 'Hat', color: 'Coral', price: '6500' }
];

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// POST - Login endpoint
// app.post('/api/login', (req, res) =>{
//     const { username, password } = req.body;
//     const user = users.find(u => u.username === username);

//     if (!user) {
//         return res.status(404).send('[User not found] Hayoo kamu stranger kann? Ngakuuu');
//     }

//     const passwordIsValid = bcrypt.compareSync(password, user.password);

//     if(!passwordIsValid) {
//         return res.status(401).send('[Invalid password] Passwordmu lhooo, sing bener taa')
//     }

//     const token = jwt.sign({ id: user.id}, secretKey, {
//         expiresIn: 86400 //24 hours expiration
//     })

//     res.status(200).send({auth: true, token });
// })

// // Middleware to verify token
// function verifyToken(req, res, next) {
//     const token = req.headers['x-access-token'];

//     if (!token) {
//         return res.status(403).send('No token provided');
//     }

//     jwt.verify(token, secretkey, (err, decoded) =>{
//         if (err) {
//             return res.status(500).send('Failed to authenticate token');
//         }
//         req.userId = decode.id;
//         next();
//     })
// }

// // Protected route to get all items
// app.get('/api/items', verifyToken, (req, res) => {
//     res.status(200).send(items);
// });

// // Protected route to get item by id
// app.get('/api/items/:id', verifyToken, (req, res) => {
//     const item = items.find(i => i.id === parseInt(req.params.id));
//     if (!item) {
//         return res.status(404).send('Item not found');
//     }
//     res.status(200).send(item);
// });

// // Protected route to get item by name
// app.get('/api/items/name/:name', verifyToken, (req, res) => {
//     const item = items.find(i => i.name.toLowerCase() === req.params.name.toLowerCase());
//     if (!item) {
//         return res.status(404).send('Item not found');
//     }
//     res.status(200).send(item);
// });

// // Handle incorrect routes
// app.use((req, res) => {
//     res.status(404).send('Invalid API path');
// });



// GET endpoint to retrieve all items
app.get('/api/items', (req, res) => {
  res.json(items);
});

// GET endpoint to retrive item details by id
app.get('/api/items/:id', (req, res) => {
    const id = parseInt(req.params.id);  // Get the id from the request parameters and convert it to an integer
    const item = items.find(i => i.id === id);  // Find the item with the matching id
    if (item) {  // If the item is found
        res.json(item);  // Respond with the item details in JSON format
    } else {  // If the item is not found
        res.status(404).send('[Item not found] Oy laahh! Nyari yang ada-ada aja lah wey!');  // Respond with a 404 status code and an error message
    }
});

// GET endpoint to retrieve item details by name
app.get('/api/items/name/:name', (req, res) => {
    const name = req.params.name.toLowerCase();  // Get the name from the request parameters and convert it to lowercase
    const item = items.find(i => i.name.toLowerCase() === name);  // Find the item with the matching name
    if (item) {  // If the item is found
        res.json(item);  // Respond with the item details in JSON format
    } else {  // If the item is not found
        res.status(404).send('[Item not found] Oy laahh! Nyari yang ada-ada aja lah wey!');  // Respond with a 404 status code and an error message
    }
});


// POST creqte new data
app.post('/api/items', (req, res) => {
  const newItem = {
    id: items.length + 1,
    name: req.body.name
  };
  items.push(newItem);
  res.status(201).json(newItem);
});

// Start incorrect routes
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
