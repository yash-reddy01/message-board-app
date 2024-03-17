# Message Board Backend

This is the backend server for a simple message board application built using Node.js with Express and MongoDB. It provides APIs for user authentication, message management, and user management.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js installed on your machine
- MongoDB database (local or remote) accessible

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the root directory and provide the following variables:

   ```plaintext
   PORT=5000
   MONGODB_URI=<your_mongodb_uri>
   JWT_SECRET=<your_secret_key>
   ```

4. Start the server:

   ```bash
   npm start
   ```

## Usage

Once the server is running, you can use tools like Postman or integrate it with the frontend of your message board application to interact with the APIs.

### Endpoints

#### Authentication

- `POST /api/v1/auth/register`: Register a new user
- `POST /api/v1/auth/login`: Log in as an existing user

#### Messages

- `POST /api/v1/messages`: Post a new message
- `GET /api/v1/messages`: Get all messages
- `PUT /api/v1/messages/:id`: Update a message
- `DELETE /api/v1/messages/:id`: Delete a message

#### Users

- `GET /api/v1/users/:id`: Get user profile
- `PUT /api/v1/users/:id`: Update user profile

## Built With

- [Node.js](https://nodejs.org/) - JavaScript runtime
- [Express](https://expressjs.com/) - Web framework for Node.js
- [MongoDB](https://www.mongodb.com/) - NoSQL database
- [bcryptjs](https://www.npmjs.com/package/bcryptjs) - Password hashing
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - JSON Web Token implementation
- [dotenv](https://www.npmjs.com/package/dotenv) - Environment variables management

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues if you encounter any problems or have suggestions for improvements.



