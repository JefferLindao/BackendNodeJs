const express = require('express')
const { moviesMock } = require('../utils/mocks/movies')

function moviesApi(app) {
  const router = express.Router()



  /**
   * Lista de videos platziMovies
   * 
   * @param ../utils/mocks/movies moviesMock
   * @returns [data, message]
   */
  app.use('/api/movies', router)
  router.get('/', async function (req, res, next) {
    try {
      const movies = await Promise.resolve(moviesMock)
      res.status(200).json({
        data: movies,
        message: 'movies listed'
      })
    } catch (error) {
      next(error)
    }
  })

  /**
   * Muestra un video en especificado
   * 
   * @param int movieId
   * @return [data, message]
   */
  router.get('/:movieId', async function (req, res, next) {
    try {
      const movies = await Promise.resolve(moviesMock[0])
      res.status(200).json({
        data: movies,
        message: 'movies retrieved'
      })
    } catch (error) {
      next(error)
    }
  })

  /**
   * Crear un nuevo video para PlatziMovie
   * 
   * @param int movieId
   * @return [data, message]
   */
  router.post('/', async function (req, res, next) {
    try {
      const createMovieId = await Promise.resolve(moviesMock[0].id)
      res.status(201).json({
        data: createMovieId,
        message: 'movie created'
      })
    } catch (error) {
      next(error)
    }
  })

  /**
   * Actualiza los datos de un video de PlatziMovie
   * 
   * @param int movieId
   * @return [data, message]
   */
  router.put('/:movieId', async function (req, res, next) {
    try {
      const updateMovieId = await Promise.resolve(moviesMock[0].id)
      res.status(200).json({
        data: updateMovieId,
        message: 'movie updated'
      })
    } catch (error) {
      next(error)
    }
  })

  /**
   * Elimina un video en especifico de PlatziMovie
   * 
   * @param int movieId
   * @return [data, message]
   */
  router.delete('/:movieId', async function (req, res, next) {
    try {
      const deleteMovieId = await Promise.resolve(moviesMock[0].id)
      res.status(200).json({
        data: deleteMovieId,
        message: 'movie deleted'
      })
    } catch (error) {
      next(error)
    }
  })
}

module.exports = moviesApi
