# VideoTube - Backend API

VideoTube is a video streaming application designed to provide a seamless platform for video management, user authentication, and interactive engagement. This backend API is built using Node.js, Express, MongoDB, and JWT authentication.

## Features

- **User Authentication:** Secure user signup, login, and authentication using JWT.
- **Video Management:** Upload, update, delete, and retrieve videos.
- **Comment System:** Post, edit, and delete comments on videos.
- **Like and Dislike:** Like and dislike functionality for videos.
- **User Management:** Manage user profiles and subscriptions.

## Tech Stack

- **Node.js** - JavaScript runtime environment
- **Express.js** - Web framework for Node.js
- **MongoDB** - NoSQL database for data storage
- **Mongoose** - ODM for MongoDB
- **JWT (JSON Web Tokens)** - Secure authentication and authorization
- **Cloudinary** - For video and image storage (optional)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/Videotube.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Videotube
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file and add the following environment variables:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   CLOUDINARY_CLOUD_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```
5. Start the server:
   ```bash
   npm start
   ```

##

