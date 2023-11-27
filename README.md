# Health Partners Test

This project consists of testing the **Amazon Store**, as specified in the test description, along with performing cross domain testing using *Commit Quality* and *Demo QA*. Major things that are developed in this project are as follows,

- Added 3 specs to test the required functionality on the **Amazon Store**.
- Added a spec to test the Cross Domain requirement using **Commit Quality** and **Demo QA**.

---

## Observations and Things to Consider
Following things should be considered before executing this project.
- The **Amazon Store** tests are a little *flaky* due to the dyanmic nature of the website. Sometimes the test may experience pop-ups, that are not consistent with the normal flow. I have tried my best to handle all possible case scenrios, which I faced during my development, but there may be a possibility that Amazon may trigger unknown pop-ups in the future, which may not be handled by these test cases. It is important to clarify that I faced these pop-ups during the Amazon Black Friday sales and these pop-ups may change afterwards.
- The test `main-page.cy.js` written for **Amazon Store** is against a specific item. It is possible that in the future, that item may not be available.
- If you are using `Electron Browser`, you cay face `Robot Check` while accessing the **Amazon Store**. For this reason, I developed and tested this project against `Google Chrome`. browser

If any of the above mentioned issues are faced, please try the following,
- Re-run the failed test spec again, as you may have faced 1 out of 10 times visible pop-up (It can either be related to Alexa Promotion.).
- If the `main-page.cy.js` test fails due to item unavailability, code may need to be readjusted for a new item.

---

## Future Improvements

In the future, I may recommend the following improvements in this project,
- I would add data-tests as selectors, instead of taking the id’s or classes as selectors as that would be best practice. This point is more valid for an in-house project, where we have the flexibility to ask the Front-End developer to add these data-test in their Front-End project.

---

## Project Setup & Execution

Please go through the following steps to start the project.

### 1. Pre-Requirements
The project was created on **`MacOS`** having following javascript runtime system and browser version.

- Node.js `v18.13.0`
- npm `v8.19.3`
- Google Chrome `v119`


### 2. Configuration

You need to provide **Amazon Store** credentials into the fixtures first, before starting the tests. To setup the credentials, please go to the `./cypress/fixtures` folder and make a copy of `users.example.json` file to `users.json` file. I have already made an **Amazon Store** account for you guys to test the project, which is as follows,


```
{
  "users" : {
    "me": {
      "email": "testdemo0984@gmail.com",
      "password": "Testdemo123"
    }
  }
}
```
The [Amazon Store](https://www.amazon.co.uk/) base URL as specified in the test description are already configured in `cypress.config.js` file, present at the root directory of the project. The [Commit Quality](https://commitquality.com/) and [Demo QA](https://demoqa.com/) URL are also configured directly within the project.


### 3. Initialisation

You need to run `npm i` in root directory of the folder to install all the required libraries for the project. This will also install `husky` which is configured to automatically correct and maintain the *liniting* in all the `.js` files throughout the project, upon every `commit`.


### 4. Execution

Please run `npm run cy:open` in root directory to start the cypress project. This will open the Cypess control panel in **Google Chrome**. From here you can click on any of the test to start the execution of that test. You can also run `npx cypress open --e2e`, if you do not have **Google Chrome** installed and want to run on any other browser.

---