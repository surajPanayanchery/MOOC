const mongoose = require('mongoose')

const url = process.env.MONGODB_URI;
    

mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        console.log('Connected',url);
    })
    .catch(err => console.log(err.message));

const personSchema = new mongoose.Schema({
    name: String,
    number: String,
    id: Number
})

personSchema.set('toJSON', {
    transform: (doument, resObject) => {
        delete resObject._V
    }
})

module.exports = mongoose.model('Person', personSchema)
