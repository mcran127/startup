import React, { useState } from 'react';
import './main.css';

export function Main() {

    const [decks, setDecks] = useState([
        {
          title: "TITLE",
          name: "NAME",
          imageUrl: "https://static.wikia.nocookie.net/257d534d-755d-4547-be64-dabb04fac8b9/scale-to-width/755"
        },
        {
          title: "TITLE",
          name: "NAME",
          imageUrl: "https://static.wikia.nocookie.net/257d534d-755d-4547-be64-dabb04fac8b9/scale-to-width/755"
        },
        {
          title: "TITLE",
          name: "NAME",
          imageUrl: "https://static.wikia.nocookie.net/257d534d-755d-4547-be64-dabb04fac8b9/scale-to-width/755"
        },
        {
          title: "TITLE",
          name: "NAME",
          imageUrl: "https://static.wikia.nocookie.net/257d534d-755d-4547-be64-dabb04fac8b9/scale-to-width/755"
        },
        {
          title: "TITLE",
          name: "NAME",
          imageUrl: "https://static.wikia.nocookie.net/257d534d-755d-4547-be64-dabb04fac8b9/scale-to-width/755"
        },
        {
          title: "TITLE",
          name: "NAME",
          imageUrl: "https://static.wikia.nocookie.net/257d534d-755d-4547-be64-dabb04fac8b9/scale-to-width/755"
        },
        {
          title: "TITLE",
          name: "NAME",
          imageUrl: "https://static.wikia.nocookie.net/257d534d-755d-4547-be64-dabb04fac8b9/scale-to-width/755"
        },
        {
          title: "TITLE",
          name: "NAME",
          imageUrl: "https://static.wikia.nocookie.net/257d534d-755d-4547-be64-dabb04fac8b9/scale-to-width/755"
        },
      ]);

    const rows = [];
    for (let i = 0; i < decks.length; i += 4) {
        rows.push(decks.slice(i, i + 4));
    }

  return (
    <main className='container-fluid bg-secondary text-center'>
      <h1>
          <span>
              <div>Latest Decks</div>
              <a href="builder" id="newDeck">
                  <button type="button">New Deck</button>
              </a>
          </span>
      </h1>
      <section>
          <table>
            <thead>
                <tr>
                {rows[0]?.map((deck, index) => (
                    <th key={index}>{`${deck.title} by ${deck.name}`}</th>
                ))}
                </tr>
            </thead>
            <tbody>
                {rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                    {row.map((deck, index) => (
                    <td key={index}>
                        <img
                        src={deck.imageUrl}
                        alt={deck.title}
                        height={200}
                        width={300}
                        />
                    </td>
                    ))}
                </tr>
                ))}
            </tbody>
            </table>
      </section>
    </main>
  );
}