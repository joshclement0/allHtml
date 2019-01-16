var express = require('express');
var router = express.Router();
var mongoose = require('mongoose'); 

/* Set up mongoose */
mongoose.connect('mongodb://localhost/commentDB',{ useNewUrlParser: true }); //Connects to a mongo database called "commentDB"

var voterSchema = mongoose.Schema({ //Defines the Schema for this database
    Candidate:String,
    numVotes: Number,
    checked:String
});

var Vote = mongoose.model('Chat', voterSchema);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected');
});

/* GET home page. */
router.get('/', function(req, res, next) {
    Vote.find(function(err,data){
        if(err) return console.log(err);
        else{
            res.json(data);    
        }
    });
});
router.post('/vote',function(req,res,next){
   var name = req.query.Name;
   var obj={Candidate:name};
   Vote.update(obj, { $inc : { "$.numVotes" : 1 } });
   Vote.find(obj,function(err,data){
       if (err) return console.log(err);
       else{
           console.log(data);
       }
   });
});
router.post('/new',function(req,res,next){
   var newCandidate = new Vote({
        Candidate: req.query.Name,
        numVotes:0,
        checked:false
        });
    var obj={Candidate:req.query.Name};
    Vote.find(obj,function(err,data){
        if(err)return console.log(err);
        else if(data) res.sendStatus(204);
        else{
            newCandidate.save(function(err, post) { 
                if (err) return console.error(err);
                res.sendStatus(200);
            });
        }
    });
});
router.delete('/vote',function(req,res,next){
   var obj={Candidate:req.query.Name};
   Vote.find().remove(obj, function(err){
        if(err) console.log("Unable to delete Candidate. Error: ", err); 
        else {
            console.log("Deleted",obj);
            res.sendStatus(200); 
        }
    });
});

module.exports = router;
