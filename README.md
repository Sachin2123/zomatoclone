Zomato Landing Page

This project was bootstrapped with Create React App.

Available Scripts

In the project directory, you can run:

npm start

Runs the app in the development mode.Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.You may also see any lint errors in the console.

npm test

Launches the test runner in the interactive watch mode.See the section about running tests for more information.

npm run build

Builds the app for production to the build folder.It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.Your app is ready to be deployed!

See the section about deployment for more information.

npm run eject

Note: this is a one-way operation. Once you eject, you can't go back!

If you aren't satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

Learn More

You can learn more in the Create React App documentation.

To learn React, check out the React documentation.

Project Overview

A responsive Zomato landing page clone built using React.js and Tailwind CSS. This project replicates the core UI/UX features of the Zomato homepage, focusing on design, responsiveness, and user interactivity.

Features

Responsive Design: Fully responsive across mobile, tablet, and desktop devices using Tailwind CSS.

Dynamic Inputs: Location and search inputs for a better user experience.

Icons Integration: Used Material UI icons for a modern look.

Mobile-First Approach: Prioritized mobile usability with seamless transitions to larger screens.

Technology Stack

Frontend: React.js

Styling: Tailwind CSS

Icons: Material UI Icons

Installation and Setup

1. Create project:
   npx create-react-app zomatoclone

2. Navigate to the project directory:
   cd zomatoclone

3. Install dependencies:
   npm install

4. Install Tailwind CSS:
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init

5. Install Material UI and Icons:
   npm install @mui/material @emotion/react @emotion/styled
   npm install @mui/icons-material

6. Install Lucide Icons:
   npm install lucide-react

7. Run the development server:
   npm start

8. View in browser:
   Open http://localhost:3000 to see the application in action.

Project Structure:

├── zomatoclone
│ ├── node_modules
│ ├── public
│ │ ├── favicon.ico
│ │ ├── index.html
│ │ ├── manifest.json
│ │ └── robots.txt
│ ├── src
│ │ ├── BackgroundImages
│ │ │ ├── ZomatoHomePage.avif
│ │ │ └── ZomatoTitle.avif
│ │ ├── components
│ │ │ ├── Contact
│ │ │ │ └── Contact.js
│ │ │ ├── Footer
│ │ │ │ └── Footer.js
│ │ │ └── Header
│ │ │ └── Header.js
│ │ ├── flags
│ │ │ ├── India.png
│ │ │ └── Uae.png
│ │ ├── Pages
│ │ │ └── Home
│ │ │ └── Home.js
│ │ ├── App.css
│ │ ├── App.js
│ │ ├── App.test.js
│ │ ├── index.css
│ │ ├── index.js
│ │ ├── logo.svg
│ │ ├── reportWebVitals.js
│ │ └── setupTests.js
│ ├── .gitignore
│ ├── package.json
│ ├── package-lock.json
│ ├── README.md
│ └── tailwind.config.js

Usage:

Enter your location in the "Location Input" field.

Search for restaurants, cuisines, or dishes using the "Search Input" field.

The design adjusts based on screen size for the best experience.

Github Repository:

1. git add .

2. git commit -m "add feature"

3. git push origin main

Author: Sachin Vishwakarma
Location: Mumbai, India
Feel free to connect on LinkedIn.
