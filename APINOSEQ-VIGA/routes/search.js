const searchController = require('../controllers/search');
const express = require('express');
const router = express.Router();

router.post(`/`, searchController.postSearch);

module.exports = router;