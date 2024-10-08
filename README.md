# SnackSprint

SnackSprint is a food ordering web application inspired by Swiggy, built using React.js, Tailwind CSS, and Jest for testing. The app allows users to browse through various restaurants and place food orders with ease.

# Features

- Browse a list of restaurants.
- View restaurant menus.
- Add and remove items from the cart.
- Place food orders.

# Tech Stack

- React.js: A JavaScript library for building user interfaces.
- Tailwind CSS: A utility-first CSS framework for styling.
- Jest: A delightful JavaScript testing framework for unit and integration tests.
- Parcel: A fast, zero-configuration web application bundler.

# parcel provides

- Dev build
- Local server
- HMR - Hot Module Replacement
- File watching algorithm - Written in C++ (for HMR)
- Caching builds to provide faster builds
- Image optimization for image assets
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code splitting
- Differential bundling - Supporting older browsers 
- Diagnostic
- Error Handling
- Provides HTTPs server along HTTP
- Tree shaking - removes unused / unnecessary code
- Different bundles for dev and production

# Setting up testing

- Install React Testing Library
- Install jest (if not already)
- Install babel dependencies
- Configure babel
- Configure Parcel config file to disable default babel transpilation
- Initialize jest -- npx jest --init
- Install jsdom
- Install @babel/preset-react to make JSX work on test cases
- Configure @babel/preset-react in babel.config.js
- Install @testing-library/jest-dom