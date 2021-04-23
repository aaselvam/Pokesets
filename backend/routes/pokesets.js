const router = require('express').Router();
let Pokeset = require('../models/pokeset.model');

router.route('/').get((req, res) => {
    Pokeset.find()
        .then(pokesets => res.json(pokesets))
        .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/add').post((req, res) => {
    console.log(req.body.username);
    const username = req.body.username;
    const pokeName = req.body.pokeName;
    const pokeItem = req.body.pokeItem;
    const pokeAbility = req.body.pokeAbility;
    const pokeMove1 = req.body.pokeMove1;
    const pokeMove2 = req.body.pokeMove2;
    const pokeMove3 = req.body.pokeMove3;
    const pokeMove4 = req.body.pokeMove4;
    const pokeNature = req.body.pokeNature;
    const poke_HPEVS = req.body.poke_HPEVS;
    const poke_AttackEVS = req.body.poke_AttackEVS;
    const poke_DefenseEVS = req.body.poke_DefenseEVS;
    const poke_SpAtkEVS = req.body.poke_SpAtkEVS;
    const poke_SpDefEVS = req.body.poke_SpDefEVS;
    const poke_SpeedEVS = req.body.poke_SpeedEVS;

    const newPokeset = new Pokeset({
        username,
        pokeName,
        pokeItem,
        pokeAbility,
        pokeMove1,
        pokeMove2,
        pokeMove3,
        pokeMove4,
        pokeNature,
        poke_HPEVS,
        poke_AttackEVS,
        poke_DefenseEVS,
        poke_SpAtkEVS,
        poke_SpDefEVS,
        poke_SpeedEVS,
    });

    newPokeset.save()
        .then(() => res.json('Pokeset added'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Pokeset.findById(req.params.id)
      .then(pokeset => {
        pokeset.username = req.body.username;
        pokeset.pokeName = req.body.pokeName;
        pokeset.pokeItem = req.body.pokeItem;
        pokeset.pokeAbility = req.body.pokeAbility;
        pokeset.pokeMove1 = req.body.pokeMove1;
        pokeset.pokeMove2 = req.body.pokeMove2;
        pokeset.pokeMove3 = req.body.pokeMove3;
        pokeset.pokeMove4 = req.body.pokeMove4;
        pokeset.pokeNature = req.body.pokeNature;
        pokeset.poke_HPEVS = req.body.poke_HPEVS;
        pokeset.poke_AttackEVS = req.body.poke_AttackEVS;
        pokeset.poke_DefenseEVS = req.body.poke_DefenseEVS;
        pokeset.poke_SpAtkEVS = req.body.poke_SpAtkEVS;
        pokeset.poke_SpDefEVS = req.body.poke_SpDefEVS;
        pokeset.poke_SpeedEVS = req.body.poke_SpeedEVS;
  
        pokeset.save()
          .then(() => res.json('Pokeset updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/:id').get((req, res) => {
    Pokeset.findById(req.params.id)
      .then(pokeset => res.json(pokeset))
      .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;