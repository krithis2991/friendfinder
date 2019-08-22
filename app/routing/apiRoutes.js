//GET route - url - /api/friends --JSON of all posiible fiends
//POST route - url - /api/friends -- store all submitted interests.
const friends= require("../data/friends.js")

module.exports = function(app){

    app.get("/api/friends", function(req, res){
        console.log(friends);
        return res.json(friends);
    });

    app.get("/friends", function(req,res){
        res.json(friends);
    })
    
    app.post("/survey", function(req,res){

        const friendMatch = {
            name: "",
            photo: "",
            // scoreDifference : 1000
        };
    
        const newPerson = req.body;
        //console.log(newPerson);

        let newName = newPerson.name;
        let newScore = newPerson.scores;

        let totalScore = newScore.forEach(function (e){
           parseInt.a ;
           console.log(e);
        });

        // newPerson = {
        //     name: req.body.name,
        //     photo: req.body.photo,
        //     scores: totalScore
        // };

        let lowestDifference = 1000;
        let bestMatch = {};

        for(let i = 0; i<friends.length; i++){
            console.log(friends[i].name);
            let scoreDifference = 0;
            for (let j = 0; j < friends[i].scores.length; j++) {
                console.log('firstNum', parseInt(friends[i].scores[j]), 'secondNum', parseInt(newScore[j]));
                scoreDifference += Math.abs(parseInt(friends[i].scores[j] - parseInt(newScore[j])));
            }

            if (scoreDifference < lowestDifference) {
                lowestDifference = scoreDifference;
                bestMatch = friends[i];
            }

            console.log("Total Difference " +scoreDifference);
            console.log("Best match friend diff" + JSON.stringify(bestMatch));
            
            
        }

        friends.push(newPerson);
        res.json(bestMatch);
        // console.log(friends);
        
    }); 
}






