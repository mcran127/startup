# startup
## Notes.md
[Notes.md](https://github.com/mcran127/startup/blob/main/notes.md)

## HTML Deliverable

For this deliverable, I used HTMl to build the base structure of my website. It contains
*3 pages, the first representing login, the second being a main page, and the third being a team builder page
*3 buttons that represent logging in taking you to main, new team which takes you to builder, and submit which takes you back to main
*Images representing how the main page will show teams, and how the team builder will show pokemon. I used images temporarily for the adjustable stat bars until I figure out how I will make them work
*Websocket and database is represented by the images shown on the main page and the search bar that will get the pokemon and info on the team builder page.

## CSS Deliverable

For this deliverable, I used CSS to style the webpage
*Elements are split up nicely, by background, lines, or padding
*Buttons look like buttons
*Elements resize based on screen size except the current pokemon in builder which I wanted to be fairly big even if it meant scrolling vertically. However, it's width is still limited.
*Images are still primarily placeholders
*HTMl was adjusted in order to properly create head section
*Naviagtion is limited to the buttons so there's no naviagation section

## React Deliverable

For this deliverable, I transfered my previous html files into a javascript/jsx format to make it all one page and simulat more of how the website acts
*Bundled and transpiled code
*login uses authstate to enter although no logout, perhaps to be added later
*Main displays the same but have been prepared to update when things are added
*Builder changed the most, having the search bar prepared to add stuff to the team, currently selected pokemon has picture and stats shown, and stats are represented by a progress bar element
*Still able to move between components through buttons and now a sidebar.
*Hooks allow various states like currPokemon to be updated

## Service Deliverable

For this deliverable I added backend options first to a 3rd party that gets pokemon and their stats, and then to my own for calls to login and the decks
*Node index.js for service
*3rd party call of pokeapi in builder page
*use of post and get for builder to submit decks and main page to retrieve them
*placeholder for login and logou service. Too lazy to format it with css though. oops