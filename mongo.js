const mongoose = require('mongoose')

if ( process.argv.length<3 ) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]

const url =
  `mongodb+srv://fullstackjuhosal:${password}@puhelinluettelo-wx4hw.mongodb.net/puhelinluettelo?retryWrites=true`

mongoose.connect(url, { useNewUrlParser: true })

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

if (process.argv.length===3) {
    Person
      .find({})
      .then(persons => {
          console.log("puhelinluettelo:")
          persons.forEach(person => {
              console.log(person.name + " " + person.number)
          })
          mongoose.connection.close()
      })
}

if (process.argv.length===5) {
  const person = new Person({
    name,
    number,
  })
  
  person.save().then(response => {
    console.log('person saved!');
    mongoose.connection.close();
  })
}
