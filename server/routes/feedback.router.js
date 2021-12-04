const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.post('/', (req, res) => {
    const feedback = req.body;
    const sqlText = 
        `
            INSERT INTO feedback (feeling, understanding, support, goof, comments )
            VALUES ( $1, $2, $3, $4, $5 )
        `;
    pool.query(sqlText, [ feedback.feeling, feedback.understanding, feedback.support, feedback.goof, feedback.comments ])
    .then((result) => {
        console.log(`Added feedback to the database`, result);
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log(`Error making database query ${sqlText}`, error);
        res.sendStatus(500);
    })
})

module.exports = router ;