//GET route - url - /api/friends --JSON of all posiible fiends
//POST route - url - /api/friends -- store all submitted interests.
const friends= require("../data/friends.js")

module.exports = function(app){

    app.get("/friends", function(req, res){
        console.log(friends);
        return res.json(friends);
    });
    
    app.post("/survey", function(req,res){
    
        var newPerson = req.body;
    
        console.log(newPerson);
    
        friends.push(newPerson);
    
        res.json(newPerson);

        console.log(friends);
        
    });
}






