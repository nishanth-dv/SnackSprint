# react

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