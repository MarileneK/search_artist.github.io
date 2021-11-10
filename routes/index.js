var express = require('express');
var router = express.Router();

var Musics = [
  {
    artist: "Muse",
    favorite_musics: ["Uprising", "Starlight"]
  }, {
    artist: "ACDC",
    favorite_musics: ["Thunderstruck", "Highway to Hell"]
  }, {
    artist: "Led Zeppelin",
    favorite_musics: ["Rock and Roll", "Stairway to Heaven"]
  }, {
    artist: "The Doors",
    favorite_musics: ["LA Woman", "Riders on the Storm "]
  }, {
    artist: "Charles Aznavour",
    favorite_musics: ["La Boheme", "Hier encore"]
  }, {
    artist: "Jacques Brel",
    favorite_musics: ["Ne me quitte pas", "Quand on a que l'amour"]
  }, {
    artist: "Céline Dion",
    favorite_musics: ["S'il suffisait d'aimer", "Let's Talk About Love"]
  }, {
    artist: "Pink Floyd",
    favorite_musics: ["Shine On You Crazy Diamond", "Another Brick in the Wall"]
  }, {
    artist: "Edith Piaf",
    favorite_musics: ["La Vie en rose", "Non, je ne regrette rien"]
  }, {
    artist: "Beyonce",
    favorite_musics: ["Halo", "Crazy in Love"]
  }
];


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});

router.post('/search-artist', function (req, res, next) {
  console.log('log de req.body.artistName', req.body.artistName);
  let inputName = req.body.artistName;
  let artist;

  if (inputName !== '') {
    artist = null;

    for (let i = 0; i < Musics.length; i++) {
      if (inputName == Musics[i].artist) {
        console.log("log d'artist", artist)
        artist = Musics[i];
      } else {
        console.log('Artist not found');
      }
    }

    res.render('search', { artist })

  } else {
    console.log('Oops... there must be a mistake. Please search again');
    res.render('search', { artist: null } )
  }
})

module.exports = router;
