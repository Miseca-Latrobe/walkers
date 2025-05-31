# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Current Features

The application currently uses the "home screen" to display a button that allows a user to select a file and upload it.

Once the file has been uploaded it is read through papa parse and then processed using utility functions that were created to mimic the output provided through the Excel CSV Converter. 

The data is then available in the client side for further manipulation for graphing - Each row is now an object with Key:Value pairs for each of the original columns an example is below:
```
  {
    "activityId": "01JVABZXAZXZY3CQ5ARC9KZX6S",
    "user": "assistedpassage.mena@Zenith.com",
    "date": "15/05/2025",
    "time": "13:50",
    "riskScore": "500",
    "integration": "office-365-email",
    "policiesBreached": "{\"dataLeakage\":[\"emailContainedPasswordProtectedDocument\"]}",
    "values": "{\"destinations\":[\"oliver.hall@Zenith.com\",\"ava.clark@Zenith.com\",\"emma.thompson@Zenith.com\",\"s9580@iom.int\",\"e3745@iom.int\",\"o5117@iom.int\",\"l7248@iom.int\",\"s2665@iom.int\",\"mia.hall@Zenith.com\",\"ava.johnson@Zenith.com\",\"e7492@iom.int\",\"e2793@iom.int\",\"m6354@iom.int\"]}",
    "status": "trusted",
    "managerAction": "",
    "emailDomain": "Zenith.com",
    "Email": "Email",
    "Data Leakage": "Data Leakage",
    "Week Ending": "17/05/2025"
  }
```