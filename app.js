var playerIDs = ["8477021", "8477341", "8479318", "8478857", "8477512", "8481624", "8469455", "8475166", "8477953", "8478483", "8478115", "8479675", "8477939", "8475786", "8476879", "8474162",
"8475718", "8475716", "8476853", "8478408", "8475197", "8475883", "8474636"];

var express = require("express");
var request = require("request");
var app = express();
var getJSON = require('get-json')


var playerDatas = [];

app.use(express.static("public"));


request('https://statsapi.web.nhl.com/api/v1/people/' + playerIDs[0] + '/stats?stats=statsSingleSeason', function (error, response, body){

	if(!error && response.statusCode == 200)
	{
		var parsedData = JSON.parse(body);
		gp = parsedData["stats"][0]["splits"][0]["stat"]["games"];
		goals = parsedData["stats"][0]["splits"][0]["stat"]["goals"];
		assists = parsedData["stats"][0]["splits"][0]["stat"]["assists"];
		shots = parsedData["stats"][0]["splits"][0]["stat"]["shots"];

		pd1 = [gp, goals, assists, shots];
	}
});

request('https://statsapi.web.nhl.com/api/v1/people/' + playerIDs[1] + '/stats?stats=statsSingleSeason', function (error, response, body){

	if(!error && response.statusCode == 200)
	{
		var parsedData = JSON.parse(body);
		gp = parsedData["stats"][0]["splits"][0]["stat"]["games"];
		goals = parsedData["stats"][0]["splits"][0]["stat"]["goals"];
		assists = parsedData["stats"][0]["splits"][0]["stat"]["assists"];
		shots = parsedData["stats"][0]["splits"][0]["stat"]["shots"];

		pd2 = [gp, goals, assists, shots];
	}
});

request('https://statsapi.web.nhl.com/api/v1/people/' + playerIDs[2] + '/stats?stats=statsSingleSeason', function (error, response, body){

	if(!error && response.statusCode == 200)
	{
		var parsedData = JSON.parse(body);
		gp = parsedData["stats"][0]["splits"][0]["stat"]["games"];
		goals = parsedData["stats"][0]["splits"][0]["stat"]["goals"];
		assists = parsedData["stats"][0]["splits"][0]["stat"]["assists"];
		shots = parsedData["stats"][0]["splits"][0]["stat"]["shots"];

		pd3 = [gp, goals, assists, shots];
	}
});

request('https://statsapi.web.nhl.com/api/v1/people/' + playerIDs[3] + '/stats?stats=statsSingleSeason', function (error, response, body){

	if(!error && response.statusCode == 200)
	{
		var parsedData = JSON.parse(body);
		gp = parsedData["stats"][0]["splits"][0]["stat"]["games"];
		goals = parsedData["stats"][0]["splits"][0]["stat"]["goals"];
		assists = parsedData["stats"][0]["splits"][0]["stat"]["assists"];
		shots = parsedData["stats"][0]["splits"][0]["stat"]["shots"];

		pd4 = [gp, goals, assists, shots];
	}
});

request('https://statsapi.web.nhl.com/api/v1/people/' + playerIDs[4] + '/stats?stats=statsSingleSeason', function (error, response, body){

	if(!error && response.statusCode == 200)
	{
		var parsedData = JSON.parse(body);
		gp = parsedData["stats"][0]["splits"][0]["stat"]["games"];
		goals = parsedData["stats"][0]["splits"][0]["stat"]["goals"];
		assists = parsedData["stats"][0]["splits"][0]["stat"]["assists"];
		shots = parsedData["stats"][0]["splits"][0]["stat"]["shots"];

		pd5 = [gp, goals, assists, shots];
	}
});


request('https://statsapi.web.nhl.com/api/v1/people/' + playerIDs[5] + '/stats?stats=statsSingleSeason', function (error, response, body){

	if(!error && response.statusCode == 200)
	{
		var parsedData = JSON.parse(body);
		gp = parsedData["stats"][0]["splits"][0]["stat"]["games"];
		goals = parsedData["stats"][0]["splits"][0]["stat"]["goals"];
		assists = parsedData["stats"][0]["splits"][0]["stat"]["assists"];
		shots = parsedData["stats"][0]["splits"][0]["stat"]["shots"];

		pd6 = [gp, goals, assists, shots];
	}
});

request('https://statsapi.web.nhl.com/api/v1/people/' + playerIDs[6] + '/stats?stats=statsSingleSeason', function (error, response, body){

	if(!error && response.statusCode == 200)
	{
		var parsedData = JSON.parse(body);
		gp = parsedData["stats"][0]["splits"][0]["stat"]["games"];
		goals = parsedData["stats"][0]["splits"][0]["stat"]["goals"];
		assists = parsedData["stats"][0]["splits"][0]["stat"]["assists"];
		shots = parsedData["stats"][0]["splits"][0]["stat"]["shots"];

		pd7 = [gp, goals, assists, shots];
	}
});

request('https://statsapi.web.nhl.com/api/v1/people/' + playerIDs[7] + '/stats?stats=statsSingleSeason', function (error, response, body){

	if(!error && response.statusCode == 200)
	{
		var parsedData = JSON.parse(body);
		gp = parsedData["stats"][0]["splits"][0]["stat"]["games"];
		goals = parsedData["stats"][0]["splits"][0]["stat"]["goals"];
		assists = parsedData["stats"][0]["splits"][0]["stat"]["assists"];
		shots = parsedData["stats"][0]["splits"][0]["stat"]["shots"];

		pd8 = [gp, goals, assists, shots];
	}
});

request('https://statsapi.web.nhl.com/api/v1/people/' + playerIDs[8] + '/stats?stats=statsSingleSeason', function (error, response, body){

	if(!error && response.statusCode == 200)
	{
		var parsedData = JSON.parse(body);
		gp = parsedData["stats"][0]["splits"][0]["stat"]["games"];
		goals = parsedData["stats"][0]["splits"][0]["stat"]["goals"];
		assists = parsedData["stats"][0]["splits"][0]["stat"]["assists"];
		shots = parsedData["stats"][0]["splits"][0]["stat"]["shots"];

		pd9 = [gp, goals, assists, shots];
	}
});

request('https://statsapi.web.nhl.com/api/v1/people/' + playerIDs[9] + '/stats?stats=statsSingleSeason', function (error, response, body){

	if(!error && response.statusCode == 200)
	{
		var parsedData = JSON.parse(body);
		gp = parsedData["stats"][0]["splits"][0]["stat"]["games"];
		goals = parsedData["stats"][0]["splits"][0]["stat"]["goals"];
		assists = parsedData["stats"][0]["splits"][0]["stat"]["assists"];
		shots = parsedData["stats"][0]["splits"][0]["stat"]["shots"];

		pd10 = [gp, goals, assists, shots];
	}
});

request('https://statsapi.web.nhl.com/api/v1/people/' + playerIDs[10] + '/stats?stats=statsSingleSeason', function (error, response, body){

	if(!error && response.statusCode == 200)
	{
		var parsedData = JSON.parse(body);
		gp = parsedData["stats"][0]["splits"][0]["stat"]["games"];
		goals = parsedData["stats"][0]["splits"][0]["stat"]["goals"];
		assists = parsedData["stats"][0]["splits"][0]["stat"]["assists"];
		shots = parsedData["stats"][0]["splits"][0]["stat"]["shots"];

		pd11 = [gp, goals, assists, shots];
	}
});

request('https://statsapi.web.nhl.com/api/v1/people/' + playerIDs[11] + '/stats?stats=statsSingleSeason', function (error, response, body){

	if(!error && response.statusCode == 200)
	{
		var parsedData = JSON.parse(body);
		gp = parsedData["stats"][0]["splits"][0]["stat"]["games"];
		goals = parsedData["stats"][0]["splits"][0]["stat"]["goals"];
		assists = parsedData["stats"][0]["splits"][0]["stat"]["assists"];
		shots = parsedData["stats"][0]["splits"][0]["stat"]["shots"];

		pd12 = [gp, goals, assists, shots];
	}
});

request('https://statsapi.web.nhl.com/api/v1/people/' + playerIDs[12] + '/stats?stats=statsSingleSeason', function (error, response, body){

	if(!error && response.statusCode == 200)
	{
		var parsedData = JSON.parse(body);
		gp = parsedData["stats"][0]["splits"][0]["stat"]["games"];
		goals = parsedData["stats"][0]["splits"][0]["stat"]["goals"];
		assists = parsedData["stats"][0]["splits"][0]["stat"]["assists"];
		shots = parsedData["stats"][0]["splits"][0]["stat"]["shots"];

		pd13 = [gp, goals, assists, shots];
	}
});

request('https://statsapi.web.nhl.com/api/v1/people/' + playerIDs[13] + '/stats?stats=statsSingleSeason', function (error, response, body){

	if(!error && response.statusCode == 200)
	{
		var parsedData = JSON.parse(body);
		gp = parsedData["stats"][0]["splits"][0]["stat"]["games"];
		goals = parsedData["stats"][0]["splits"][0]["stat"]["goals"];
		assists = parsedData["stats"][0]["splits"][0]["stat"]["assists"];
		shots = parsedData["stats"][0]["splits"][0]["stat"]["shots"];

		pd14 = [gp, goals, assists, shots];
	}
});

request('https://statsapi.web.nhl.com/api/v1/people/' + playerIDs[14] + '/stats?stats=statsSingleSeason', function (error, response, body){

	if(!error && response.statusCode == 200)
	{
		var parsedData = JSON.parse(body);
		gp = parsedData["stats"][0]["splits"][0]["stat"]["games"];
		goals = parsedData["stats"][0]["splits"][0]["stat"]["goals"];
		assists = parsedData["stats"][0]["splits"][0]["stat"]["assists"];
		shots = parsedData["stats"][0]["splits"][0]["stat"]["shots"];

		pd15 = [gp, goals, assists, shots];
	}
});

request('https://statsapi.web.nhl.com/api/v1/people/' + playerIDs[15] + '/stats?stats=statsSingleSeason', function (error, response, body){

	if(!error && response.statusCode == 200)
	{
		var parsedData = JSON.parse(body);
		gp = parsedData["stats"][0]["splits"][0]["stat"]["games"];
		goals = parsedData["stats"][0]["splits"][0]["stat"]["goals"];
		assists = parsedData["stats"][0]["splits"][0]["stat"]["assists"];
		shots = parsedData["stats"][0]["splits"][0]["stat"]["shots"];

		pd16 = [gp, goals, assists, shots];
	}
});

request('https://statsapi.web.nhl.com/api/v1/people/' + playerIDs[16] + '/stats?stats=statsSingleSeason', function (error, response, body){

	if(!error && response.statusCode == 200)
	{
		var parsedData = JSON.parse(body);
		gp = parsedData["stats"][0]["splits"][0]["stat"]["games"];
		goals = parsedData["stats"][0]["splits"][0]["stat"]["goals"];
		assists = parsedData["stats"][0]["splits"][0]["stat"]["assists"];
		shots = parsedData["stats"][0]["splits"][0]["stat"]["shots"];

		pd17 = [gp, goals, assists, shots];
	}
});

request('https://statsapi.web.nhl.com/api/v1/people/' + playerIDs[17] + '/stats?stats=statsSingleSeason', function (error, response, body){

	if(!error && response.statusCode == 200)
	{
		var parsedData = JSON.parse(body);
		gp = parsedData["stats"][0]["splits"][0]["stat"]["games"];
		goals = parsedData["stats"][0]["splits"][0]["stat"]["goals"];
		assists = parsedData["stats"][0]["splits"][0]["stat"]["assists"];
		shots = parsedData["stats"][0]["splits"][0]["stat"]["shots"];

		pd18 = [gp, goals, assists, shots];
	}
});

request('https://statsapi.web.nhl.com/api/v1/people/' + playerIDs[18] + '/stats?stats=statsSingleSeason', function (error, response, body){

	if(!error && response.statusCode == 200)
	{
		var parsedData = JSON.parse(body);
		gp = parsedData["stats"][0]["splits"][0]["stat"]["games"];
		goals = parsedData["stats"][0]["splits"][0]["stat"]["goals"];
		assists = parsedData["stats"][0]["splits"][0]["stat"]["assists"];
		shots = parsedData["stats"][0]["splits"][0]["stat"]["shots"];

		pd19 = [gp, goals, assists, shots];
	}
});

request('https://statsapi.web.nhl.com/api/v1/people/' + playerIDs[19] + '/stats?stats=statsSingleSeason', function (error, response, body){

	if(!error && response.statusCode == 200)
	{
		var parsedData = JSON.parse(body);
		gp = parsedData["stats"][0]["splits"][0]["stat"]["games"];
		goals = parsedData["stats"][0]["splits"][0]["stat"]["goals"];
		assists = parsedData["stats"][0]["splits"][0]["stat"]["assists"];
		shots = parsedData["stats"][0]["splits"][0]["stat"]["shots"];

		pd20 = [gp, goals, assists, shots];
	}
});

request('https://statsapi.web.nhl.com/api/v1/people/' + playerIDs[20] + '/stats?stats=statsSingleSeason', function (error, response, body){

	if(!error && response.statusCode == 200)
	{
		var parsedData = JSON.parse(body);
		gp = parsedData["stats"][0]["splits"][0]["stat"]["games"];
		goals = parsedData["stats"][0]["splits"][0]["stat"]["goals"];
		assists = parsedData["stats"][0]["splits"][0]["stat"]["assists"];
		shots = parsedData["stats"][0]["splits"][0]["stat"]["shots"];

		pd21 = [gp, goals, assists, shots];
	}
});

request('https://statsapi.web.nhl.com/api/v1/people/' + playerIDs[21] + '/stats?stats=statsSingleSeason', function (error, response, body){

	if(!error && response.statusCode == 200)
	{
		var parsedData = JSON.parse(body);
		gp = parsedData["stats"][0]["splits"][0]["stat"]["games"];
		goals = parsedData["stats"][0]["splits"][0]["stat"]["wins"];
		assists = parsedData["stats"][0]["splits"][0]["stat"]["losses"];
		shots = parsedData["stats"][0]["splits"][0]["stat"]["shutouts"];

		pd22 = [gp, goals, assists, shots];
	}
});

request('https://statsapi.web.nhl.com/api/v1/people/' + playerIDs[22] + '/stats?stats=statsSingleSeason', function (error, response, body){

	if(!error && response.statusCode == 200)
	{
		var parsedData = JSON.parse(body);
		gp = parsedData["stats"][0]["splits"][0]["stat"]["games"];
		goals = parsedData["stats"][0]["splits"][0]["stat"]["wins"];
		assists = parsedData["stats"][0]["splits"][0]["stat"]["losses"];
		shots = parsedData["stats"][0]["splits"][0]["stat"]["shutouts"];

		pd23 = [gp, goals, assists, shots];
	}
});


request('https://statsapi.web.nhl.com/api/v1/teams/10/stats', function (error, response, body){

	if(!error && response.statusCode == 200)
	{
		var parsedData = JSON.parse(body);

		gamesPlayed = parsedData["stats"][0]["splits"][0]["stat"]["gamesPlayed"];
		wins = parsedData["stats"][0]["splits"][0]["stat"]["wins"];
		losses = parsedData["stats"][0]["splits"][0]["stat"]["losses"];
		otlosses = parsedData["stats"][0]["splits"][0]["stat"]["ot"];

		points = parsedData["stats"][0]["splits"][0]["stat"]["pts"];

		winposition = parsedData["stats"][1]["splits"][0]["stat"]["wins"];
		lossposition = parsedData["stats"][1]["splits"][0]["stat"]["losses"];
		pointposition = parsedData["stats"][1]["splits"][0]["stat"]["pts"];

		goalsPerGame = parsedData["stats"][0]["splits"][0]["stat"]["goalsPerGame"];
		goalsPerGame = goalsPerGame.toFixed(2);

		goalsAgainstPerGame = parsedData["stats"][0]["splits"][0]["stat"]["goalsAgainstPerGame"];
		goalsAgainstPerGame = goalsAgainstPerGame.toFixed(2);

		ppGoals = parsedData["stats"][0]["splits"][0]["stat"]["powerPlayGoals"];
		ppAgainstGoals = parsedData["stats"][0]["splits"][0]["stat"]["powerPlayGoalsAgainst"];

		shotsPerGame = parsedData["stats"][0]["splits"][0]["stat"]["shotsPerGame"];
		shotsPerGame = shotsPerGame.toFixed(2);
		shotsAllowed = parsedData["stats"][0]["splits"][0]["stat"]["shotsAllowed"];
		shotsAllowed = shotsAllowed.toFixed(2);

		faceOffWinPercent = parsedData["stats"][0]["splits"][0]["stat"]["faceOffWinPercentage"];



	}
});

//request('https://statsapi.web.nhl.com/api/v1/teams/10?expand=team.schedule.next', function (error, response, body){

//	if(!error && response.statusCode == 200)
//	{
//		var parsedData = JSON.parse(body);

//		awayTeam = parsedData["teams"][0]["nextGameSchedule"]["dates"][0]["games"][0]["teams"]["away"]["team"]["name"];
//		awayTeamStats = parsedData["teams"][0]["nextGameSchedule"]["dates"][0]["games"][0]["teams"]["away"]["leagueRecord"]["wins"] + "-" + parsedData["teams"][0]["nextGameSchedule"]["dates"][0]["games"][0]["teams"]["away"]["leagueRecord"]["losses"] + "-" + parsedData["teams"][0]["nextGameSchedule"]["dates"][0]["games"][0]["teams"]["away"]["leagueRecord"]["ot"];
//		awayID = parsedData["teams"][0]["nextGameSchedule"]["dates"][0]["games"][0]["teams"]["away"]["team"]["id"];



//		homeTeam = parsedData["teams"][0]["nextGameSchedule"]["dates"][0]["games"][0]["teams"]["home"]["team"]["name"];
//		homeTeamStats = parsedData["teams"][0]["nextGameSchedule"]["dates"][0]["games"][0]["teams"]["home"]["leagueRecord"]["wins"] + "-" + parsedData["teams"][0]["nextGameSchedule"]["dates"][0]["games"][0]["teams"]["home"]["leagueRecord"]["losses"] + "-" + parsedData["teams"][0]["nextGameSchedule"]["dates"][0]["games"][0]["teams"]["home"]["leagueRecord"]["ot"];
//		homeID = parsedData["teams"][0]["nextGameSchedule"]["dates"][0]["games"][0]["teams"]["home"]["team"]["id"];

//		gameDate = parsedData["teams"][0]["nextGameSchedule"]["dates"][0]["games"][0]["gameDate"];





	}
});



app.get("/", function(req, res){
	res.render("main.ejs", {gamesPlayed: gamesPlayed, wins: wins, losses: losses, otlosses: otlosses, points: points, winposition: winposition, lossposition: lossposition,
	pointposition: pointposition, awayTeam: awayTeam, awayTeamStats: awayTeamStats, awayID: awayID, homeTeam: homeTeam, homeTeamStats: homeTeamStats, homeID: homeID, gameDate: gameDate,
	goalsPerGame: goalsPerGame, goalsAgainstPerGame: goalsAgainstPerGame, ppGoals: ppGoals, ppAgainstGoals: ppAgainstGoals, shotsPerGame: shotsPerGame, shotsAllowed: shotsAllowed, faceOffWinPercent: faceOffWinPercent,
	pd1: pd1, pd2: pd2, pd3: pd3, pd4: pd4, pd5: pd5, pd6: pd6, pd7: pd7, pd8: pd8, pd9: pd9, pd10: pd10, pd11: pd11, pd12: pd12, pd13: pd13, pd14: pd14, pd15: pd15, pd16: pd16, pd17: pd17, pd18: pd18, pd19: pd19, pd20: pd20, pd21: pd21, pd22: pd22, pd23: pd23});
});

app.listen(process.env.PORT, process.env.IP);
