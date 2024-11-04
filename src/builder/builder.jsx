import React from 'react';
import './builder.css';

export function Builder() {
  return (
    <main className='container-fluid bg-secondary text-center'>
      <h1>Choose Your Pokemon</h1>
        <table>
            <tr>
                <td><img src="https://archives.bulbagarden.net/media/upload/thumb/f/fb/0001Bulbasaur.png/500px-0001Bulbasaur.png" alt=""></img></td>
                <td><img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Black_question_mark.png" alt=""></img></td>
                <td><img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Black_question_mark.png" alt=""></img></td>
                <td><img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Black_question_mark.png" alt=""></img></td>
                <td><img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Black_question_mark.png" alt=""></img></td>
                <td><img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Black_question_mark.png" alt=""></img></td>
            </tr>
            <tr>
                <td>Pokemon Name Here</td>
                <td>Pokemon Name Here</td>
                <td>Pokemon Name Here</td>
                <td>Pokemon Name Here</td>
                <td>Pokemon Name Here</td>
                <td>Pokemon Name Here</td>
            </tr>
        </table>
        <div class="search">
            <form action="#">
                <input type="text" placeholder="Search Pokemon"
                    name="search">
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
                    <img src="https://archives.bulbagarden.net/media/upload/thumb/f/fb/0001Bulbasaur.png/500px-0001Bulbasaur.png" alt=""></img>
                </div>
                <table id="stats">
                    <tr>
                        <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbJ1e0DJuvhm69F3mOg4NpsS4Y4x4A0QI-Hg&s" alt=""></img></td>
                        <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbJ1e0DJuvhm69F3mOg4NpsS4Y4x4A0QI-Hg&s" alt=""></img></td>
                    </tr>
                    <tr>
                        <td>100</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbJ1e0DJuvhm69F3mOg4NpsS4Y4x4A0QI-Hg&s" alt=""></img></td>
                        <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbJ1e0DJuvhm69F3mOg4NpsS4Y4x4A0QI-Hg&s" alt=""></img></td>
                    </tr>
                    <tr>
                        <td>100</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbJ1e0DJuvhm69F3mOg4NpsS4Y4x4A0QI-Hg&s" alt=""></img></td>
                        <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbJ1e0DJuvhm69F3mOg4NpsS4Y4x4A0QI-Hg&s" alt=""></img></td>
                    </tr>
                    <tr>
                        <td>100</td>
                        <td>100</td>
                    </tr>
                </table>
            </div>
        </div>
        <div id="SubmitButton">
            <a href="main.html">
            <button type="submit">Submit</button>
            </a>
        </div>
    </main>
  );
}