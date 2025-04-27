// import express from 'express';
// import  mongoose from 'mongoose';
// import dotenv from 'dotenv';
// // import cors from cors;

// const authRoutes = import('./routes/auth');
// const taskRoutes = import('./routes/tasks');


// // Connect to MongoDB
// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('MongoDB connected'))
//     .catch(err => console.log(err));


// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

// server.js
import express from 'express';
import cors from 'cors';

const app = express(); // Define the app variable
const PORT = process.env.PORT || 3000;

// Use CORS middleware
app.use(cors());

// Sample route
app.get("/", (req , res) =>{
    res.send("hello");
} );
app.post("/", (req , res) =>{
    res.send("Post hello");
} );
app.put("/", (req , res) =>{
    res.send("put hello");
} );
app.delete("/", (req , res) =>{
    res.send("delete hello");
} );
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});