const express = require('express')
const { getNewReleases, getAlbumById, searchAlbums } = require('../controllers/spotifyControllers')

const router = express.Router()

// Endpoint para obtener nuevos lanzamientos
router.get('/releases', getNewReleases)

// Endpoint para obtener un álbum por ID
router.get('/albums/:id', getAlbumById)

// Endpoint para buscar álbumes por artista
router.get('/albums', searchAlbums)

module.exports = router
