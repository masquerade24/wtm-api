const express = require('express');
const drugController = require('../controllers/drugController');
const checkAuthMiddleware = require('../middleware/check-auth');

const router = express.Router();

router.get('/search', checkAuthMiddleware.checkAuth, drugController.search);

module.exports = router;