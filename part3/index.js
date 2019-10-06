console.log('helo');
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')
const morgan = require('morgan');
morgan.token('data', function (req, res) { return JSON.stringify(req.body) })
app.use(cors());
app.use(bodyParser.json());
app.use(morgan(function (tokens, req, res) {
    return [
        tokens.method(req, res),
        tokens.url(req, res),
        tokens.status(req, res),
        tokens.res(req, res, 'content-length'), '-',
        tokens['response-time'](req, res), 'ms',
        tokens.data(req,res)


    ].join(' ')
}));

let persons = [
    { id: 1, name: 'Person 1', number: "040-123456" },
    { id: 2, name: 'Person 2', number: "041-123456" },
    { id: 3, name: 'Person 3', number: "042-123456" }
]

// To get the info of the webpage
app.get('/info', (req, res) => {
    res.send(`Phonebook has info for ${persons.length} people <br> <br>${new Date()}`);
})

//To get all the persons in the DB
app.get('/api/persons', (req, res) => {
    res.json(persons);
})

//To get the specified person
app.get('/api/person/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    if (person) { response.send(person) }
    else { response.status(404).json({ error: `The Person with index ${id} doestnot exists` }) }
})

//To delete the person
app.delete('/api/person/:id', (req, res) => {
    if (req.params.id) {
        if ([...persons.map(person => person.id)].indexOf(Number(req.params.id)) === -1) {
            res.status(400).json({ error: "Person doesnot exists" });
        }
        else {
            console.log(persons);
            persons = persons.filter(person => person.id !== Number(req.params.id))
            console.log(persons);
            res.send(persons)
        }
    }
    else {
        res.status(404);
    }
})

//To save the person
app.post('/api/person', (req, res) => {
    if (req.body) {
        const person = req.body;
        if (!alreadExists(req)) {
            person.id = generateId();
            persons.push(person);
            res.json(persons);
        }
        else {
            res.status(400).json({
                error: "Name or Number already exists"
            })
        }

    }

})

const alreadExists = (req) => {
    if ([...persons.map(person => person.name)].indexOf(req.body.name) === -1) {
        {
            if ([...persons.map(person => person.number)].indexOf(req.body.number) === -1) {
                return false;
            }
        }
    }
    return true;
}

const generateId = () => {
    return Math.floor(Math.random() * 100000000000);

}



const PORT = 9001;


app.listen(PORT, () => {
    console.log(`app runnign in ${PORT}`);
});