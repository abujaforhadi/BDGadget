# BDGadget✨

**Live Website**: [BDGadget](https://bdgadget.netlify.app/)  
## Additional Information
**Requirement Document**: [BDGadget Requirements](<link_to_requirement_document>)

---

## Table of Contents
- [Project Description](#project-description)
- [Features](#features)
- [React Concepts](#react-concepts)
- [Data Management](#data-management)
- [Installation & Setup](#installation--setup)
- [Additional Information](#additional-information)

---

## Project Description
**BDGadget - GadgetHeaven** is a responsive e-commerce platform for gadget enthusiasts. The platform includes features like structured navigation, product categories, detailed product pages, a shopping cart, and a wishlist. Built on a detailed Figma design, **BDGadget** offers a smooth, interactive shopping experience with Context API and LocalStorage for efficient state and data management.

---

## Features
1. **Dynamic Product Categories**: Filter gadgets by categories with a sidebar for seamless navigation.
2. **Product Details Page**: Detailed product information page with add-to-cart and add-to-wishlist options.
3. **Shopping Cart**: Tracks selected items with total cost calculation and a "Sort by Price" option.
4. **Wishlist**: Allows users to save items and prevents duplicate entries.
5. **Toast Notifications**: Provides feedback when items are added to the cart or wishlist.

---

## React Concepts
- **Components**: Reusable sections for Navbar, Footer, Product Cards, etc.
- **Props**: Data passed to components like Product Cards and Details Page.
- **State Management**: Manages local UI states for features like wishlist and cart.
- **Hooks**:
  - `useState` - Local state handling.
  - `useEffect` - Data fetching and state updates.
  - `useContext` - Access to cart and wishlist data.
  - `useNavigate` - Internal routing without page reloads.
  - `useLocation` - Conditional styling based on page.
- **React Router**: Routing for pages like Home, Dashboard, and Details.
- **Error Handling**: Custom 404 page for invalid routes.

---

## Data Management
- **Context API**: Centralized management for cart and wishlist states across the app.
- **LocalStorage**: Persists cart and wishlist data to avoid data loss on reload.

---

## Installation & Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/programming-hero-web-course-4/b10a8-gadget-heaven-abujaforhadi.git
