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
  const { artist } = req.query
  try {
    const token = await getAccessToken()
    const response = await axios.get(`https://api.spotify.com/v1/search?q=${artist}&type=album`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    res.status(200).json({ status: 'ok', data: response.data.albums.items })
  } catch (error) {
    res.status(500).json({ status: 'error', msg: 'Error inesperado al obtener la información' })
  }
}

module.exports = { getNewReleases, getAlbumById, searchAlbums }
