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
https://github.com/mcran127/startup/blob/main/cs260Login.png

https://github.com/mcran127/startup/blob/main/cs260Main.png

https://github.com/mcran127/startup/blob/main/cs260Builder.png

## Key Features
- Secure HTTPS login
- Displaying the latest uploaded teams
- Ability to build your own team
- Builder gives information on chosen Pokemon

## Technologies

- HTML - Uses correct HTML structure over 3 pages. One for the login, one for the main page where latest teams are shown, and one for the builder page itself.
- CSS - Application styling to properly display all images regardless of screen size without feeling too cluttered. Simple design and color to not overwhelm site visitors.
- Javascript - 
- React - Provides login
- Service - Endpoints for login, retrieving pokemon and data, and retreiving most current team builds.
- Database - Stores the most recent users and their teams.
- WebSocket - Most recent team builds are displayed to other site visitors.