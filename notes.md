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

CSS is structured body type {info}, with info being structured format: specifier;
Some things are color, background-color, font-family/weight/style/size, padding, borders, and more
For color, use hex, measurements can be done in percentages and things like px or em

## CSS Startup


# Javascript

## Javascript