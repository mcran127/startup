import React from 'react';
import './main.css';

export function Main() {
  return (
    <main className='container-fluid bg-secondary text-center'>
      <h1>
          <span>
              <div>Latest Decks</div>
              <a href="builder.html" id="newDeck">
                  <button type="button">New Deck</button>
              </a>
          </span>
      </h1>
      <section>
          <table>
              <tr id="names">
                <th>TITLE by NAME</th>
                <th>TITLE by NAME</th>
                <th>TITLE by NAME</th>
                <th>TITLE by NAME</th>
              </tr>
              <tr id="images">
                <td><img src="https://static.wikia.nocookie.net/257d534d-755d-4547-be64-dabb04fac8b9/scale-to-width/755" alt="" height={200} width={300}></img></td>
                <td><img src="https://static.wikia.nocookie.net/257d534d-755d-4547-be64-dabb04fac8b9/scale-to-width/755" alt="" height={200} width={300}></img></td>
                <td><img src="https://static.wikia.nocookie.net/257d534d-755d-4547-be64-dabb04fac8b9/scale-to-width/755" alt="" height={200} width={300}></img></td>
                <td><img src="https://static.wikia.nocookie.net/257d534d-755d-4547-be64-dabb04fac8b9/scale-to-width/755" alt="" height={200} width={300}></img></td>
              </tr>
              <tr id="names">
                  <th>TITLE by NAME</th>
                  <th>TITLE by NAME</th>
                  <th>TITLE by NAME</th>
                  <th>TITLE by NAME</th>
                </tr>
                <tr id="images">
                  <td><img src="https://static.wikia.nocookie.net/257d534d-755d-4547-be64-dabb04fac8b9/scale-to-width/755" alt="" height={200} width={300}></img></td>
                  <td><img src="https://static.wikia.nocookie.net/257d534d-755d-4547-be64-dabb04fac8b9/scale-to-width/755" alt="" height={200} width={300}></img></td>
                  <td><img src="https://static.wikia.nocookie.net/257d534d-755d-4547-be64-dabb04fac8b9/scale-to-width/755" alt="" height={200} width={300}></img></td>
                  <td><img src="https://static.wikia.nocookie.net/257d534d-755d-4547-be64-dabb04fac8b9/scale-to-width/755" alt="" height={200} width={300}></img></td>
                </tr>
            </table>
      </section>
    </main>
  );
}