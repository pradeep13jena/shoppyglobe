# Shoppyglobe - Making Shopping a Global Affair.

Welcome to Shoppyglobe, your ultimate online shopping destination! Whether you're looking for everyday essentials or unique finds, we bring the world of shopping to your fingertips. Explore a curated collection of products from around the globe, designed to meet all your needs and preferences.

## Table of Contents
- [Getting started](#getting-started)
- [Design overview](#design-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Future Improvments](#future-improvements)
- [Links](#links)
- [Credits](#credits)
- [Contact](#contact)


## Getting Started

To use this project, clone it from GitHub and follow these steps:

1. **Install Dependencies**: Run the following command to install all required dependencies, including React, React-DOM, React-Router-DOM, Redux Toolkit and Vite:
   ```bash
   npm install
   ```

2. **Start the Development Server**: Use Vite to create a local server for development:
   ```bash
   npx vite
   ```

## Design Overview

The design of Shoppyglobe is minimalistic, focusing on simplicity and ease of use. This website is responsive for almost all devices key divide point is 770px and 450px.

- **Header**: It consists of Header which has the logo of the website, and links to different pages such as *Products page* and *Cart*.

- **Footer**: In the footer section, There's the copyright claim and link to my portfolio website.

- **Main**: In the main page, it consists of categories to make it easy for you to filter by the categories you want to shop for, Click on the categories and you will head to the page where only products of the specific categories will be shown.

- **Products**: All the Products in the database gets listed here Scroll down and choose your product or you can enter Product name.

- **Cart**: Already done with shopping? Don't forget to go through the items again and checkout.

#### Responsive Design: 
Website is responsive, it can be used on different device with varying width & height. Few example are
- Laptop
- Ipan mini
- Samsung Galaxy S10 Ultra

#### Leveraging **ImageKit** for Optimized Image Rendering
- I had 10-11 images in the folder which when opened in a new device takes time to load, I didn't wanted that to happen, to improve user experience. I got to know about *ImageKit* which functions as a Content Delivery Network (CDN), which means images are served from the server closest to the user's location. This significantly improves load times, especially for users accessing the website from different parts of the world.

- By uploading images to ImageKit instead of storing them in the project folder, I’ve managed to save considerable storage space in the repository. This not only reduces the size of the project but also ensures that local storage isn’t overburdened.

## Features

- **No. of Quantity**: There's a small icons in the header which keeps count of the item added in the cart. So you don't have to go to the cart page to count the items.
- **View Product Details**: Get to know all the details before ordering.
- **Review section**: Read what other people have to say about the product.
- **Shimmer Effect**: Also added shimmer effects to make good the user Experience.
- **User-friendly Interface**: Enjoy a clean and intuitive design that makes browsing and reading easier than ever.

## Technologies Used

- HTMl, CSS, JS
- React, React-DOM, React-Router-Dom
- Redux
- Vite
- ImageKit

## Future Improvements

- **Personalized Recommendations**: Get Product suggestions tailored to your tastes based on previous buys and ratings.
- **Add more items** - To get more and more items in the db so that you get all the things at the same place.

## Links

- **GitHub Repository**: [Shoppyglobe](https://github.com/pradeep13jena/shoppyglobe)
- **Live Website**: [Shoppyglobe - Making Shopping a Global Affair.](https://shoppyglobes.vercel.app/)

## Credits

- [React documents](https://react.dev/learn)
- [React Router DOM documents](https://reactrouter.com/en/main/start/tutorial)
- [Redux documents](https://redux-toolkit.js.org/introduction/getting-started)
- [W3 school](https://www.w3schools.com/)
- [imagekit](https://imagekit.io/)

## Contact

- [Portfolio Project](https://pradeepjena.netlify.app/)
- [E-mail](goldrushatjenas@gmail.com)
- [LinkedIn](https://www.linkedin.com/in/pradeepjena/)