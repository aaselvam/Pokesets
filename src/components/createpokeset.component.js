import React, {Component} from 'react';
import axios from 'axios';

export default class CreatePokeset extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePokename = this.onChangePokename.bind(this);
        this.onChangePokeItem = this.onChangePokeItem.bind(this);
        this.onChangePokeAbility = this.onChangePokeAbility.bind(this);
        this.onChangePokeMove1 = this.onChangePokeMove1.bind(this);
        this.onChangePokeMove2 = this.onChangePokeMove2.bind(this);
        this.onChangePokeMove3 = this.onChangePokeMove3.bind(this);
        this.onChangePokeMove4 = this.onChangePokeMove4.bind(this);
        this.onChangePokeNature = this.onChangePokeNature.bind(this);
        this.onChangePoke_HPEVS = this.onChangePoke_HPEVS.bind(this);
        this.onChangePoke_AttackEVS = this.onChangePoke_AttackEVS.bind(this);
        this.onChangePoke_DefenseEVS = this.onChangePoke_DefenseEVS.bind(this);
        this.onChangePoke_SpAtkEVS = this.onChangePoke_SpAtkEVS.bind(this);
        this.onChangePoke_SpDefEVS = this.onChangePoke_SpDefEVS.bind(this);
        this.onChangePoke_SpeedEVS = this.onChangePoke_SpeedEVS.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            pokeName: '',
            pokeItem: '',
            pokeAbility: '',
            pokeMove1: '',
            pokeMove2: '',
            pokeMove3: '',
            pokeMove4: '',
            pokeNature: '',
            poke_HPEVS: 0,
            poke_AttackEVS: 0,
            poke_DefenseEVS: 0,
            poke_SpAtkEVS: 0,
            poke_SpDefEVS: 0,
            poke_SpeedEVS: 0,
            users: [],
            pokemonimageurl: 'https://pngimg.com/uploads/pokeball/pokeball_PNG8.png',
            itemimageurl: 'https://raw.githubusercontent.com/msikma/pokesprite/master/items/ball/cherish.png'
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8000/users')
            .then(res => {
                var list = res.data.map(user => user.username);
                list.push('Anonymous');
                if(res.data.length > 0) {
                    this.setState({
                        users: list,
                        username: 'Anonymous'
                    })
                }
            });
    }

    onChangeUsername(e) {
        this.setState({username: e.target.value});
        try {
            let user = axios.get('http://localhost:8000/users/2Ux1Sq7mnG/' + e.target.value)
                .then(res => {
                    var pass = res.data[0].password;
                    var enteredPass = prompt("Please enter your password");
                    if(pass == enteredPass) {
                        console.log("correct");
                        this.setState({username: e.target.value});
                    } else {
                        this.setState({username: 'Anonymous'});
                        alert("Wrong password");
                    }
                })
        } catch(err) {
            console.log(err);
        }
    }

    onChangePokename(e) {
        this.setState({pokeName: e.target.value});
        try {
            let url = axios.get('http://pokeapi.co/api/v2/pokemon/' + e.target.value.toLowerCase())
                .then(res => {
                    var pokeData = res.data;
                    if(pokeData.sprites === undefined) {
                        console.log("undefined");
                    } else {
                        console.log(pokeData.sprites.front_default);
                        this.setState({pokemonimageurl: pokeData.sprites.front_default})
                    }
                })
        } catch(err) {
            console.log(err);
        }
    }

    onChangePokeItem(e) {
        this.setState({pokeItem: e.target.value});
        var pokeItem = e.target.value.toLowerCase().replace(/ /g,"-");
        try {
            let url = axios.get('https://raw.githubusercontent.com/msikma/pokesprite/master/items/hold-item/' + pokeItem + '.png')
                .then(res => {
                    this.setState({itemimageurl: 'https://raw.githubusercontent.com/msikma/pokesprite/master/items/hold-item/' + pokeItem + '.png'});
                })
        } catch(err) {
            console.log(err);
        }
        console.log(pokeItem);
    }

    onChangePokeAbility(e) {this.setState({pokeAbility: e.target.value});}
    onChangePokeMove1(e) {this.setState({pokeMove1: e.target.value});}
    onChangePokeMove2(e) {this.setState({pokeMove2: e.target.value});}
    onChangePokeMove3(e) {this.setState({pokeMove3: e.target.value});}
    onChangePokeMove4(e) {this.setState({pokeMove4: e.target.value});}
    onChangePokeNature(e) {this.setState({pokeNature: e.target.value});}
    onChangePoke_HPEVS(e) {this.setState({poke_HPEVS: e.target.value});}
    onChangePoke_AttackEVS(e) {this.setState({poke_AttackEVS: e.target.value});}
    onChangePoke_DefenseEVS(e) {this.setState({poke_DefenseEVS: e.target.value});}
    onChangePoke_SpAtkEVS(e) {this.setState({poke_SpAtkEVS: e.target.value});}
    onChangePoke_SpDefEVS(e) {this.setState({poke_SpDefEVS: e.target.value});}
    onChangePoke_SpeedEVS(e) {this.setState({poke_SpeedEVS: e.target.value});}
    
    onSubmit(e) {
        e.preventDefault();

        const pokeset = {
            username: this.state.username,
            pokeName: this.state.pokeName,
            pokeItem: this.state.pokeItem,
            pokeAbility: this.state.pokeAbility,
            pokeMove1: this.state.pokeMove1,
            pokeMove2: this.state.pokeMove2,
            pokeMove3: this.state.pokeMove3,
            pokeMove4: this.state.pokeMove4,
            pokeNature: this.state.pokeNature,
            poke_HPEVS: this.state.poke_HPEVS,
            poke_AttackEVS: this.state.poke_AttackEVS,
            poke_DefenseEVS: this.state.poke_DefenseEVS,
            poke_SpAtkEVS: this.state.poke_SpAtkEVS,
            poke_SpDefEVS: this.state.poke_SpDefEVS,
            poke_SpeedEVS: this.state.poke_SpeedEVS,
        }

        console.log(pokeset);

        axios.post('http://localhost:8000/pokesets/add', pokeset)
            .then(res => console.log(res.data));

        window.location = '/';
    }

    render() {
        return (
        <div>
            <h2>Create New Pokeset</h2>
            <form onSubmit={this.onSubmit}>
                <div className="form-group"> 
                <label>Username: </label>
                <select ref="userInput"
                    required
                    className="form-control"
                    value={this.state.username}
                    onChange={this.onChangeUsername}>
                    {
                        this.state.users.map(function(user) {
                        return <option 
                            key={user}
                            value={user}>{user}
                            </option>;
                        })
                    }
                </select>
                </div>
                <div className="form-group"> 
                <label>Pokemon Name: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.pokeName}
                    onChange={this.onChangePokename}
                    />
                </div>
                <div>
                    <img src={this.state.pokemonimageurl} width="200" height="200"/>
                </div>
                <div className="form-group"> 
                <label>Pokemon Item: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.pokeItem}
                    onChange={this.onChangePokeItem}
                    />
                </div>
                <div>
                    <img src={this.state.itemimageurl} width="100" height="100"/>
                </div>
                <div className="form-group"> 
                <label>Pokemon Ability: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.pokeAbility}
                    onChange={this.onChangePokeAbility}
                    />
                </div>
                <div className="form-group"> 
                <label>Pokemon Move 1: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.pokeMove1}
                    onChange={this.onChangePokeMove1}
                    />
                </div>
                <div className="form-group"> 
                <label>Pokemon Move 2: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.pokeMove2}
                    onChange={this.onChangePokeMove2}
                    />
                </div>
                <div className="form-group"> 
                <label>Pokemon Move 3: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.pokeMove3}
                    onChange={this.onChangePokeMove3}
                    />
                </div>
                <div className="form-group"> 
                <label>Pokemon Move 4: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.pokeMove4}
                    onChange={this.onChangePokeMove4}
                    />
                </div>
                <div className="form-group"> 
                <label>Pokemon Nature: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.pokeNature}
                    onChange={this.onChangePokeNature}
                    />
                </div>
                <div className="form-group"> 
                <label>Pokemon HP EVS: </label>
                <input  type="number"
                    required
                    className="form-control"
                    value={this.state.poke_HPEVS}
                    onChange={this.onChangePoke_HPEVS}
                    min="0"
                    max="252"
                    />
                </div>
                <div className="form-group"> 
                <label>Pokemon Attack EVS: </label>
                <input  type="number"
                    required
                    className="form-control"
                    value={this.state.poke_AttackEVS}
                    onChange={this.onChangePoke_AttackEVS}
                    min="0"
                    max="252"
                    />
                </div>
                <div className="form-group"> 
                <label>Pokemon Defense EVS: </label>
                <input  type="number"
                    required
                    className="form-control"
                    value={this.state.poke_DefenseEVS}
                    onChange={this.onChangePoke_DefenseEVS}
                    min="0"
                    max="252"
                    />
                </div>
                <div className="form-group"> 
                <label>Pokemon Special Attack EVS: </label>
                <input  type="number"
                    required
                    className="form-control"
                    value={this.state.poke_SpAtkEVS}
                    onChange={this.onChangePoke_SpAtkEVS}
                    min="0"
                    max="252"
                    />
                </div>
                <div className="form-group"> 
                <label>Pokemon Special Defense EVS: </label>
                <input  type="number"
                    required
                    className="form-control"
                    value={this.state.poke_SpDefEVS}
                    onChange={this.onChangePoke_SpDefEVS}
                    min="0"
                    max="252"
                    />
                </div>
                <div className="form-group"> 
                <label>Pokemon Speed EVS: </label>
                <input  type="number"
                    required
                    className="form-control"
                    value={this.state.poke_SpeedEVS}
                    onChange={this.onChangePoke_SpeedEVS}
                    min="0"
                    max="252"
                    />
                </div>
                <div className="form-group">
                <input type="submit" value="Create Pokeset" className="btn btn-primary" />
                </div>
            </form>
        </div>
        );
    }
}