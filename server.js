const express = require('express');

const app = express();

const groceries = ['cheese','milk','eggs','bacon','chicken','beef','mac n cheese','apple sauce','lettuce','ketchup','salad dressing','cookies','apples','grapes','lunch meat'];


app.set('view engine', 'jsx');

app.engine('jsx', require('express-react-views').createEngine());

const PORT = 3000;

app.get('/',(req,res)=>{
    res.render("Index")
})

app.get('/map', (req, res)=>{
    req.query = groceries
    res.json(req.query).map((current)=>{
        current
    })
})

app.get('/:indexOfGroceriesArray', (req, res)=>{
    res.send(groceries[req.params.indexOfGroceriesArray])
})

app.listen(PORT, (erq,res)=>{
    console.log(`Server running on port ${PORT}`);
})