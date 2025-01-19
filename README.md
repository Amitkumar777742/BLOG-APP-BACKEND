# Blog App Backend

This is the backend API for a Blog application built using Node.js, Express, and MongoDB. The backend allows users to create, read, update, and delete blog posts, as well as manage comments. It also includes user authentication using JWT (JSON Web Tokens) for secure access.

## Features

- User authentication (signup, login)
- CRUD operations for blog posts (Create, Read, Update, Delete)
- Add and delete comments on blog posts
- Secure JWT-based authentication
- User-specific blog post management (posts are unique to each user)
- Pagination for blog posts

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Security**: bcrypt for password hashing
- **Environment Configuration**: dotenv

## Installation

### Clone the repository

```bash
git clone https://github.com/Amitkumar777742/BLOG-APP-BACKEND.git
cd BLOG-APP-BACKEND
Setup
Install the required dependencies:
bash
Copy
Edit
npm install
Create a .env file in the root directory and add the following environment variables:
bash
Copy
Edit
PORT=5000
MONGODB_URI=<Your MongoDB Connection URI>
JWT_SECRET=<Your JWT Secret>
Start the backend server:
bash
Copy
Edit
npm start
The backend will now be running at http://localhost:5000.

Endpoints
POST /api/auth/register: Register a new user
POST /api/auth/login: Log in and receive a JWT
GET /api/posts: Get all blog posts with pagination
POST /api/posts: Create a new blog post
GET /api/posts/:id: Get a specific blog post by ID
PUT /api/posts/:id: Update an existing blog post
DELETE /api/posts/:id: Delete a blog post
POST /api/posts/:id/comments: Add a comment to a blog post
DELETE /api/comments/:commentId: Delete a comment
Usage
Ensure MongoDB is running and properly configured in the .env file.
Register a new user using the /api/auth/register endpoint.
Log in with the /api/auth/login endpoint to get your JWT token.
Use the JWT to access the protected routes for managing blog posts and comments.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Contributing
Feel free to fork this repository and submit pull requests. If you find any issues or have suggestions for improvements, please create an issue, and I'll review it.

Acknowledgements
Express.js
Node.js
MongoDB
JWT
bcrypt.js
arduino
Copy
Edit

This template provides the basic information for the backend setup, endpoints, and usage. You can expand it with additional features or any specific configurations your project might require.






