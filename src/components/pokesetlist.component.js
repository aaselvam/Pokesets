import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Pokeset = props => (
    <tr>
        <td>{props.pokeset.username}</td>
        <td>{props.pokeset.pokeName}</td>
        <td>{props.pokeset.pokeItem}</td>
        <td>{props.pokeset.pokeAbility}</td>
        <td>{props.pokeset.pokeMove1}</td>
        <td>{props.pokeset.pokeMove2}</td>
        <td>{props.pokeset.pokeMove3}</td>
        <td>{props.pokeset.pokeMove4}</td>
        <td>{props.pokeset.pokeNature}</td>
        <td>{props.pokeset.poke_HPEVS}</td>
        <td>{props.pokeset.poke_AttackEVS}</td>
        <td>{props.pokeset.poke_DefenseEVS}</td>
        <td>{props.pokeset.poke_SpAtkEVS}</td>
        <td>{props.pokeset.poke_SpDefEVS}</td>
        <td>{props.pokeset.poke_SpeedEVS}</td>
    </tr>
)

export default class PokesetList extends Component {
    constructor(props) {
        super(props);

        this.state = { pokesets: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:8000/pokesets')
            .then(response => {
                console.log(response.data);
                this.setState({ pokesets: response.data });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    pokesetLists() {
        return this.state.pokesets.map(currentSet => {
            return <Pokeset pokeset={currentSet} key={currentSet._id}/>;
        })
    }

    render() {
        return (
            <div>
                <h3>All Pokesets</h3>
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Pokemon Name</th>
                            <th>Item</th>
                            <th>Ability</th>
                            <th>Move 1</th>
                            <th>Move 2</th>
                            <th>Move 3</th>
                            <th>Move 4</th>
                            <th>Pokemon Nature</th>
                            <th>HP EVS</th>
                            <th>Attack EVS</th>
                            <th>Defense EVS</th>
                            <th>Special Attack EVS</th>
                            <th>Special Defense EVS</th>
                            <th>Speed EVS</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.pokesetLists() }
                    </tbody>
                </table>
                </div>
            </div>
        );
    }
}