let mongoose = require('mongoose');
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");

let Schema = mongoose.Schema;

let AssignmentSchema = Schema({
    id: Number,
    dateDeRendu: Date,
    nom: String,
    rendu: Boolean
});

AssignmentSchema.plugin(aggregatePaginate);

// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
// le premier paramètre est le nom de la collection (pas de la base)
// et il accepte des variations légères du nom de la collection
// ça fonctionnerait pas exemple avec 'Assignment' ou 'assignment'
// ou encore 'Assignments' etc.
module.exports = mongoose.model('assignments', AssignmentSchema);
