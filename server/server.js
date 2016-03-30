var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var Nedb = require('nedb')

var database = new Nedb({filename: './data/data.db', autoload:true})

app.use(express.static('../client'))

app.use(bodyParser.json())

app.post('/saveCurrent', function (req, res) {
	var data = {
				word: req.body.word, 
				date: Date.now()
			}
	//creating a variable called data 

	var done = function (){
		console.log('I just wrote to the database')
		res.end("done")
	}

	database.insert(data, done) //insert the data and run the done function 
})

//<!--request is, response is what we are going to send back-->

var PORT = 8080
app.listen(PORT)

console.log("listening on " + PORT)