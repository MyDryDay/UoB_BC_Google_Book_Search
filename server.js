const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3001;

// *** REQUIRE ROUTES HERE ONCE COMPLETE ***
const routes = require('./routes');

// Middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// Static assets
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
}

// *** UNCOMMENT ROUTES ONCE COMPLETED ***
app.use(routes);

// Connect to DB
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost:27017/googlebooks',
    {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

// Start the server
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
});