const express = require("express")
const router = express.Router()
const Joi = require('joi');

router.get("/", (req, res) => {
    let sql = 'SELECT * FROM bandits';

    // FILTERS
    // const sqlValues = [];
    // if (req.query.color) {
    //   sql += ' WHERE color = ?';
    //   sqlValues.push(req.query.color);
    // }
    // if (req.query.max_duration) {
    //   if (req.query.color) sql += ' AND duration <= ? ;';
    //   else sql += ' WHERE duration <= ?';
  
    //   sqlValues.push(req.query.max_duration);
    // }


	res.status(200).json("je suis dans le /bandits  mon poulet")
})



router.get("/:id", (req, res) => {
    console.log("bonjour")
    // const { id } = req.params
	// res.status(200).json(`je suis dans le /${id}`)
})

module.exports = router