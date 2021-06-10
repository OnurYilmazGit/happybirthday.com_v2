# HappyBirthday.com - CS391 Project 2

### Project Members:
- S012782 - Sefa ŞENLİK
- S009604 - Onur YILMAZ
- S015646 - Cem DENİZSEL
- 
<h2>What is the HappyBirthday.com ?</h2> 

<t> Sometimes it is blushing for us not to remember the birthdays of people around us. Therefore, HappyBirthday.com is a website designed to record birthdays and help us remember the birthdays of our friends and family. Furtherly, our website provides great functions like taking additional notes or choose the favourite colour of the person.  
These cool functions help the user remember events in more detail, and prepare better gifts. It is a completely free web service, so any user can create an account easily and register directly via mobile phone or PC. HappyBirthday.com, just click and remember the party.

### Instructions 
- First download this repository https://github.com/OnurYilmazGit/HappyBirthday.com.git
- Click the index.html file and wait for the website to open on your browser.
- The first page provides you login and register features, if you have already an account you don’t need to click register, 
- If you do not have an account, just click the register button. For the sign-up to be successful, there are a few conditions: first, each email address needs to be unique and should be written in the correct form. Additionally, your password should match each other. 
- After creating a free account, you need to click the login button to sign in to your account. But be careful, you have to write your email and password correctly. Otherwise, you can click the *“Forgot password?”* button.
- When you sign in, the third page (user hub) will appear and you will see two tables on this page. These tables show upcoming birthdays and all birthdays in detail. 
- If you want to add a new birthday, you just need to click "Add Birthday" button, then a pop-up window will appear and you can add your friend's name surname, birthday and some extra notes about this day. Additionally, you can choose a colour to represent this day. When you finish your process, you simply need to click “Add” button to register this day. 
- As the final step, your all favourite days will appear on the screen.

### Usage Scenarios
**Scenario 1:** Navigation to register page
- The main page is displayed to the user
  - If user clicks the "Register" button, register tab is displayed on the next window.
  - If user clicks the "Login" button, login tab is displayed on the next window.

**Scenario 2:** User fails registration
- User provides the credentials on the registration tab
- At least one of the user details is not in the correct format
- The respective error pop-ups are displayed

**Scenario 3:** User successfully registers
- User provides the credentials on the registration tab
- All account details are in the correct format
- User details are stored in the localStorage
- A success message is displayed

**Scenario 4:** User fails login
- User provides the credentials on the login tab
- Email address is not in the correct format or user is not found among the registered accounts
- Respective error message/pop-up is displayed

**Scenario 5:** User successfully logs in
- User provides credentials in the correct format
- User is found in the list of registered users
- A "successful login" message is displayed
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
- User selects one of the birthday records displayed on the window
- User clicks "Delete" button
- The selected birthday record is removed from the localStorage and the birthday list being displayed is updated accordingly

**Scenario 8:** User edits a birthday record
- User is directed to his/her user hub after a successful login
- User selects one of the birthday records displayed on the window
- User clicks "Edit" button
- A modal box displaying the form to provide birthday details is displayed
- User provides details in correct formats
- User clicks "Edit" button on the modal box
- Birthday record is updated on the birthday list of current user
- The modal box is closed and birthday list on the screen is refreshed

### Responsibilities of each project member

- **Onur YILMAZ**: Created the signup and sign-in pages. Used WebStorage API to store user information on browser. Adjusted web-pages background style, color, image etc. 
- **Cem DENİZSEL**: Co-created user hub page. Utilised localStorage to store and display registered list of birthdays. 
- **Sefa ŞENLİK**: Provided various visual materials. Co-created index/home and user hub pages.

### Preferred Libraries
We utilized  built-in functions and algorithms, these resources were sufficient for developing this project. Therefore, we did not use any external libraries. 
