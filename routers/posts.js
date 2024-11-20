const express = require('express')
const router = express.Router()
const posts = require('../posts')

//index
router.get('/', (req, res) => {
    res.json(posts)
})

//show
router.get('/:id', (req, res) => {
    res.json(posts[req.params.id])
})

//store
router.post('/', (req, res) => {
    res.send(`Inserimento di un nuovo post`)
})

//update
router.put('/:id', (req, res) => {
    res.send(`Aggiorno il post con id: ${req.params.id}`)
})

//modify
router.patch('/:id', (req, res) => {
    res.send(`Modifico il post con id: ${req.params.id}`)
})

//destroy
router.delete('/:id', (req, res) => {
    res.send(`Elimino il post con id: ${req.params.id}`)
})

module.exports = router