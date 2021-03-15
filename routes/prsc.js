const express = require('express');
const prscController = require('../controllers/prscController');
const checkAuthMiddleware = require('../middleware/check-auth');

const router = express.Router();

router.get('/search', prscController.search);

module.exports = router;