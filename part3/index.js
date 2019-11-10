console.log('helo');
const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser')
const morgan = require('morgan');
const Person = require('./models/person');

morgan.token('data', function (req, res) { return JSON.stringify(req.body) })
app.use(express.static('build'))
app.use(cors());
app.use(bodyParser.json());
app.use(morgan(function (tokens, req, res) {
    return [
        tokens.method(req, res),
        tokens.url(req, res),
        tokens.status(req, res),
        tokens.res(req, res, 'content-length'), '-',
        tokens['response-time'](req, res), 'ms',
        tokens.data(req, res)


    ].join(' ')
}));


let persons = [];

// To get the info of the webpage
app.get('/api/info', (req, res) => {
    Person.find({})
        .then(personsRes => { persons = personsRes; })
        .catch(err => console.log(err.message));
    res.send(`Phonebook has info for ${persons.length} people <br> <br>${new Date()}`);
})

//To get all the persons in the DB
app.get('/api/persons', (req, res) => {
    Person.find({})
        .then(personsRes => { persons = personsRes; res.json(personsRes); })
        .catch(err => console.log(err.message));

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
    console.log(req.params);
    if (req.params.id) {
        if ([...persons.map(person => person.id)].indexOf(Number(req.params.id)) === -1) {
            res.status(400).json({ error: "Person doesnot exists" });
        }
        else {            
            Person.deleteOne(persons.filter(person => person.id === Number(req.params.id))[0]).then(pRes => {persons=pRes;console.log(pRes);res.json(persons)}).catch(err => console.log(err.message));
            res.send(persons);
        }
    }
    else {
        console.log('ers');
        res.status(404);
    }
})

//To save the person
app.post('/api/person', (req, res) => {
    if (req.body) {
        const person = req.body;
        if (!alreadExists(req)) {
            person.id = generateId();
            savePerson(person).then(() => res.send()).catch(() => {
                res.status(400).json({
                    error: "Could not save in DB"
                })
            });
        }
        else {
            res.status(400).json({
                error: "Name or Number already exists"
            })
        }

    }

})

const savePerson = (personData) => {
    console.log('DBConected');
    const person = new Person(personData);

    return person.save().then(response => {
        response.send('success');
    }).catch(err => { console.log(err.message) })
}

const alreadExists = (req) => {
    console.log(persons);
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



const PORT = process.env.PORT || 9002;


app.listen(PORT, () => {
    console.log(`app runnign in ${PORT}`);
});