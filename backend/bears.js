const express = require('express')
const app = express()
const router = express.Router();
const cors = require('cors')
const bodyParser = require('body-parser')

let bears = [{id: 1, name: 'Winnie', weight: 80},
    {id: 2, name: 'Pooh', weight: 90},
    {id: 3, name: 'Duffy ', weight: 100}]

app.use(cors())
app.use('/api', bodyParser.json() ,router)
app.use('/api', bodyParser.urlencoded({extended:false}) ,router)

router.route('/bears')
    .get( (req, res) =>  res.json(bears) )

    .post( (req, res)=> {
        var bear = {};
        bear.id =   bears[bears.length-1].id +1  ;
        bear.name = req.body.name
        bear.weight = req.body.weight
        bears.push(bear);
        res.json( {message: 'Bear created!'} )
    })


router.route('/bears/:bear_id')
    .get ( (req,res) => {
        let id = bears.findIndex( (bear) => bear.id === +req.params.bear_id)
        res.json(bears[id])
    }) 

    .put ( (req,res) => {                            
      
        let id = bears.findIndex( (bear) => bear.id === +req.params.bear_id)
        bears[id].name = req.body.name;
        bears[id].weight = req.body.weight;
        res.json({ message: 'Bear updated!' + req.params.bear_id});
    })

    .delete ( (req,res) => {                   

        bears = bears.filter( (bear) => bear.id !== +req.params.bear_id )
        res.json({ message: 'Bear deleted: ' + req.params.bear_id});
    })

app.listen(8001, () => console.log('server ready on port 8001\nhttp://localhost:8001/api/bears'))