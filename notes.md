# Git

## Git Clone
git clone "name of repo"
exact clone with the remote source being the github repository

## Git Push and Commit
git push/commit
pushes changes into remote repository, used with git commit
can require personal access token

## Git Fetch, Status, and Pull
git fetch/status/pull
git fetch gets latest info, status shows us what changes between the remote and local
git pull syncs the changes

## Merge Conflicts
happens when modifying same line of code. such as 2 commits on the same line from 2 different places
when this happens, modify file to keep wanted changes. push out afterwards

## Forking a repo
copy of repository but cloned to github instead of local machine. 
You can pull original repo changes but cant force push. You can request to push though called pull request


# EC2
Elastic IP 174.129.248.23
remote in using ssh -i /Users/matthewcrandall/Documents/cs260/cs260KP.pem ubuntu@174.129.248.23


# Startup Specification

## Elevator Pitch
Ever wanted to show off your favorite Pokemon teams? Or perhaps you're looking for ideas on a new playthrough? This is a simple team builder site that constantly loads the latest additions from all players. Simply search the name of the Pokemon you're looking for and add it to your team. You'll also be able to look at some basic information for each Pokemon as you look it up. 

## Design
![Rough mockup of the login page](https://github.com/mcran127/startup/blob/main/cs260Login.png)

![Rough mockup of the main page](https://github.com/mcran127/startup/blob/main/cs260Main.png)

![Rough mockup of the team builder page](https://github.com/mcran127/startup/blob/main/cs260Builder.png)

## Key Features
- Secure HTTPS login
- Displaying the latest uploaded teams
- Ability to build your own team
- Builder gives information on chosen Pokemon

## Technologies

- HTML - Uses correct HTML structure over 3 pages. One for the login, one for the main page where latest teams are shown, and one for the builder page itself.
- CSS - Application styling to properly display all images regardless of screen size without feeling too cluttered. Simple design and color to not overwhelm site visitors.
- Javascript & React - Provides login, can move to the team builder page, can add pokemon to team, can submit teams to database. React will be used for routing.
- Service - Endpoints for login, retrieving pokemon and data, and retreiving most current team builds.
- Database - Stores the most recent users and their teams.
- WebSocket - Most recent team builds are displayed to other site visitors.


# HTTPS, TLS, and Certificates

*Secure* HTTP
TLS/SSL, uses a handshake
Certificates are a 3rd party generated item for checking/confirming who owns a site. Let's encrypt made it free, issues certificate to requester

## Caddy

Caddyfile includes startup and simon
Replacing port 80 (unsecured) to 443 (secured)


# HTML

## HTML Startup

Code is structured <*></*>
Blocks of code versus inline code. \<header\>, \<main\>, \<Section\>, vs. \<ul\>, \<li\>, \<tr\> \<th\>, \<div\>, etc.
body, header, footer, main, section, aside, p, table, ol/ul, div, and span
\<html\> is top level, \<head\> is metadata, \<body\> is main page, \<main\> is main content. \<div\> is blocks
attributes are things like id and class
links are \<a href = "(link)"\>
comment with \<!-- -->
default page of index.html

## HTML Inputs

HTML accepts user data through forms, now more used in JavaScript
Now more used for structure but we still have input elements.
text, password, email, tel, url, number, checkbox, radio, range, date, datetime-local, month, week, color, file, submit
Contains attributes such as name, preset value, disabled to stop interactivity, and required
Some have validation prebuilt in like alpha, numerical, must be a url, etc.
Pattern exists that must follow a certain pattern for text, search, url, tel, email, and password. Should also be built into JavaScript


## HTML Media

img, audio, video, svg, and canvas
first three are can be linked to external sources
other two render in code
image takes an absolute or relative link, audio takes url and controls can autoplay or loop, videos have similar controls, takes url, and might need crossorigin="anonymous"
scalable vector graphics and canvas both draw the items.

## HTML Startup

Created 3 pages, a login that is index.html, a main page where you'll be able to see images of 6 pokemon that others created as their team, and a button to create your own team that'll take you to the last page, a team builder page where you can see pokemon youve added, their stats, and a submit button that will eventually add the tean you just made to the main page.


# CSS

## CSS Practice

CSS is structured by rules where rules are, selector {info}, with info being structured property: value;
Some things are color, background-color, font-family/weight/style/size, padding, borders, and more
For color, use hex, measurements can be done in percentages and things like px or em.
Can put CSS in HTMl by using style="info". You can also use the style element in html \<style\>
Finally, use \<link rel="stylesheet" href="doc.css"\> usually using link. Bottom will override top on the sheet and inline overrides linked
CSS defines in boxes. From in->out, content, padding (background color), border (color, thickness, line style), and margin (whitespace)
Change box sizing from content-box to border-box to redefine to show actual size.
\* is all elements.
children have descendants (a b), children (a > b), general siblings (a ~ b), and aadjacent siblings (a + b)
class selectors are .name or can add selectors so selector.name. ID's are similar except they use #name
can also attribute select like selector[class="name"]. pseudo selectors like section:hover

### CSS Declarations

Declarations inclue background-color, border, border-radius, box-shadow, columns, column-rule, color, display, filter, float,
flex, font, grid, height, margin, max/min-width/height, opactiy, overflow, position, padding, left, text-align, top, transfrom,
width, and z-index.
Units include px (pixels), pt (1/72 in), in, cm, %, em (multiplier of m in parent font), rem (but for root),
ex (height of element), vw/h (viewport), vmin/max.

### CSS Fonts

Serif, sans-Serif, fixed, and symbol. Serif have the swoosh. Fixed is same size and symbols are symbols
Import fonts to be used later with @font-face with font-family: name; and src: url("url");
Can also do @import url("link");

### CSS Animation

to animate, you need animation-name and animation-duration. the @keyframes name then from {} to {}
use % at another keyframe like 50%


## CSS Flex

Responsive design for different screens. None doesnt display, block is parent element, inline is content,
flex is flexible and grid
Viewport meta tag \<meta name="viewport" content="width=device-width, initial-scale=1" /> doesnt scale page
float property moves to left or right and other stuff wraps aroubnd it as screen changes
media queries for things like mobile changes. @media (orientation: portrait) {div {transform: rotate(xdeg);}}
or make things like asides disappear by setting display none.

Grid layouts. grid-template-columns repeat autofill minmax 300px 1fr

Flexbox picked by display flex. Flex direction is either column or default row. or reverse
flex 0 80 px is doesn't grow and minimum 80 px, flex 1 is gets 1 unit per growth. you could do 1 and 3 for 25%/75%
again, use @media (orientation...) to change flex direction. maybe hide when max-height is so big

## CSS Frameworks

use inspect to check, you can see on elements tab. Styles pane is css properties on current element which highlights browser window
Edit from there to see what changes
CSS Frameworks include tailwind focusing on smaller definitions straight into HTMl rather than other files
Bootstrap is huge, put in header file. Can also put in script for javascript.
Btn-primary is blue rounded button, looks better than plain.
Accordian component

'''
\<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo"\>
    Accordion Button 2
\</button\>
'''

## CSS Startup

Pain. Use 100%, align-text, and vertical-align more


# Javascript

## Javascript Arrays

console.log(). console.time and timeEnd, count, 
can be added to script of html or through src of outside file
define vars with let or const.
== vs ===
if, else and else if. also can use a === 1 ? console.log(1) : console.log('not 1');
loop with for, whiles
strings and unicode. use things like length, index of, split, etc
functions can take operations as parameters, and functions in other functions
debounce is a "timer", arrow => is this parameter
arrays have push, pop, every, reduce, map, fine, forEach, etc.

## Javascript Document Object Model

JSON has key pairs, uses parse and stringify. Undefineds are removed
objects have entries, split by keys and values. this will mean the object itself. private by adding #
extends for inheritence and use super to get parent functions
...var gets the all of the last parameter in an array. ONLY THE LAST
spread does the opposite
try catch finally is try to do code, do if fails, do regardless
fallback is try in try, and do something similar but maybe worse in the catch
destructuring, like an array is get part. (b,c) = a where a = [1,2,3,4] is [1,2]. in objects, specify property
scope can be global, module, function, or block. This is global unless in a function or object where its the obj or the object that owns the function
JS has modules, ES. Must export and import. Can use event listeners
DOM is split up into nodes. To edit, append to tree. CreateElement and appendChild. Can directly add html, used by hackers

## Javascript Promises

Javascript has local storage between HTML pages and can be used as a cache. Uses setItem(name, value), getItem(name), clear(), and removeItem(name)
Must be string, number, or booleon, or use stringify and parse with json.
Javascript Promise lets HTMl run in the main thread while the JS runs in the background.
Pending (in progress), Fulfilled (done), Rejected (cannot complete)
const coinToss = new Promise((resolve, reject) => { setTimeout(() => {...})}) if Fulfilled or else Rejected
afterwards to then if success, catch if fails, and finally. Similar to throw catch.

## Javascript ASync/await

Can have a then catch finally chain, or try catch finally block where await Promise(answer) wil block future code unitl it returns
await cannot be called unless at top level of javascript or function is async. async function() {...}
async says function will return a promise
Good when multiple returns are required


# React

## React Components

Web Frameworks are meant to help build webpages by doing things like combining HTML and javascript or modularizing code
Vue combines HTML, CSS, and Javascript into one file. HTML represented by template
Svelte is similar but requires transpiler instead of runtime compiler
React combines JavaScript and HTML with CSS outside
Angular component defines whats combined together.
React is named because pages react to you. Takes HTML into Javascript variant called JSX and then it becomes JavaScript
Render function is put into the component as HTMl. \<div\> Component: \<Demo /> \</div\> has a function Demo
returns a div with component: \<b\>hello world\<b\>
You can also receive properties like \<Demo who="walke"\> where Demo is a function that returns \<b\> Hello {var.who}\</b\>Hello Walke
State. React.useState. Can have internal state which returns current state and a function to update. You can use JSX without a function
Instead of function style, can use class style but probably shouldn't.

## React Vite

Toolchains are to help with the complexity. Things like code repositories for sharing code, linter for non-idomatic code,
prettier formats code, transpiler is one language to another (SCSS to CSS, JSX to Javascript etc.)
Polyfill is backwards compatible code, bundler is compatibility or performance on delivery to browser
Minifier is removes whitespace to make code smaller and more efficient, testing to ensure correctness, and deployment
We use github as repository, Vite for JSX, TS, development and debug, ESBuild for ES6 and Transpiling, +babel,
Rollup for bundling, post css for CSS transpiling, and bash script for deployment

### Vite

Vite for bundling, debugging, and supports what we need. 
.jsx for JSX files even though .js might work.
opm run dev is a temporary directory vs run build executes build and trasnfers to dist

## React Router

Single page HTML can look like muliple pages by displaying other info by JS. router routes manipulate DOM. We use react router DOM
Not React router. \<BrowserRouter\> encapsulates application with \<NavLink to="/name"\> \</Link\> and \<Routes\> with
\<Route path='/' element={<Home />\} exact />

## React Reactivity

Reactivity focuses on prop, render, and state. When jsx rendered, gets state and prop and then renders them when info changes
things like const onChange and react.useState
updateState is asynchronus. Might not happen immediately.

## React Startup

### React Hooks

Hooks can do what class style components can do and more. We've seen useState, but theres also useEffect when completes rendering,
or when cleanup used. Hook dependancies for useEffect is an array in the second parameter. If empty, will only call when first rendered.

## React Startup

Worked on adding functionality to code, didnt attempt a logout yet but might later. Main for now is mostly the same, will be updated from submissions. Builder is heavily changed to set current pokemon and display stats nicely

# HTTP Services

## Fetch

For computers to talk they need an IP address but humans want domain names converted through DNS. You can use dig (domain) to find its IP address. First goes across network until connectio discovered and established. Traceroutes follow from home router to address, since dynamic, might be different every time. Internals using TCP/IP model, layered architecture with application layer (HTTP, SMTP, FTP, SSH, IRC), transport layer which sends data through chunks, then internet layer which maintains connection, then link layer which is hardware.

Monolithic web servers, server and software since only web service software on the server, only static html files. Most languages include libraries which make connections and use HTTP. We use Caddy. Microservices are web services that provide only 1 service and are meant to be independant. Serverless removed from architecture.

Domain names are just strings following a convention. Root then subdomains. Root is top level domain such as com while secondary level is like byu. Can use whois to get domain name info. DNS is domain name system, big registry. Mapping by addres and canonical name (A and CNAME). Cname like byu.com to byu.edu. TTL/time to live setting for domain records, clears cache after that time. Can lease/extend lease

Application starts with browser requesting index.html which references everything else using HTTPS. Then JS allows us to request external services and inject into DOM. Supply URL using fetch function. Now implementing backend using endpoints or APIs. Not only requests static files but also things like get make user and high score. Both front and backend can fetch.

URL, uniform resource locator, represent location of web resource. Only need scheme (HTTPS) and domain name (byu.edu) but can also add port, path, parameters, and anchor.
<scheme>://<domain name>:<port>/<path>?<parameters>#<anchor>
URN and URI name and identifier, doesnt specift location info, and URI is URL or URN

Ports are needed along with IP address. Supports multiple protocols on one device. Up to 1023 is standard protocols, then 49151 are to certain entities, then 65535 are dynamic. 20 is file transfer protocol, 22 is SSH, 25 is SMTP/mail, 53 is DNS lookup, 80 is HTTP for web requests, 110 is POP3 of email, NTP is 123 for time, 161 is SSNMP for routers/printers/etc. 194 is IRC chatting, and 443 is HTTPS. Be consistent as they cannot overlap. Simon is 3000 and startup is 4000.

HTTP is how the web talks, when making a request. 
<verb> <url path, parameters, anchor> <version>
[<header key: value>]*
[

  <body>
]
Response
<version> <status code> <status string>
[<header key: value>]*
[

  <body>
]
Verbs include GET, POST (create new), PUT (update a resource, body must contain resource), DELETE, OPTIONS, get metadata, usually only headers returned. Status code 100s info, 200s success, 300s redirect, 400 client error/invalid, 500 server errors. 100 continue, 200 success, 201 ccreated, 204 no content(nothing returned), 304 not modified (cached is still valid), 307 permanent redirect, 308 temporary redirect, 400 bad request, 401 unauthorized, 403 forbiddem, 404 not found, 408 timeout, 409 conflict (out of date), 418 teapot, 429 too many requests from client, 500 internal server error, 503 service unavailable
Headers include authorization, accept (images, text, etc.), Content type/formatting, host, cookie, origin, access control allow origin, content length, cache control, user agent. Body can be files, json, images, etc. Based on what is accept(ed). Cookies help remember what's needed.

Fetch allows HTTP requests from JS. Takes a url, returns a promise. Defaults to GET. 
fetch('https://quote.cs260.click')
  .then((response) => response.json())
  .then((jsonResponse) => {
    console.log(jsonResponse);
  });
You can also populate options parameter with method and headers
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'test title',
    body: 'test body',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})

## Express

Node Web Service can create HTTP server using createServer, takes a request and response. Then server.listen on whatever port until terminated. Kill using ctrl-c.

Express does routing requests, HTTP with JSON body request manipulation, generating HTTP responses, using middleware for functionality
Everything is around creating and using HTTP routing and middleware. get takes 2 parameters, URL patterna nd callback. Path matching parameter matches url
Callback has 3 parameters, req, res, and next afterwards. Can also use post or delete. Can wildcard using *.
Middleware design uses mediator and middleware. Med is loading middleware and order vs the functionality. Express is mediator.
middleware looks similar to routing the difference but routing need matching pattern. Middleware always called unless doesnt call next using req res next
function parameters are HTTP req, HTTP res, and next passes on.

## Service Startup

To debug 502, ssh in, check index.js and other files. Then if changed, run pm2 restart simon/startup. you can also run node index.js.
also use pm2 describe startup/simon.

SOP is same origin policy where JS can only request to a domain if the name matches. However, we also want CORS, cross origin resource sharing,
which can decide what origins are and aren't allowed. CORS only alerts so hackers could proxy. Uses Access-Control-Allow-Origin.

Web services should be for the user. Divided into endpoints with a functional purpose. Often called an API. When designing, focus on readability, grammar,
discover other things, compatibility, documentable, and simplicity. RPC or remote procedure calls expose endpoints as functions. Maps directly to function calls
but might expose inner workings. REST is representative state transfer allowing for caching optimization. Get will always get the same thing until put.
GraphQL focuses on data manip instead of function call or resource. Query that joins or filters. Such as get all orders filtering by date. Only 1 endpoint.

# Data and Athentication Services

## Data Services

HTML input of type file and multer on the backend. Can choose to accept certain types like .png, .jpeg, etc.
Frontend handles upload and the returned name is set to the image src.  Need to npm install multer. Handles static files, errors, and a get endpoint. don't do it on our server, use a storage service.

Storage services like AWS S3 is good because unlimited capacity, only pay for what you use, redundant copies, etc.

Data Services like SQl and others like NoSQL are used to handle data, focusing on more NoSQL since better for other things like key pairs and json. MongoDB is json which we use. Mongo has no schema requirements, use.find

## Startup Login

Authentication often a token saved as a cookie sent on future requests. SSO allows same login for different applications like github using google.

Wants 2 endpoints, a login and a create. Create takes username and password and returns a token or an error (409) implying conflict. login takes the same and returns the same token unless it doesn't exist or wrong password (401 unauthorized). GetMe endpoint uses auth token in cookie to return info about user.
