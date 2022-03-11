# <img src="client/public/img/logo4.png" width="50"/> Simple Web application based on RTC

---

​

1. [Description and User's Story](#description-and-user's-story)
2. [Functionalities](#functionalities)
3. [List of Dependencies and Libraries](#list-of-dependencies-and-libraries)
4. [Installation](#installation)
5. [Licenses](#licenses)
6. [Support and Contributions](#support-and-contributions)
7. [Future Development](#future-development)
8. [Additional Notes](#additional-notes)
9. [Credits and Acknowledgements](#credits-and-acknowledgements)
   ​

## ​

<img src="client/public/img/logo5-name.png" width="300"/>
​

## Description and User's Story

​
`AS a random online user, I NEED to communicate with others in a simple way. You could say Omegle beat me to it but this should be a simple solution.`
​

​
**SimpleWebRTC** is a simple creation to understand how video and RTC interact.
​

## ​

​

## Functionalities

​
Currently, the system offers the following _features_:
​

- User can log in and add a room and join it. - Anyone in the room should have access to a camera.(Only up 2 to users so far)

  ​

## ​

​

## List of Dependencies and Libraries

​
The application was designed and build by _Creat React App_, programmed through a combination of _JavaScript_ hosted on several _React_ _NPM_ libraries, _pure HTML_, _pure CSS_, one third-party _CSS framework_, and backed by _MongoDB_ and _NoSQL_ Database that uses json*like documents. The application is fully functional and hosted in a \_Heroku* external server.
​

The Full-Stack breakdown of the application is as follows:
​

- [Create React App](https://create-react-app.dev/) is an app that help you builds the initials steps and structure to create a React app.
  ​
- [NodeJS](https://nodejs.org/en/) is one of the most widely used local server environments for JavaScript programming. NodeJS was used for local server-testing and to handle server and database connections.
  ​
- [Express](https://www.npmjs.com/package/express) is a NodeJS-based npm web framework library. It was integrated into JavaScript in order to handle HTTP requests from the database schemas.

- [SocketIO](https://www.socket.io) is an extension library that, helps with the creation of sockets allowing them the configuration to be simple and efficient.
  ​
- [UUID](https://www.uuid.com/) is a basic random generation helper that will allow us to make sure that the rooms are indeed different.

## ​

​

## Installation

​
The steps are simple
​
\*\*Nodemon will be useful but not necessary

1. Clone or download the repo.
   ​
2. Using your terminal, navigate into the main repository, and run `npm install` in order to install all npm and React dependencies and libraries, you also have to run `npm install`.
   ​
3. Now run 'npm run `devStart`, you can take a look at the package.json for more scripts.
   ​
4. Two users should now be able to connect to the server and room in a manner so like: `www.your-server.com/room-id`
   ​

​

## Licenses

​

​
[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
​
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
​
[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)
​

## Support and Contributions

​
This project is not currently looking for contributors.
If you're experiencing any issues with the code, feel free to contact us through GitHub or raise an [issue](https://github.com/ibmug/videoRTC) in the original repository.
​

​

## Future Development

​
These are some improved functionalities we want to add to the project in the near future:
​
​

- Add user functionality..
- Add filters to where in the world you want to start talking to.
- Implement it with react.

## Additional Notes

- Socket io handles the connections in the server being listened.
- PeersJS handles the peer connections and create userIds.
- listeners handle connection/disconnection and answering between clients.
- Only two files exist, server.js and script.js
  This particular application is handled by ejs
  through:
  app.set("view engine", "ejs");
  Note that the html is under 'views' as room.ejs, just like a handlebar.
  ​
  ​

​

## Credits and Acknowledgements

​
This project was conceived, developed, and coded by:
​

- **Rodrigo Sánchez** [Github: ibmug ](https://github.com/ibmug)

  ​

  II would like to thank Web Dev Simplified for helping and explaining how webRTC works in a simplified manner. - I really appreciate it man.
