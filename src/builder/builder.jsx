import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./builder.css";

export function Builder(props) {
  const { userName } = props;
  const navigate = useNavigate();

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
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSubmit = () => {
    const selectedPokemon = pokemonList[0];
    const newDeck = {
      username: userName,
      imageUrl: selectedPokemon.image,
    };

    console.log(newDeck);
  
    fetch('/api/newdeck', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newDeck),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Deck updated successfully');
          navigate('/main');
        } else {
          console.error('Failed to update deck');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

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
        const updatedPokemonList = [...pokemonList];
        updatedPokemonList[selectedIndex] = pokemonData;
        setPokemonList(updatedPokemonList);
        setSelectedIndex(selectedIndex);
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
              <td key={index} onClick={() => setSelectedIndex(index)} style={{
                border: index === selectedIndex ? "2px solid yellow" : "none",
              }}>
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
            <img src={pokemonList[selectedIndex].image} alt={pokemonList[selectedIndex].name}></img>
          </div>
          <table id="stats">
            <tr>
              <td>
                <div
                  className={`stat-bar ${getStatBarClass(pokemonList[selectedIndex].stats.hp)}`}
                  style={{ width: getStatWidth(pokemonList[selectedIndex].stats.hp) }}
                ></div>
              </td>
              <td>
                <div
                  className={`stat-bar ${getStatBarClass(pokemonList[selectedIndex].stats.attack)}`}
                  style={{ width: getStatWidth(pokemonList[selectedIndex].stats.attack) }}
                ></div>
              </td>
            </tr>
            <tr>
              <td>{pokemonList[selectedIndex].stats.hp}</td>
              <td>{pokemonList[selectedIndex].stats.attack}</td>
            </tr>
            <tr>
              <td>
                <div
                  className={`stat-bar ${getStatBarClass(pokemonList[selectedIndex].stats.defense)}`}
                  style={{ width: getStatWidth(pokemonList[selectedIndex].stats.defense) }}
                ></div>
              </td>
              <td>
                <div
                  className={`stat-bar ${getStatBarClass(pokemonList[selectedIndex].stats.specialAttack)}`}
                  style={{
                    width: getStatWidth(pokemonList[selectedIndex].stats.specialAttack),
                  }}
                ></div>
              </td>
            </tr>
            <tr>
              <td>{pokemonList[selectedIndex].stats.defense}</td>
              <td>{pokemonList[selectedIndex].stats.specialAttack}</td>
            </tr>
            <tr>
              <td>
                <div
                  className={`stat-bar ${getStatBarClass(pokemonList[selectedIndex].stats.specialDefense)}`}
                  style={{
                    width: getStatWidth(pokemonList[selectedIndex].stats.specialDefense),
                  }}
                ></div>
              </td>
              <td>
                <div
                  className={`stat-bar ${getStatBarClass(pokemonList[selectedIndex].stats.speed)}`}
                  style={{ width: getStatWidth(pokemonList[selectedIndex].stats.speed) }}
                ></div>
              </td>
            </tr>
            <tr>
              <td>{pokemonList[selectedIndex].stats.specialDefense}</td>
              <td>{pokemonList[selectedIndex].stats.speed}</td>
            </tr>
          </table>
        </div>
      </div>
      <div id="SubmitButton">
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </div>
    </main>
  );
}
