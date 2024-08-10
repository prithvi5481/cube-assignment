# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


## Project Preview
The Customer Gallery Application allows users to view customer information along with a 3x3 grid of random images. When a user selects a customer, the app fetches and displays images specific to that selection. The images automatically refresh every 10 seconds to ensure new content is always visible.

## Features
Display customer details (Name, Address, Information)
Fetch and display a 3x3 grid of random images from the Unsplash API
Automatically refresh images every 10 seconds
Responsive design using Tailwind CSS

## Technologies Used
-React: JavaScript library for building user interfaces.
-TypeScript: Type-safe JavaScript for scalable and maintainable code.
-Tailwind CSS: Utility-first CSS framework for styling.
-Unsplash API: Source of high-quality images.
-Environment Variables: To securely manage API keys.

## API Rate Limiting
The Unsplash API used in this project allows only 50 API calls per hour. Since the application fetches images every 10 seconds, it can exhaust the API limit if left running continuously.