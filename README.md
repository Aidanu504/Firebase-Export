# Firebase export
This is an export application created for the Hidden Village V0.4.

# Description
This application is a Node.js based server that facilitates the extraction and export of data from a Firebase Realtime Database to CSV and JSON files. This was designed to simplify the process of extracting this data. Providing a user friendly interface to enter the Firebase Database URL and path to the Firebase Admin SDK JSON file. It was created to handle data export from the project [Hidden_Village_V0.4](https://github.com/JThoe26/hidden_village_v0.4)(data export from other Firebase projects would not be handled properly by this program).

# Prerequisites 
Please make sure you have the following installed before running this application:
* Node.js: JavaScript runtime for running the application.
  * https://nodejs.org/en/download
* npm: The Node Package Manager for installing project dependencies.
  ```
  npm install -g npm
  ```

# Installation
1. Clone the repository to your local machine.
2. Navigate to project directory in [VS Code](https://code.visualstudio.com/download) or cd in command prompt.
3. install the required dependencies from the 'package.json' using the command below. 
  ```
  npm install
  ```

# Running the application 
Run the program with the command below:
  ```
  node app.js
  ```
In your web browser navigate to http://localhost:3000
