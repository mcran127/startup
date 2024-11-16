import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import "./main.css";

export function Main(props) {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('userName');

    if (token && username) {
        fetch(`/api/newdeck`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
        .then((response) => response.json())
        .then((data) => {
            if (data && data.decks) {
                setDecks(data.decks);
            } else {
                setDecks([]);
            }
        })
        .catch((error) => {
            console.error('Error fetching decks:', error);
            setDecks([]);
        });
    }
}, []);


  function logout() {
    const token = localStorage.getItem('token');
  
    fetch(`/api/auth/logout`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token })
    })
    .then(() => {
        localStorage.removeItem('userName');
        localStorage.removeItem('token');
        props.onLogout();
        navigate('/');
    })
    .catch((error) => {
        console.error('Logout failed:', error);
    });
}


  const [decks, setDecks] = useState([
    {
      username: "TITLE",
      imageUrl:
        "https://static.wikia.nocookie.net/257d534d-755d-4547-be64-dabb04fac8b9/scale-to-width/755",
    },
    {
      username: "TITLE",
      imageUrl:
        "https://static.wikia.nocookie.net/257d534d-755d-4547-be64-dabb04fac8b9/scale-to-width/755",
    },
    {
      username: "TITLE",
      imageUrl:
        "https://static.wikia.nocookie.net/257d534d-755d-4547-be64-dabb04fac8b9/scale-to-width/755",
    },
    {
      username: "TITLE",
      imageUrl:
        "https://static.wikia.nocookie.net/257d534d-755d-4547-be64-dabb04fac8b9/scale-to-width/755",
    },
    {
      title: "TITLE",
      name: "NAME",
      imageUrl:
        "https://static.wikia.nocookie.net/257d534d-755d-4547-be64-dabb04fac8b9/scale-to-width/755",
    },
    {
      username: "TITLE",
      imageUrl:
        "https://static.wikia.nocookie.net/257d534d-755d-4547-be64-dabb04fac8b9/scale-to-width/755",
    },
    {
      username: "TITLE",
      imageUrl:
        "https://static.wikia.nocookie.net/257d534d-755d-4547-be64-dabb04fac8b9/scale-to-width/755",
    },
    {
      username: "TITLE",
      imageUrl:
        "https://static.wikia.nocookie.net/257d534d-755d-4547-be64-dabb04fac8b9/scale-to-width/755",
    },
  ]);

  const rows = [];
  for (let i = 0; i < decks.length; i += 4) {
    rows.push(decks.slice(i, i + 4));
  }

  return (
    <main className="container-fluid bg-secondary text-center">
      <h1>
        <span>
          <div>Latest Decks</div>
          <button type="button" onClick={() => logout()}>
            Logout
          </button>
          <NavLink to="/builder" id="newDeck">
            <button type="button">New Deck</button>
          </NavLink>
        </span>
      </h1>
      <section>
        <table>
          <tbody>
            {rows.map((row, rowIndex) => (
              <React.Fragment key={rowIndex}>
                <tr>
                  {row.map((deck, index) => (
                    <th key={`title-${rowIndex}-${index}`}>
                      {`${deck.username}`}
                    </th>
                  ))}
                </tr>
                <tr>
                  {row.map((deck, index) => (
                    <td key={`image-${rowIndex}-${index}`}>
                      <img src={deck.imageUrl} alt={deck.title} height={200} width={300}/>
                    </td>
                  ))}
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}
