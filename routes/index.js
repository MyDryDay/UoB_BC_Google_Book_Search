const router = require('express').Router();
const apiRoutes = require('./api');
const path = require('path');

router.use('/api', apiRoutes);

router.use((req, res) => {
    // CHANGE TO CLIENTS/BUILD/INDEX.HTML BEFORE DEPLOYMENT
    res.sendFile(path.join(__dirname, '../client/public/index.html'));
});

module.exports = router;