# ALX Listing App

## Project Description
The ALX Listing App is a modern Airbnb clone designed to provide a user-friendly property listing experience. This project serves as a foundational structure for building a dynamic and responsive listing page using Next.js, TypeScript, TailwindCSS, and ESLint. The goal is to create a scalable and maintainable codebase that adheres to best practices in web development.

## Project Structure
The project is organized into the following directories and files:

- **components/**: Contains reusable UI components.
  - **common/**: Includes common components like `Button.tsx` and `Card.tsx`.
  
- **constants/**: Stores constants used throughout the project, such as API URLs and configuration settings.
  - **index.ts**: Exports the constants for easy access.

- **interfaces/**: Defines TypeScript interfaces for type safety.
  - **index.ts**: Contains interfaces like `CardProps` and `ButtonProps` to ensure consistent prop types across components.

- **pages/**: Contains the main entry point for the application.
  - **index.tsx**: Renders the main layout of the listing page.

- **public/**: Holds static assets such as images and SVG files.
  - **assets/**: Organized directory for easy access to images and SVGs.

- **styles/**: Contains global styles for the application.
  - **globals.css**: Imports Tailwind CSS styles to apply global styles.

- **tailwind.config.js**: Configures Tailwind CSS, specifying content paths for purging unused styles and extending the theme.

- **package.json**: Lists project dependencies and scripts for running the application.

- **tsconfig.json**: Contains TypeScript configuration options, specifying compiler settings and file inclusions.

- **.eslintrc.json**: Configures ESLint for linting JavaScript and TypeScript files, ensuring code quality and consistency.

- **README.md**: Documentation for the project, including the project title, description, structure, and instructions for running the project locally.

## Running the Project Locally
To run the project locally, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   cd alx-listing-app
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Run the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the application.