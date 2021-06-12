# HappyBirthday.com - CS391 Project 2

### Project Members:
- S012782 - Sefa ŞENLİK
- S009604 - Onur YILMAZ
- S015646 - Cem DENİZSEL

### Responsibilities of each project member

- **Onur YILMAZ**: Created the signup and sign-in pages. Set up REST API and Axios methods for server communication. Edited project report.
- **Cem DENİZSEL**: Co-created user hub page, added usage instructions to homepage. Added find song page and its functionalities.
- **Sefa ŞENLİK**: Provided visual materials. Handled responsiveness of the pages. Co-created index/home and user hub pages. 

## What is the HappyBirthday.com? ##

Sometimes it is blushing for us not to remember the birthdays of people around us. Therefore, HappyBirthday.com is a website designed to record birthdays and help us remember the birthdays of our friends and family. Our website provides helpful functions like taking additional notes or choose the favourite colour of the person. Furthermore, you can find a birthday song after just a click to celebrate the birthday in an enjoyable way. 

These cool functions help the user remember events in more detail, and prepare better gifts. It is a completely free web service, so any user can create an account easily and register directly via mobile phone or PC. HappyBirthday.com, just click and remember the party.

## Instructions for running the project

### Pre-requisities

#### Git

* Available from https://git-scm.com/downloads

#### Web Browser

* Any majorly used web browser with the latest version is okay.

#### Node.js

* Download and install Node.js from https://nodejs.org/en/download/

### Manual

Step 1: Download files in the repository
* Go to https://github.com/OnurYilmazGit/happybirthday.com_v2 and download the repository.

Step 2: Open your terminal and navigate.
  
Step 3: Run `cd happybirthday.com_v2-main`

Step 4: Run `npm install`

Step 5: Run `npm start`
  
* The app will run automatically in your default browser after a few seconds.

---

#### **⚠️WARNING⚠️** ####
This application uses a .json database to store its data. So, there needs to be a JSON server running on `http://localhost:3000` for this project to operate.

A sample database file can be found in `/src/database`, it contains two tables: *accounts* for storing registered user accounts, *records* for storing the birthday data of any registered user if such data exists.

**Instructions to launch a fake REST API with JSON Server library:**
* Install JSON Server `npm install -g json-server`
* Create/copy a db.json file with two tables, accounts and records:
  ```
  {
    "accounts": [
      {
        "id": "0",
        "name": "Sample Guy",
        "mail": "example@mail.com",
        "pass": "123123",
        "phone": "535 353 3553"
      }
    ],
    "records": [
      {
        "id": "0",
        "birthdays": [
          {
            "name": "John Doe",
            "bday": "1972-12-30",
            "note": "Anything expensive looking",
            "color": "#0000FF"
          }
        ]
      }
    ]
  }
  ```
* Start JSON Server `json-server --watch db.json`
---

### Preferred Libraries
We utilized 5 external libraries for different aspects of the project:

**ReactJS:** It is an open-source JS library for building user interfaces that are easier to maintain and develop. A sample ReactJS project can be initialized with the command `npx create-react-app [app-name]`.

**React Router:** React Router is a collection of navigational components that allows the content of the page to be updated as well as the URL even in a single page application.

**React Bootstrap:** This library replaces the Bootstrap JavaScript in React applications. Each component in this library is a true React component, without unneeded dependencies like jQuery.

**react-router-bootstrap:** It maintains the integration between React Router v4 and React Bootstrap. Hence, this library makes it possible to wrap React Bootstrap elements in a `<LinkContainer>` to make them behave like a React Router `<Link>`.

**axios**: Promise based HTTP client for the browser and node.js that facilitates database manipulation.

## Usage Scenarios
**Scenario 1:** Navigation to register page
- The user lands on the main page
- He/she clicks on the *Hub* button on the navigation bar to access the account
  - If user clicks the "Register" button, register tab is displayed on the next window.
  - If user clicks the "Login" button, login tab is displayed on the next window.

**Scenario 2:** User fails registration
- User provides the credentials on the registration tab
- At least one of the user details is not in the correct format
- The respective error pop-ups are displayed

**Scenario 3:** User successfully registers
- User provides the credentials on the registration tab
- All account details are in the correct format
- User details are added to *db.json*
- A success message is displayed

**Scenario 4:** User fails login
- User provides the credentials on the login tab
- Email address is not in the correct format or user is not found among the registered accounts
- Respective error message/pop-up is displayed

**Scenario 5:** User successfully logs in
- User provides credentials in the correct format
- User is found in the list of registered users
- User is directed to the respective user hub
- Birthday records, if any, are listed on the window

**Scenario 6:** User successfully adds a birthday record
- User is directed to his/her user hub after a successful login
- User clicks "Add Birthday" button
- A modal box displaying the form to provide birthday details is displayed
- User provides details in correct formats
- User clicks "Add" button on the modal box
- Birthday record is added to the birthday list of current user
- The modal box is closed and birthday list on the screen is refreshed

**Scenario 7:** User deletes a birthday record
- User is directed to his/her user hub after a successful login
- User clicks "Delete" button of one of the birthday records displayed on the window
- The selected birthday record is removed from the database and the birthday list being displayed is updated accordingly

**Scenario 8:** User logs out
- User is directed to his/her user hub after a successful login
- User clicks "Logout" button
- User is directed to *LoginScreen* displaying panels to register or login

**Scenario 9:** User searches a birthday song
- The user lands on the main page
- He/she clicks on the *Find Birthday Song™* button on the navigation bar
- User speficies a name in the related input field, then clicks "Find" button
- User is directed to YouTube.com for the respective birthday song query
