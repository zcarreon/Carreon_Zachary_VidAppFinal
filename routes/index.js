var express = require('express');
//var connect = require('../utils/sqlConnect');
var videoController = require('../controllers/videoAppController');
var router = express.Router();

/* GET home page. */
router.get('/', videoController.get_all_movies);
router.get('/movies/:id/:movie', videoController.get_one_movie );
router.post('/api', videoController.post_new_review);
// router.get('/', (req, res, next) => {
//
//   //Do an SQL query t get all of the movies, including genre
//   connect.query(`SELECT * FROM tbl_movies m, tbl_genre g, tbl_mov_genre mg WHERE m.movies_id = mg.movies_id AND g.genre_id = mg.genre_id`, (error, rows) => {
//     if (error) {
//       throw error;
//     }else{
//       res.render('home', {
//         defaultMovie : rows[Math.floor(Math.random() * rows.length)],
//         data : JSON.stringify(rows)
//       });
//     }
//   })
//   //res.render('home',{ message: "Vue and Video!"});
// });

module.exports = router;
