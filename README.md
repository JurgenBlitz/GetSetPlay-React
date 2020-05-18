# GetSetPlay- React edition

## Functionality and purpose of this app
This basic app would give musicians an intuitive way to build a setlist with tools other than paper and pen, giving options to rearrange the song order and check the amount of time left after each new song is added.

The basic flow of the app is the following:
- The user types in an initial time for the complete setlist, listed in minutes
- The form on the left lets the user type the name of each song, and its duration.
- On submit, the song is added to the setlist and its duration is substracted from the total time.
- The list will show the amount of time left for more songs after each new entry.

- (wins) The app will warn the user when there is little time left (3-5 mins) and if a new entry has made the list exceed the initial allocated time.
- (wins pt. 2: Electric Boogaloo) the app would let the user export the finished setlist into a PDF.
- (wins pt. 3: Return of the TODOs) the app could also warn the user if there is still plenty of time left before the PDF export.

## TODO list 
(Last updated May 17th)

Basic difficulty:
- Enable children to read the time set by the parent component App.js.
- Allow the SongList component to substract time with each new addition.
- Allow the SongCards to edit their content or delete themselves from the lost.

Medium difficulty:
- Set up Redux so that the app can control the time settings centrally instead of relying on constant parent-to-siblings communication.
- Include form validation for the inputs


## Available Scripts

### `npm install` or `npm i`
Installs the project and its dependencies. 

### `npm start`

C'mon. You know what this does.

### `npm test`
(Last updated May 17th)
Testing not yet included.

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
