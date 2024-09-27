# TP1 - API Express creada con NodeJS
API creada con NodeJS utilizando express, dotenv, axios y WepAPI de Spotify.
RECORDATORIO: usar "npm install" para las dependencias y luego correr aplicacion con "node app.js".
Si tira error husky, poner "npx standard --fix" para arreglar la mayoria de los errores.

Aportes de Alumno Batista:  auth.js - Carpeta Routes/apiRoutes.js - Carpeta controllers/spotifyControllers.js
Aportes de Alumno Cappa: server.js - artistas.js(en carpeta Routes) - artistas.js(en carpeta controllers)
Aportes de Alumno Flores: controllers/variosControllers.js y Routes/variosRoutes.js

Endpoints:
• /releases
Muestra una lista de los nuevos lanzamientos de Spotify.

• /albums/:id
Utilizando el SpotifyID de un album, muestra la informacion de dicho album. 
IDs de ejemplo:
2up3OPMp9Tb4dAKM2erWXQ
4aawyAB9vmqN3uQ7FjRGTy

• /albums
Busca un artista mediante un query params por su nombre (?artist={nombre_artista}).
Ejemplo:
/albums?artist=coldplay

• /api/generos
Muestra una lista de los generos musicales disponibles en Spotify.

• /api/playlist/:id
Utilizando el SpotifyID de una playlist, muestra la informacion de dicha playlist.
IDs de ejemplo:
3cEYpjA9oz9GiPac4AsH4n
3Z9oPJuIN9kpQtxo2mSbUt

• /api/podcasts/:id
Utilizando el SpotifyID de un podcast, muestra la informacion de dicho podcast.
IDs de ejemplo:
3VIKVOSfbHk7vy83sgB7SE
1KRwhKl60iMj3r9QH5fTnf

• /api/artistas/search
Buscar un artista mediante un query params (?q={nombre_artista}) y devuelvo su SpotifyID de dicho artista.
Ejemplo:
/api/artistas/search?q=ladygaga

• /api/artistas/:id
Utilizando el SpotifyID de un artista, muestra informacion de dicho artista.
IDs de ejemplo:
Eminem ID: 7dGJo4pcD2V6oG8kP0tJRR
Lady Gaga ID: 1HY2Jd0NmPuamShAr6KMms
The Weeknd ID: 1Xyo4u8uXC1ZmMpatF05PJ

• /api/artistas/:id/albums
Muestra una lista con todos los albunes de un artista mediante su SpotifyID.
