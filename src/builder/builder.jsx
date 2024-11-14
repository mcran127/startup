import React, { useState } from "react";
import "./builder.css";

export function Builder() {
  const [pokemonList, setPokemonList] = useState([
    {
        name: "Choose your Pokemon",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/5/5a/Black_question_mark.png",
        stats: {
          hp: 0,
          attack: 0,
          defense: 0,
          specialAttack: 0,
          specialDefense: 0,
          speed: 0,
        },
      },
    {
      name: "Choose your Pokemon",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/5/5a/Black_question_mark.png",
      stats: {
        hp: 0,
        attack: 0,
        defense: 0,
        specialAttack: 0,
        specialDefense: 0,
        speed: 0,
      },
    },
    {
      name: "Choose your Pokemon",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/5/5a/Black_question_mark.png",
      stats: {
        hp: 0,
        attack: 0,
        defense: 0,
        specialAttack: 0,
        specialDefense: 0,
        speed: 0,
      },
    },
    {
      name: "Choose your Pokemon",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/5/5a/Black_question_mark.png",
      stats: {
        hp: 0,
        attack: 0,
        defense: 0,
        specialAttack: 0,
        specialDefense: 0,
        speed: 0,
      },
    },
    {
      name: "Choose your Pokemon",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/5/5a/Black_question_mark.png",
      stats: {
        hp: 0,
        attack: 0,
        defense: 0,
        specialAttack: 0,
        specialDefense: 0,
        speed: 0,
      },
    },
    {
      name: "Choose your Pokemon",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/5/5a/Black_question_mark.png",
      stats: {
        hp: 0,
        attack: 0,
        defense: 0,
        specialAttack: 0,
        specialDefense: 0,
        speed: 0,
      },
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState(pokemonList[0]);

  const filteredPokemon = pokemonList.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = (event) => {
    event.preventDefault();

    fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`)
      .then((response) => response.json())
      .then((data) => {
        const pokemonData = {
          name: data.name,
          image: data.sprites.front_default,
          stats: {
            hp: data.stats.find(stat => stat.stat.name === 'hp').base_stat,
            attack: data.stats.find(stat => stat.stat.name === 'attack').base_stat,
            defense: data.stats.find(stat => stat.stat.name === 'defense').base_stat,
            specialAttack: data.stats.find(stat => stat.stat.name === 'special-attack').base_stat,
            specialDefense: data.stats.find(stat => stat.stat.name === 'special-defense').base_stat,
            speed: data.stats.find(stat => stat.stat.name === 'speed').base_stat,
          },
        };
        setSelectedPokemon(pokemonData);
        setPokemonList((prevList) => {
            return prevList.map((pokemon) =>
              pokemon.name === "Choose your Pokemon" ? pokemonData : pokemon
            );
          });
      })
  };

  const getStatWidth = (stat) => {
    return `${stat}%`;
  };

  const getStatBarClass = (stat) => {
    if (stat <= 45) {
      return "stat-bar-low";
    } else if (stat <= 70) {
      return "stat-bar-medium";
    } else {
      return "stat-bar-high";
    }
  };

  return (
    <main className="container-fluid bg-secondary text-center">
      <h1>Choose Your Pokemon</h1>
      <table>
        <tbody>
          <tr>
            {pokemonList.map((pokemon, index) => (
              <td key={index} onClick={() => setSelectedPokemon(pokemon)}>
                <img src={pokemon.image} alt={pokemon.name} />
              </td>
            ))}
          </tr>
          <tr>
            {pokemonList.map((pokemon, index) => (
              <td key={index}>{pokemon.name}</td>
            ))}
          </tr>
        </tbody>
      </table>

      <div className="search">
        <form action="#">
          <input
            type="text"
            placeholder="Search Pokemon"
            name="search"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button onClick={handleSearchClick}>
            <i className="fa fa-search">Search</i>
          </button>
        </form>
      </div>

      <div>
        <h2>Stats of Pokemon</h2>
        <div id="combined">
          <div id="currPokemon">
            <img src={selectedPokemon.image} alt={selectedPokemon.name}></img>
          </div>
          <table id="stats">
            <tr>
              <td>
                <div
                  className={`stat-bar ${getStatBarClass(selectedPokemon.stats.hp)}`}
                  style={{ width: getStatWidth(selectedPokemon.stats.hp) }}
                ></div>
              </td>
              <td>
                <div
                  className={`stat-bar ${getStatBarClass(selectedPokemon.stats.attack)}`}
                  style={{ width: getStatWidth(selectedPokemon.stats.attack) }}
                ></div>
              </td>
            </tr>
            <tr>
              <td>{selectedPokemon.stats.hp}</td>
              <td>{selectedPokemon.stats.attack}</td>
            </tr>
            <tr>
              <td>
                <div
                  className={`stat-bar ${getStatBarClass(selectedPokemon.stats.defense)}`}
                  style={{ width: getStatWidth(selectedPokemon.stats.defense) }}
                ></div>
              </td>
              <td>
                <div
                  className={`stat-bar ${getStatBarClass(selectedPokemon.stats.specialAttack)}`}
                  style={{
                    width: getStatWidth(selectedPokemon.stats.specialAttack),
                  }}
                ></div>
              </td>
            </tr>
            <tr>
              <td>{selectedPokemon.stats.defense}</td>
              <td>{selectedPokemon.stats.specialAttack}</td>
            </tr>
            <tr>
              <td>
                <div
                  className={`stat-bar ${getStatBarClass(selectedPokemon.stats.specialDefense)}`}
                  style={{
                    width: getStatWidth(selectedPokemon.stats.specialDefense),
                  }}
                ></div>
              </td>
              <td>
                <div
                  className={`stat-bar ${getStatBarClass(selectedPokemon.stats.speed)}`}
                  style={{ width: getStatWidth(selectedPokemon.stats.speed) }}
                ></div>
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
