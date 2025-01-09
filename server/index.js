const express = require('express');
const mongoose = require('mongoose');
const AWS = require('aws-sdk');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 5500;

// AWS SDK to fetch MongoDB URL
const ssm = new AWS.SSM({ region: 'us-east-1' }); // Replace with your region



async function getMongoDBURL() {
    const params = { Name: '/my-app/mongodb-url', WithDecryption: true }; // Replace with your parameter name
    const result = await ssm.getParameter(params).promise();
    return result.Parameter.Value;
}

(async () => {
    try {
        const MONGO_URI = await getMongoDBURL();
        await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Database connected");



        const TodoItemRoute = require('./routes/todoItems');
        app.use('/', TodoItemRoute);

        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    } catch (error) {
        console.error("Error:", error);
    }
})();
