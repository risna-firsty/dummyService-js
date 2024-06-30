const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

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
        res.status(404).send('[Item not found]');  // Respond with a 404 status code and an error message
    }
});



app.post('/api/items', (req, res) => {
  const newItem = {
    id: items.length + 1,
    name: req.body.name
  };
  items.push(newItem);
  res.status(201).json(newItem);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
