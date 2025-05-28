const express = require('express');
const router = express.Router();
const { getTranscations, addTranscations, deleteTranscations }  = require('../controllers/transactionController');

router
    .route('/')
    .get(getTranscations)
    .post(addTranscations);

router
    .route('/:id')
    .delete(deleteTranscations);

module.exports = router;