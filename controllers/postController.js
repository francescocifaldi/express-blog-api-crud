const posts = require('../data/posts.js')

function index(req, res){
    let filteredPosts = posts
	// filter tag
	if (req.query.tag) {
		filteredPosts = posts.filter((post) => {
		    return post.tags.includes(req.query.tag)
		})
	}
    res.json(filteredPosts)
}

function show(req, res){
    const id = parseInt(req.params.id)
    console.log(id)
    let post
    if(isNaN(id)){
        post = posts.find((post) => post.slug === req.params.id)
    }
	else { 
        post = posts.find((post) => post.id === id)
    }

    let result=post

	if (!post) {
		console.log('Post non trovato')

		res.status(404)
		result = {
			error: 'Post not found',
			message: 'Il post non è stato trovato.',
		}
	}
	res.json(result)
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
    const id = parseInt(req.params.id)
	console.log(`Elimino il post con id: ${id}`)

	const postIndex = posts.findIndex((post) => post.id === id)

	if (postIndex === -1) {
		res.status(404)

		return res.json({
			error: 'Pizza not found',
			message: 'La pizza non è stata trovata.',
		})
	}
    
	posts.splice(postIndex, 1)

	res.sendStatus(204)
    console.log(posts)
}

module.exports = {index, show, store, update,modify,destroy}