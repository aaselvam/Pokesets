Users routes:

http://localhost:8000/users - GET lists all users

http://localhost:8000/users/add - POST add's a user, send a body with username and password parameters

http://localhost:8000/users/2Ux1Sq7mnG/:user - GET lists a specific user's password, this is the worst thing ever I should not have user password info available via API but I couldn't figure out how to query the database from the frontend

Pokeset routes:

http://localhost:8000/pokesets - GET lists all pokesets

http://localhost:8000/pokesets/add - POST add's a pokeset, send a body with the following info:
username, pokeName, pokeItem, pokeAbility, pokeMove1, pokeMove2, pokeMove3, pokeMove4, pokeNature, poke_HPEVS, poke_AttackEVS, poke_DefenseEVS, poke_SpAtkEVS, poke_SpDefEVS, poke_SpeedEVS

http://localhost:8000/pokesets/update/:id - POST updates a specific pokeset identified by the Object ID, doesn't actually make an appearance on the front end but this api endpoint still exists

http://localhost:8000/pokesets/:id - GET lists a specific pokeset by ID