const mongoose = require('mongoose');

const FormuleSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  options: {
    type: Array,
    required: true,
  },
}, {
  versionKey: false
});


module.exports = mongoose.model('Formule', FormuleSchema);


//comment déclarer des objet dans des objet ou des array dans des array