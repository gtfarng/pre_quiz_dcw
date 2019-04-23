const express = require('express')
const app = express()
const router = express.Router()
const bodyParser = require('body-parser')
const cors = require('cors')

let counts = [{ id: 1, name: 'THAILAND'},{ id: 2, name: 'CHINA'},{ id: 3, name: 'FRANCE'},{ id: 4, name: 'SINGAPORE'}]

app.use(express.static('test\\public'))
app.use(cors())
 
router.route('/countrys')
	.get((req,res) => {
		res.send(counts)
	})

	.post((req,res) =>{
		let count ={};
		count.id = counts.length+1
		console.log('body.name', req.body)
		count.name = req.body.name
		counts.push(count)
		res.send(counts)
	})

router.route('/countrys/:id')
	.get((req,res) => { 
		res.send(counts[req.params.id])
	} )	

	.put ((req,res) => {
		const id = req.params.id		
		counts[id].name = req.body.name; 
        res.json({ message: 'Country updated!' });        
     })

    .delete ((req,res) => {
		const id = req.params.id
		console.log('id',id)
		delete 	counts[id]
      	res.json({ message: 'Country deleted!' });        
    })

app.use('/api', bodyParser.json(), router);  // for axios 

app.listen(8003)