import React, { useState } from 'react';
import './builder.css';

export function Builder() {

    const [pokemonList] = useState([
        { name: 'Bulbasaur', image: 'https://archives.bulbagarden.net/media/upload/thumb/f/fb/0001Bulbasaur.png/500px-0001Bulbasaur.png', stats: { hp: 45, attack: 49, defense: 49, specialAttack: 65, specialDefense: 65, speed: 45 } },
        { name: 'Choose your Pokemon', image: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Black_question_mark.png", stats: { hp: 0, attack: 0, defense: 0, specialAttack: 0, specialDefense: 0, speed: 0} },
        { name: 'Choose your Pokemon', image: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Black_question_mark.png", stats: { hp: 0, attack: 0, defense: 0, specialAttack: 0, specialDefense: 0, speed: 0} },
        { name: 'Choose your Pokemon', image: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Black_question_mark.png", stats: { hp: 0, attack: 0, defense: 0, specialAttack: 0, specialDefense: 0, speed: 0} },
        { name: 'Choose your Pokemon', image: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Black_question_mark.png", stats: { hp: 0, attack: 0, defense: 0, specialAttack: 0, specialDefense: 0, speed: 0} },
        { name: 'Choose your Pokemon', image: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Black_question_mark.png", stats: { hp: 0, attack: 0, defense: 0, specialAttack: 0, specialDefense: 0, speed: 0} },
      ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedPokemon, setSelectedPokemon] = useState(pokemonList[0]);

    const filteredPokemon = pokemonList.filter(pokemon =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };
    
    const handlePokemonSelect = (pokemon) => {
        setSelectedPokemon(pokemon);
    };

    const getStatWidth = (stat) => {
        return `${stat}%`;
      };

      const getStatBarClass = (stat) => {
        if (stat <= 45) {
            return 'stat-bar-low';
        } else if (stat <= 70) {
            return 'stat-bar-medium';
        } else {
            return 'stat-bar-high';
        }
    };

  return (
    <main className='container-fluid bg-secondary text-center'>
      <h1>Choose Your Pokemon</h1>
        <table>
            <tbody>
            <tr>
                {filteredPokemon.map((pokemon, index) => (
                <td key={index} onClick={() => handlePokemonSelect(pokemon)}>
                    <img src={pokemon.image} alt={pokemon.name} />
                </td>
                ))}
            </tr>
            <tr>
                {filteredPokemon.map((pokemon, index) => (
                <td key={index}>{pokemon.name}</td>
                ))}
            </tr>
            </tbody>
        </table>
        
        <div className="search">
            <form action="#">
                <input type="text" placeholder="Search Pokemon"
                    name="search" value = {searchTerm} onChange={handleSearchChange}>
                </input>
                <button>
                <i class="fa fa-search">Search</i>
                </button>
            </form>
        </div>

        <div>
            <h2>Stats of Pokemon</h2>
            <div id = "combined">
                <div id = "currPokemon">
                    <img src={selectedPokemon.image} alt={selectedPokemon.name}></img>
                </div>
                <table id="stats">
    <tr>
        <td>
            <div className={`stat-bar ${getStatBarClass(selectedPokemon.stats.hp)}`} style={{ width: getStatWidth(selectedPokemon.stats.hp) }}></div>
        </td>
        <td>
            <div className={`stat-bar ${getStatBarClass(selectedPokemon.stats.attack)}`} style={{ width: getStatWidth(selectedPokemon.stats.attack) }}></div>
        </td>
    </tr>
    <tr>
        <td>{selectedPokemon.stats.hp}</td>
        <td>{selectedPokemon.stats.attack}</td>
    </tr>
    <tr>
        <td>
            <div className={`stat-bar ${getStatBarClass(selectedPokemon.stats.defense)}`} style={{ width: getStatWidth(selectedPokemon.stats.defense) }}></div>
        </td>
        <td>
            <div className={`stat-bar ${getStatBarClass(selectedPokemon.stats.specialAttack)}`} style={{ width: getStatWidth(selectedPokemon.stats.specialAttack) }}></div>
        </td>
    </tr>
    <tr>
        <td>{selectedPokemon.stats.defense}</td>
        <td>{selectedPokemon.stats.specialAttack}</td>
    </tr>
    <tr>
        <td>
            <div className={`stat-bar ${getStatBarClass(selectedPokemon.stats.specialDefense)}`} style={{ width: getStatWidth(selectedPokemon.stats.specialDefense) }}></div>
        </td>
        <td>
            <div className={`stat-bar ${getStatBarClass(selectedPokemon.stats.speed)}`} style={{ width: getStatWidth(selectedPokemon.stats.speed) }}></div>
        </td>
    </tr>
    <tr>
        <td>{selectedPokemon.stats.specialDefense}</td>
        <td>{selectedPokemon.stats.speed}</td>
    </tr>
</table>

            </div>
        </div>
        <div id="SubmitButton">
            <a href="main">
            <button type="submit">Submit</button>
            </a>
        </div>
    </main>
  );
}