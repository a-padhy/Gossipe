# Gossipe - MERN Stack (Chat Application)

This project is a full-stack web application built using React for the frontend and Express.js with MongoDB for the backend. The frontend features a signup and login page, chats page that shows all recent chat history of the user. Functionality to search for other users and have one-on-one chat with them. Introduced group chat functionality, including the ability to create, edit, and manage group chats, with administrative features such as adding or removing users from groups. Incorporated persistent storage of chat messages in the database, allowing users to access their conversation history at any time.

The backend uses packages such as bcryptjs, cors, jsonwebtoken, mongoose to handle user authentication, password encryption, and database operations. It checks whether the user exists before storing the user's information in the database and uses JSON web tokens for secure communication between the client and server. 
Also integrated real-time messaging using Socket.io, notification system to alert users of incoming messages, enhancing the application’s responsiveness and providing a dynamic user experience.

TailwindCSS is used to style the web application.

## Video Demo
[https://drive.google.com/file/d/1yq4R-9W2ysVcujCL2EygCtVQvFOESSOw/view?usp=drive_link](https://drive.google.com/file/d/1UKNiQdYmn5aCPPL6yiOaihrdf5is-iAR/view?usp=sharing)
 
## Installation

To run this project, you'll need to have Node.js and MongoDB installed on your system. You can download Node.js from the official website: https://nodejs.org/, and install MongoDB by following the instructions provided here: https://docs.mongodb.com/manual/installation/.

To install the project dependencies, follow these steps:

Clone the repository to your local machine using the following command:

bash
Copy code
git clone https://github.com/your-name/your-project-name.git
Navigate to the project directory:

bash
Copy code
```bash
cd your-project
```
Install the frontend dependencies:
```bash
cd frontend
npm install
```
Navigate to the backend directory:

```bash
cd backend
```
Install the backend dependencies:

```bash
npm install
```
Create a .env file in the backend directory, and set the following environment variables:

makefile
```bash
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
```
Replace <your-mongodb-uri> with the URI of your MongoDB database.
Replace <your-jwt-secret> with your jwt secret.

Start the backend server:

```bash
npm start
```
Open a new terminal window, navigate to the project directory, and start the frontend server:

```bash
npm run dev
```
Open your web browser and navigate to http://localhost:5173 to view the application.

That's it! You should now be able to run the application locally. If you encounter any issues, please refer to the project documentation or create a new issue on the project's GitHub repository.
    
  
