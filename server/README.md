# Music App API

This Music App API serves as a backend for a music application, developed as part of the Addis Software internship applicant test. It's designed to manage music collections for users, offering a range of functionalities including adding, updating, reading, and deleting music entries. The API is built with Node.js with Express and documented using Postman, providing a comprehensive guide for developers to integrate their applications with the service.

## Description

The API provides a suite of endpoints that facilitate the management of music collections for authenticated users. It supports operations such as creating new music entries, updating existing ones, retrieving the list of musics for a user, and removing music entries from the collection.

### Authentication

The API employs JSON Web Tokens (JWT) for session management, leveraging JWT's stateless nature to ensure secure and efficient user authentication. This choice aligns with the API's goal of providing a reliable and scalable solution for managing music collections.

## Project Structure

The project is structured as follows:

- `src/app.ts`: The main application file.
- `src/controllers/`: Contains the controllers for music, sessions, and users.
- `src/middlewares/`: Contains middleware functions for user deserialization, user requirement, and resource validation.
- `src/models/`: Contains the data models for music, sessions, and users.
- `src/routes.ts`: Defines the application routes.
- `src/schemas/`: Contains the data schemas for music, sessions, and users.
- `src/services/`: Contains the services for music, sessions, and users.
- `src/utils/`: Contains utility functions and helpers.

## Setup

1. Clone the repository.
2. Change to the server directory --> `cd server`
3. Install the dependencies with `npm install`.
4. Start the server with `npm start`.

## Postman Documentation