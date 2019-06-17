//LOAD DATA
const friendData =require("../data/friends");

// Routes
module.exports = (app) => {

    app.get("/api/friends", function(req, res) {
        res.json(friendData);
    });

    app.post("/api/friends", function(req, res){
        let userScore = req.body.scores;
        const scoresArr = [];
        let bestMatch = 0;

        for (var i = 0; i < friendData.length; i++) {
            var scoreDiff = 0;

        for (var j = 0; j < userScore.length; j++) {
            var scoreDiff += (Math.abs(parseInt(friendData[i].scores[j]) - parseInt(userScore[j])))
        } 
        scoresArr.push(scoreDiff);
        }
        for (var i = 0; i < scoresArr.length; i++) {
            if (scoresArr[i] <= scoresArr[bestMatch]) {
                bestMatch = i;
            }
        }

        let soulMate = friendData[bestMatch];
        res.json(soulMate);

        console.log(req.body);
        friendData.push(req.body)
});

app.post("/api/clear", function(req, res) {
    friendData.length = [];
    res.json({
        ok: true
    });
});

};