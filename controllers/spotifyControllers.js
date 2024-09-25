const { getAccessToken } = require('../auth')
const axios = require('axios')

const getNewReleases = async (req, res) => {
  try {
    const token = await getAccessToken() // Obtiene el token desde auth.js
    const response = await axios.get('https://api.spotify.com/v1/browse/new-releases?limit=50', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    res.status(200).json({ status: 'ok', data: response.data.albums.items })
  } catch (error) {
    res.status(500).json({ status: 'error', msg: 'Error inesperado al obtener la información' })
  }
}
const getAlbumById = async (req, res) => {
  const { id } = req.params
  try {
    const token = await getAccessToken()
    const response = await axios.get(`https://api.spotify.com/v1/albums/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    res.status(200).json({ status: 'ok', data: response.data })
  } catch (error) {
    res.status(500).json({ status: 'error', msg: 'Error inesperado al obtener la información' })
  }
}

const searchAlbums = async (req, res) => {
  const { artist } = req.query // Obtener el nombre del artista desde los query params
  if (!artist) {
    return res.status(400).json({ status: 'error', msg: 'Debes proporcionar un artista' })
  }
  try {
    const token = await getAccessToken() // Obtener el token de acceso
    const response = await axios.get('https://api.spotify.com/v1/search', {
      headers: {
        Authorization: `Bearer ${token}` // Usar el token para autenticar la solicitud
      },
      params: {
        q: artist, // Pasar el nombre del artista como parte de la búsqueda
        type: 'album', // Buscar solo álbumes
        limit: 50 // Limitar los resultados a 50 para cumplir con los requisitos del PDF
      }
    })
    if (response.data.albums.items.length > 0) {
      res.json({ status: 'ok', data: response.data.albums.items })
    } else {
      res.status(404).json({ status: 'error', msg: 'No se encontraron álbumes para este artista' })
    }
  } catch (error) {
    res.status(500).json({ status: 'error', msg: 'Error inesperado al obtener la información' })
  }
}

module.exports = { getNewReleases, getAlbumById, searchAlbums }
