const posts = require('../posts.js')

function index(req, res){
    res.json(posts)
}

function show(req, res){
    res.json(posts[req.params.id])
}

function store(req, res){
    res.send(`Inserimento di un nuovo post`)
}

function update(req, res){
    res.send(`Aggiorno il post con id: ${req.params.id}`)
}

function modify(req, res){
    res.send(`Modifico il post con id: ${req.params.id}`)
}

function destroy(req, res){
    res.send(`Elimino il post con id: ${req.params.id}`)
}

module.exports = {index, show, store, update,modify,destroy}