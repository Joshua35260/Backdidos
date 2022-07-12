const express = require("express")
const connection = require("../db-config");
const router = express.Router()
const Joi = require('joi');


router.get("/", (req, res) => {
    let sql = "SELECT b.*, group_concat(DISTINCT a.name_arme SEPARATOR ', ') as armes FROM bandits as b JOIN bandits_has_armes as bha ON bha.bandits_idbandits = b.idbandits JOIN armes as a ON a.idarmes = bha.armes_idarmes";
    connection.query(sql, (err, result) => {
        if (err) {
          console.error(err);
          res.status(500).send("Error retrieving bandits from database");
        } else {
          res.json(result);
        }
      });
    });


    router.get("/:id", (req, res) => {
        const banditsId = req.params.id;
        connection.query(
          "SELECT b.*, group_concat(DISTINCT a.name_arme SEPARATOR ', ') as armes FROM bandits as b JOIN bandits_has_armes as bha ON bha.bandits_idbandits = b.idbandits JOIN armes as a ON a.idarmes = bha.armes_idarmes WHERE idbandits = ?",
          [banditsId],
          (err, result) => {
            if (err) {
              console.error(err);
              res.status(500).send("Error retrieving bandits from database");
            } else if (result.length === 0) {
              res.status(404).send("Bandits not found");
            } else {
              res.json(result[0]);
            }
          }
        );
      });
    
    
    
	// res.status(200).json(sql)



router.get("/:id", (req, res) => {
    console.log("bonjour")
    // const { id } = req.params
	// res.status(200).json(`je suis dans le /${id}`)
})

module.exports = router


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