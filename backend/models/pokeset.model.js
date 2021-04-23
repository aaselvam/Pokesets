const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pokesetSchema = new Schema({
    username: {type: String, required: true},
    pokeName: {type: String, required: true},
    pokeItem: {type: String, required: true},
    pokeAbility: {type: String, required: true},
    pokeMove1: {type: String, required: true},
    pokeMove2: {type: String, required: true},
    pokeMove3: {type: String, required: true},
    pokeMove4: {type: String, required: true},
    pokeNature: {type: String, required: true},
    poke_HPEVS: {type: Number, required: true},
    poke_AttackEVS: {type: Number, required: true},
    poke_DefenseEVS: {type: Number, required: true},
    poke_SpAtkEVS: {type: Number, required: true},
    poke_SpDefEVS: {type: Number, required: true},
    poke_SpeedEVS: {type: Number, required: true},
}, {
    timestamps: true,
});

const Pokeset = mongoose.model('Pokeset', pokesetSchema);

module.exports = Pokeset;