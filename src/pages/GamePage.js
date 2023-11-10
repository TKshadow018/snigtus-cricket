import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Wave } from "react-animated-text";
import "../css/color.css";
import "../css/text.css";
import "../css/game.css";

import { countries } from "../json/countries";
import { runVoice } from "../json/runVoice";
import { outVoice } from "../json/outVoice";
import { matchStatusEnum } from "../json/matchStatusEnum";
import { playerListForNation } from "../json/playerListForNation";
import { stadiums } from "../json/stadiums";
import { matchTypeList } from "../json/matchTypeList";
import { battingAction, bowlingAction } from "../json/actionType";

const GamePage = () => {
    const [teamOne, setTeamOne] = useState({});
    const [teamTwo, setTeamTwo] = useState({});
    const [selectBowler, setSelectBowler] = useState(false)
    const [matchLocation, setMatchLocation] = useState(null);
    const [matchDetails, setMatchDetails] = useState({});
    const [lastBallRun, setLastBallRun] = useState(-2);
    const [tossWinner, setTossWinner] = useState({});
    const [isPlayerBattingFirst, setIsPlayerBattingFirst] = useState(false);
    // const [note, setNote] = useState({});

    const msg = new SpeechSynthesisUtterance();

    useEffect(() => {
        let matchData = {};
        let teamOneData = {};
        let teamTwoData = {};
        matchData.totalBall = 120;
        matchData.stadium = {
            name: "The Boat Stadium",
            seat: 50000,
            location: "Dhaka",
            battingCondition: [9, 7], // [batting first, batting second] 9-Best for batting, 0- Worst For Batting
            betterFor: 1, //1-none,2-spin,3-pace
            outfieldType: 4 //5-> Fast, 0->Dull
        };
        matchData.status = matchStatusEnum.ChooseOwnTeam; // 0-Toss, 1-choose Bat or Ball, 2-First Innings, 3-Second Innings, 4-GameOver
        matchData.playerAction = 0; // 0-Batting, 1-Bowling
        setMatchDetails(matchData);

        teamOneData.ballCompleted = 0;
        teamOneData.wicketTaken = 0;
        teamOneData.totalRun = 0;
        teamOneData.currentStrikerIndex = 0;
        teamOneData.currentNonStrikerIndex = 1;
        teamOneData.currentBowlerIndex = 10;
        teamOneData.teamName = "Bangladesh";
        teamOneData.playerList = [
            {
                id: 1,
                name: "Tamim Iqbal",
                abilityToPlayPaceBall: 84,
                abilityToPlaySpinBall: 78,
                battingAggresion: 75,
                isWicketKeeper: false,
                spinAbility: 10,
                paceAbility: 0,
                currentMatch: {
                    run: 0,
                    ball: 0,
                    isBatting: 1,
                    b_run: 0,
                    b_ball: 0,
                    b_wkt: 0,
                }
            },
            {
                id: 2,
                name: "Soumya Sarkar",
                abilityToPlayPaceBall: 84,
                abilityToPlaySpinBall: 78,
                battingAggresion: 75,
                isWicketKeeper: false,
                spinAbility: 10,
                paceAbility: 0,
                currentMatch: {
                    run: 0,
                    ball: 0,
                    isBatting: 1,
                    b_run: 0,
                    b_ball: 0,
                    b_wkt: 0,
                }
            },
            {
                id: 3,
                name: "Touhid Hridoy",
                abilityToPlayPaceBall: 84,
                abilityToPlaySpinBall: 78,
                battingAggresion: 75,
                isWicketKeeper: false,
                spinAbility: 10,
                paceAbility: 0,
                currentMatch: {
                    run: 0,
                    ball: 0,
                    isBatting: 0,
                    b_run: 0,
                    b_ball: 0,
                    b_wkt: 0,
                }
            },
            {
                id: 4,
                name: "Najmul Hossain Santo",
                abilityToPlayPaceBall: 84,
                abilityToPlaySpinBall: 78,
                battingAggresion: 75,
                isWicketKeeper: false,
                spinAbility: 10,
                paceAbility: 0,
                currentMatch: {
                    run: 0,
                    ball: 0,
                    isBatting: 0,
                    b_run: 0,
                    b_ball: 0,
                    b_wkt: 0,
                }
            },
            {
                id: 5,
                name: "Sakib Al Hasan",
                abilityToPlayPaceBall: 84,
                abilityToPlaySpinBall: 78,
                battingAggresion: 75,
                isWicketKeeper: false,
                spinAbility: 10,
                paceAbility: 0,
                currentMatch: {
                    run: 0,
                    ball: 0,
                    isBatting: 0,
                    b_run: 0,
                    b_ball: 0,
                    b_wkt: 0,
                }
            },
            {
                id: 6,
                name: "Mushfiqur Rahim",
                abilityToPlayPaceBall: 84,
                abilityToPlaySpinBall: 78,
                battingAggresion: 75,
                isWicketKeeper: false,
                spinAbility: 10,
                paceAbility: 0,
                currentMatch: {
                    run: 0,
                    ball: 0,
                    isBatting: 0,
                    b_run: 0,
                    b_ball: 0,
                    b_wkt: 0,
                }
            },
            {
                id: 7,
                name: "Liton Das",
                abilityToPlayPaceBall: 84,
                abilityToPlaySpinBall: 78,
                battingAggresion: 75,
                isWicketKeeper: false,
                spinAbility: 10,
                paceAbility: 0,
                currentMatch: {
                    run: 0,
                    ball: 0,
                    isBatting: 0,
                    b_run: 0,
                    b_ball: 0,
                    b_wkt: 0,
                }
            },
            {
                id: 8,
                name: "Mehidy Hasan Miraz",
                abilityToPlayPaceBall: 84,
                abilityToPlaySpinBall: 78,
                battingAggresion: 75,
                isWicketKeeper: false,
                spinAbility: 10,
                paceAbility: 0,
                currentMatch: {
                    run: 0,
                    ball: 0,
                    isBatting: 0,
                    b_run: 0,
                    b_ball: 0,
                    b_wkt: 0,
                }
            },
            {
                id: 9,
                name: "Mustafizur Rahman",
                abilityToPlayPaceBall: 84,
                abilityToPlaySpinBall: 78,
                battingAggresion: 75,
                isWicketKeeper: false,
                spinAbility: 10,
                paceAbility: 0,
                currentMatch: {
                    run: 0,
                    ball: 0,
                    isBatting: 0,
                    b_run: 0,
                    b_ball: 0,
                    b_wkt: 0,
                }
            },
            {
                id: 10,
                name: "Taskin Ahmed",
                abilityToPlayPaceBall: 84,
                abilityToPlaySpinBall: 78,
                battingAggresion: 75,
                isWicketKeeper: false,
                spinAbility: 10,
                paceAbility: 0,
                currentMatch: {
                    run: 0,
                    ball: 0,
                    isBatting: 0,
                    b_run: 0,
                    b_ball: 0,
                    b_wkt: 0,
                }
            },
            {
                id: 11,
                name: "Shoriful Islam",
                abilityToPlayPaceBall: 84,
                abilityToPlaySpinBall: 78,
                battingAggresion: 75,
                isWicketKeeper: false,
                spinAbility: 10,
                paceAbility: 0,
                currentMatch: {
                    run: 0,
                    ball: 0,
                    isBatting: 0,
                    b_run: 0,
                    b_ball: 0,
                    b_wkt: 0,
                }
            }
        ];
        setTeamOne(teamOneData);

        teamTwoData.ballCompleted = 0;
        teamTwoData.wicketTaken = 0;
        teamTwoData.totalRun = 0;
        teamTwoData.currentStrikerIndex = 0;
        teamTwoData.currentNonStrikerIndex = 1;
        teamOneData.currentBowlerIndex = 10;
        teamTwoData.teamName = "India";
        teamTwoData.playerList = [
            {
                id: 1,
                name: "Rohit Sharma",
                abilityToPlayPaceBall: 84,
                abilityToPlaySpinBall: 78,
                battingAggresion: 75,
                isWicketKeeper: false,
                spinAbility: 10,
                paceAbility: 0,
                currentMatch: {
                    run: 0,
                    ball: 0,
                    isBatting: 1,
                    b_run: 0,
                    b_ball: 0,
                    b_wkt: 0,
                }
            },
            {
                id: 2,
                name: "Shubman Gill",
                abilityToPlayPaceBall: 84,
                abilityToPlaySpinBall: 78,
                battingAggresion: 75,
                isWicketKeeper: false,
                spinAbility: 10,
                paceAbility: 0,
                currentMatch: {
                    run: 0,
                    ball: 0,
                    isBatting: 1,
                    b_run: 0,
                    b_ball: 0,
                    b_wkt: 0,
                }
            },
            {
                id: 3,
                name: "Virat Kohli",
                abilityToPlayPaceBall: 84,
                abilityToPlaySpinBall: 78,
                battingAggresion: 75,
                isWicketKeeper: false,
                spinAbility: 10,
                paceAbility: 0,
                currentMatch: {
                    run: 0,
                    ball: 0,
                    isBatting: 0,
                    b_run: 0,
                    b_ball: 0,
                    b_wkt: 0,
                }
            },
            {
                id: 4,
                name: "KL Rahul",
                abilityToPlayPaceBall: 84,
                abilityToPlaySpinBall: 78,
                battingAggresion: 75,
                isWicketKeeper: true,
                spinAbility: 10,
                paceAbility: 0,
                currentMatch: {
                    run: 0,
                    ball: 0,
                    isBatting: 0,
                    b_run: 0,
                    b_ball: 0,
                    b_wkt: 0,
                }
            },
            {
                id: 5,
                name: "Ishan Kishan",
                abilityToPlayPaceBall: 84,
                abilityToPlaySpinBall: 78,
                battingAggresion: 75,
                isWicketKeeper: false,
                spinAbility: 10,
                paceAbility: 0,
                currentMatch: {
                    run: 0,
                    ball: 0,
                    isBatting: 0,
                    b_run: 0,
                    b_ball: 0,
                    b_wkt: 0,
                }
            },
            {
                id: 6,
                name: "Hardik Pandya",
                abilityToPlayPaceBall: 84,
                abilityToPlaySpinBall: 78,
                battingAggresion: 75,
                isWicketKeeper: false,
                spinAbility: 10,
                paceAbility: 0,
                currentMatch: {
                    run: 0,
                    ball: 0,
                    isBatting: 0,
                    b_run: 0,
                    b_ball: 0,
                    b_wkt: 0,
                }
            },
            {
                id: 7,
                name: "Ravindra Jadeja",
                abilityToPlayPaceBall: 84,
                abilityToPlaySpinBall: 78,
                battingAggresion: 75,
                isWicketKeeper: false,
                spinAbility: 10,
                paceAbility: 0,
                currentMatch: {
                    run: 0,
                    ball: 0,
                    isBatting: 0,
                    b_run: 0,
                    b_ball: 0,
                    b_wkt: 0,
                }
            },
            {
                id: 8,
                name: "Shardul Thakur",
                abilityToPlayPaceBall: 84,
                abilityToPlaySpinBall: 78,
                battingAggresion: 75,
                isWicketKeeper: false,
                spinAbility: 10,
                paceAbility: 0,
                currentMatch: {
                    run: 0,
                    ball: 0,
                    isBatting: 0,
                    b_run: 0,
                    b_ball: 0,
                    b_wkt: 0,
                }
            },
            {
                id: 9,
                name: "Jasprit Bumrah",
                abilityToPlayPaceBall: 84,
                abilityToPlaySpinBall: 78,
                battingAggresion: 75,
                isWicketKeeper: false,
                spinAbility: 10,
                paceAbility: 0,
                currentMatch: {
                    run: 0,
                    ball: 0,
                    isBatting: 0,
                    b_run: 0,
                    b_ball: 0,
                    b_wkt: 0,
                }
            },
            {
                id: 10,
                name: "Kuldeep Yadav",
                abilityToPlayPaceBall: 84,
                abilityToPlaySpinBall: 78,
                battingAggresion: 75,
                isWicketKeeper: false,
                spinAbility: 10,
                paceAbility: 0,
                currentMatch: {
                    run: 0,
                    ball: 0,
                    isBatting: 0,
                    b_run: 0,
                    b_ball: 0,
                    b_wkt: 0,
                }
            },
            {
                id: 11,
                name: "Mohammed Siraj",
                abilityToPlayPaceBall: 84,
                abilityToPlaySpinBall: 78,
                battingAggresion: 75,
                isWicketKeeper: false,
                spinAbility: 10,
                paceAbility: 0,
                currentMatch: {
                    run: 0,
                    ball: 0,
                    isBatting: 0,
                    b_run: 0,
                    b_ball: 0,
                    b_wkt: 0,
                }
            }
        ];
        setTeamTwo(teamTwoData);
    }, []);

    const randomNumberGenerator = (maxValue) => {
        return Math.floor(Math.random() * maxValue);
    };
    const speechHandler = (data) => {
        window.speechSynthesis.cancel();
        msg.text = data;
        let voices = speechSynthesis.getVoices();
        let random = randomNumberGenerator(20) + 1;
        if (voices) {
            switch (random) {
                case 1:
                case 2:
                case 5:
                    msg.voice = voices[random];
                    break;
                case 3:
                    msg.voice = voices[random * 2];
                    break;
                case 4:
                    msg.voice = voices[random * 2 + 2];
                    break;
                default:
                    break;
            }
        }
        // msg.lang = 'bn-BD'
        window.speechSynthesis.speak(msg);
    };
    const ballByBallCommentry = (batsman, runOrOutType, isRun, nonStriker) => {
        let data = isRun && runOrOutType === 6 ? 5 : runOrOutType;
        let message = "";

        let listTobeUsed = isRun ? runVoice : outVoice;
        let randomNumber = randomNumberGenerator(20);
        message = listTobeUsed[data][randomNumber]
            .replace(/\$\$\$\$\$/g, batsman)
            .replace(/#####/g, nonStriker);
        speechHandler(message);
    };
    const nextBatsManIndex = (players) => {
        for (let index = 0; index < players.length; index++) {
            if (players[index].currentMatch.isBatting === 0) {
                console.log("nextBatsman->", players[index].name);
                return index;
            }
        }
    };
    const getStrickRate = (matchData) => {
        return matchData && matchData.ball > 0
            ? ((matchData.run * 100) / matchData.ball).toFixed(2)
            : "";
    };
    const getRunPerOver = (matchData) => {
        return matchData && matchData.currentMatch.b_ball > 0
            ? ((matchData.currentMatch.b_run * 6) / matchData.currentMatch.b_ball).toFixed(2)
            : "";
    };

    const getOver = (ball) => {
        let over = Math.floor(ball / 6);
        let ballInCurrentOver = ball - over * 6;
        return over + "." + ballInCurrentOver;
    };
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const chooseTeam = (teamSelected, isOwnTeam) => {
        let match = JSON.parse(JSON.stringify(matchDetails));
        let teamData = {};
        teamData.id = teamSelected.id;
        teamData.ballCompleted = 0;
        teamData.wicketTaken = 0;
        teamData.totalRun = 0;
        teamData.currentStrikerIndex = 0;
        teamData.currentNonStrikerIndex = 1;
        teamData.currentBowlerIndex = 10;
        teamData.teamName = teamSelected.name;
        teamData.playerList = playerListForNation[teamSelected.name];
        isOwnTeam ? setTeamOne(teamData) : setTeamTwo(teamData);
        console.log(
            (isOwnTeam ? "Own" : "Opponent") + "Team Selected =>" + teamData.teamName
        );
        match.status++;
        setMatchDetails(match);
    };
    const chooseLocation = (locationSelected) => {
        console.log("loc->", locationSelected.name);
        console.log("stadium->", stadiums[locationSelected.name]);
        setMatchLocation(locationSelected.name);
        let match = JSON.parse(JSON.stringify(matchDetails));
        match.status++;
        setMatchDetails(match);
    };
    const ChooseStadium = (stadiumData) => {
        let match = JSON.parse(JSON.stringify(matchDetails));
        match.status = match.status + 2 //temporary
        match.stadium = {
            name: stadiumData.name,
            seat: stadiumData.capacity,
            location: stadiumData.location,
            battingCondition: stadiumData.battingCondition,
            betterFor: stadiumData.betterFor,
            outfieldType: stadiumData.outfieldType,
        };
        setMatchDetails(match);
    }
    const flipCoin = async (data) => {
        let result = Math.random() < 0.5 ? 1 : 0;
        let match = JSON.parse(JSON.stringify(matchDetails));
        speechHandler(
            teamOne.teamName + " has choose " + (data ? "money" : "crown")
        );
        await delay(3000);
        speechHandler(
            "Its " +
            (result ? "money, " : "crown, ") +
            (result === data ? teamOne.teamName : teamTwo.teamName) +
            " has won the toss"
        );
        setTossWinner(result === data);
        match.status++
        setMatchDetails(match);
        await delay(3000);
        if (result !== data) {
            speechHandler(
                teamTwo.teamName +
                " chose to" +
                (aiChooseBatting ? "bat" : "ball") +
                " first"
            );
        }
        console.log(match)
        console.log(teamOne)
        console.log(teamTwo)
    };
    const chooseBattingOrder = (data, wasForced) => {
        let match = JSON.parse(JSON.stringify(matchDetails));
        let teamOneData = JSON.parse(JSON.stringify(teamOne));
        let teamTwoData = JSON.parse(JSON.stringify(teamTwo));
        if (data) {
            setTeamOne(teamTwoData);
            setTeamTwo(teamOneData);
        }
        setIsPlayerBattingFirst(!data)
        match.playerAction = data;
        match.status++;
        setMatchDetails(match);
        console.log('setting select bolwer to', !!data)
        setSelectBowler(!!data)
        if (!wasForced) {
            speechHandler(
                teamOneData.teamName + " chose to" + (data ? "ball" : "bat") + " first"
            );
        }
    };
    const aiChooseBatting = () => {
        return matchDetails.stadium?.pitchType[0] >
            matchDetails.stadium?.pitchType[1]
            ? true
            : false;
    };
    const selectNextBowler = (index) => {
        let team = JSON.parse(JSON.stringify(matchDetails.status === matchStatusEnum.TeamOneBat ? teamTwo : teamOne))
        team.currentBowlerIndex = index - 1
        matchDetails.status === matchStatusEnum.TeamOneBat ? setTeamTwo(team) : setTeamOne(team)
        setSelectBowler(false)
    }
    const aiChooseNextBowler = () => {
        let team = JSON.parse(JSON.stringify(matchDetails.status === matchStatusEnum.TeamOneBat ? teamTwo : teamOne))
        team.currentBowlerIndex = Math.floor(randomNumberGenerator(11))
        console.log('AI chose=>', team.currentBowlerIndex)
        matchDetails.status === matchStatusEnum.TeamOneBat ? setTeamTwo(team) : setTeamOne(team)
    }
    const nextBallAction = (actionType) => {
        let match = JSON.parse(JSON.stringify(matchDetails));
        // let isBatting = (match.status === matchStatusEnum.TeamOneBat && tossWinner) || (!tossWinner && match.status === matchStatusEnum.TeamTwoBat)
        if (
            match.status === matchStatusEnum.TeamOneBat ||
            match.status === matchStatusEnum.TeamTwoBat
        ) {
            let runScored;
            let team, teamBowling;
            if (match.status === matchStatusEnum.TeamOneBat) {
                team = JSON.parse(JSON.stringify(teamOne))
                teamBowling = JSON.parse(JSON.stringify(teamTwo))
            } else {
                team = JSON.parse(JSON.stringify(teamTwo))
                teamBowling = JSON.parse(JSON.stringify(teamOne))
            }

            // let runTillLastBall = team.totalRun
            if (match.totalBall === team.ballCompleted || team.wicketTaken === 10) {
                // setNote('MatchOver')
                return;
            } else {
                team.ballCompleted++;
                team.playerList[team.currentStrikerIndex].currentMatch.ball++;
                teamBowling.playerList[teamBowling.currentBowlerIndex].currentMatch.b_ball++;
                // let remainingWicket = 10 - team.wicketTaken
                // let isBatting = (match.status === matchStatusEnum.TeamOneBat && tossWinner) || (!tossWinner && match.status === matchStatusEnum.TeamTwoBat)
                let seedBox = []
                switch (actionType) {
                    case battingAction.defence:
                    case bowlingAction.saveRun:
                        seedBox = [60, 30, 5, 1, 2, 1, 1]
                        break
                    case battingAction.normal:
                    case bowlingAction.normal:
                        seedBox = [30, 30, 15, 5, 10, 6, 4]
                        break
                    case battingAction.hitBig:
                    case bowlingAction.tryForWicket:
                        seedBox = [20, 25, 12, 3, 20, 10, 10]
                        break
                    default:
                        seedBox = [30, 30, 15, 5, 10, 6, 4]
                        break
                }
                let MaxSeed = seedBox.reduce((sum, currentNumber) => sum + currentNumber, 0);
                let randomNumber = randomNumberGenerator(MaxSeed);
                if (randomNumber <= seedBox[6]) {
                    runScored = -1;
                    team.wicketTaken++;
                    team.playerList[team.currentStrikerIndex].currentMatch.isBatting = -1;
                    let outTypeRandomizer = randomNumberGenerator(100);
                    let outType;
                    if (outTypeRandomizer > 60) {
                        outType = 0;
                    } else if (outTypeRandomizer > 50) {
                        outType = 1;
                    } else if (outTypeRandomizer > 27) {
                        outType = 2;
                    } else if (outTypeRandomizer > 10) {
                        outType = 3;
                    } else if (outTypeRandomizer > 5) {
                        outType = 4;
                    } else if (outTypeRandomizer > 4) {
                        outType = 5;
                    } else if (outTypeRandomizer > 1) {
                        outType = 6;
                    }
                    if (outType !== 1) {
                        teamBowling.playerList[teamBowling.currentBowlerIndex].currentMatch.b_wkt++;
                    }
                    ballByBallCommentry(
                        team.playerList[team.currentStrikerIndex].name,
                        outType,
                        false,
                        team.playerList[team.currentNonStrikerIndex].name
                    );
                    if (team.wicketTaken === 10) {
                        if (match.status === matchStatusEnum.TeamOneBat) {
                            match.playerAction = match.playerAction === 0 ? 1 : 0;
                            speechHandler(
                                teamTwo.teamName +
                                " chose to" +
                                (aiChooseBatting ? "bat" : "ball") +
                                " first"
                            );
                            speechHandler(
                                teamTwo.teamName +
                                " must score " +
                                (1 + team.runScored) +
                                " runs to win"
                            );
                        } else {
                            setTeamTwo(team)
                            setTeamOne(teamBowling)
                            speechHandler(
                                teamTwo.teamName +
                                " lost the match by" +
                                (teamOne.runScored - team.runScored) +
                                " runs"
                            );
                        }
                        match.status++;
                        setMatchDetails(match);
                        return;
                    }
                    team.currentStrikerIndex = nextBatsManIndex(team.playerList);
                    team.playerList[team.currentStrikerIndex].currentMatch.isBatting = 1;
                } else if (randomNumber <= seedBox[6] + seedBox[0]) {
                    runScored = 0;
                    ballByBallCommentry(
                        team.playerList[team.currentStrikerIndex].name,
                        0,
                        true
                    );
                } else {
                    //run
                    if (randomNumber <= seedBox[6] + seedBox[0] + seedBox[1]) {
                        runScored = 1;
                    } else if (randomNumber <= seedBox[6] + seedBox[0] + seedBox[1] + seedBox[2]) {
                        runScored = 2;
                    } else if (randomNumber <= seedBox[6] + seedBox[0] + seedBox[1] + seedBox[2] + seedBox[3]) {
                        runScored = 3;
                    } else if (randomNumber <= seedBox[6] + seedBox[0] + seedBox[1] + seedBox[2] + seedBox[3] + seedBox[4]) {
                        runScored = 4;
                    } else {
                        runScored = 6;
                    }
                    ballByBallCommentry(
                        team.playerList[team.currentStrikerIndex].name,
                        runScored,
                        true
                    );
                    team.totalRun = team.totalRun + runScored;
                    team.playerList[team.currentStrikerIndex].currentMatch.run =
                        team.playerList[team.currentStrikerIndex].currentMatch.run +
                        runScored;
                    teamBowling.playerList[teamBowling.currentBowlerIndex].currentMatch.b_run =
                        teamBowling.playerList[teamBowling.currentBowlerIndex].currentMatch.b_run +
                        runScored;
                }
            }
            if (runScored === 1 || runScored === 3) {
                let temp = team.currentStrikerIndex;
                team.currentStrikerIndex = team.currentNonStrikerIndex;
                team.currentNonStrikerIndex = temp;
            }
            if (team.ballCompleted % 6 === 0) {
                let temp = team.currentStrikerIndex;
                team.currentStrikerIndex = team.currentNonStrikerIndex;
                team.currentNonStrikerIndex = temp;
            }
            setLastBallRun(runScored);
            if (match.status === matchStatusEnum.TeamOneBat) {
                setTeamOne(team)
                setTeamTwo(teamBowling)
            } else {
                setTeamOne(teamBowling)
                setTeamTwo(team)
            }
            if (team.ballCompleted === match.totalBall) {
                if (match.status === matchStatusEnum.TeamOneBat) {
                    match.playerAction = match.playerAction === 0 ? 1 : 0;
                }
                match.status++;
                setMatchDetails(match);
            }
            if (match.status === matchStatusEnum.TeamTwoBat) {
                if (teamOne.totalRun < teamTwo.totalRun) {
                    match.status++;
                    setMatchDetails(match);
                }
            }
            if (team.ballCompleted % 6 === 0) {
                if ((isPlayerBattingFirst && match.status === matchStatusEnum.TeamTwoBat) || (!isPlayerBattingFirst && match.status === matchStatusEnum.TeamOneBat)) {
                    setSelectBowler(true)
                } else {
                    aiChooseNextBowler()
                }
            }
        }
    };

    return (
        <div className="page-main-holder p-5">
            <div className="w-100">
                {matchDetails.status === matchStatusEnum.ChooseMatchType && (
                    <>
                        {Object.values(matchTypeList)?.map((data, j) => (
                            <div className="card p-2 m-3 stadium-box" key={j} onClick={() => ChooseStadium(data)}>
                                <div className="card-body">
                                    <h5 className="card-title mb-4">{data.over}</h5>
                                </div>
                            </div>
                        ))}
                    </>
                )}
                {(matchDetails.status === matchStatusEnum.ChooseOwnTeam ||
                    matchDetails.status === matchStatusEnum.ChooseOpponent ||
                    matchDetails.status === matchStatusEnum.ChooseMatchLocation) && (
                        <div className="text-center w-100">
                            <div className="font-size-40">
                                <Wave
                                    text={
                                        "Please Choose " +
                                        (matchDetails.status === matchStatusEnum.ChooseOwnTeam
                                            ? "Your Team"
                                            : matchDetails.status === matchStatusEnum.ChooseOpponent
                                                ? "Opponent Team"
                                                : "Match Location")
                                    }
                                    effect="verticalFadeIn"
                                    effectChange={2}
                                    effectDuration={1}
                                />
                            </div>
                            <div className="mt-4">
                                {
                                    <div className="container-fluid">
                                        {[0, 1, 2].map((d, i) => (
                                            <div className="d-flex justify-content-center" key={i}>
                                                {Object.values(countries)
                                                    ?.slice(d * 7, 7 + d * 7)
                                                    .map((data, j) => (
                                                        <div className="p-4" key={j}>
                                                            <div
                                                                className={
                                                                    matchDetails.status ===
                                                                        matchStatusEnum.ChooseOpponent &&
                                                                        teamOne.teamName === data.name
                                                                        ? "rounded flags round-img-disabled"
                                                                        : "rounded flags round-img-holder"
                                                                }
                                                                onClick={() =>
                                                                    matchDetails.status ===
                                                                        matchStatusEnum.ChooseMatchLocation
                                                                        ? chooseLocation(data)
                                                                        : matchDetails.status ===
                                                                            matchStatusEnum.ChooseOpponent &&
                                                                            teamOne.id === data.id
                                                                            ? null
                                                                            : chooseTeam(
                                                                                data,
                                                                                matchDetails.status ===
                                                                                matchStatusEnum.ChooseOwnTeam
                                                                            )
                                                                }
                                                            >
                                                                <img
                                                                    src={data.image}
                                                                    alt="flag"
                                                                    className="img-fluid round-img-border p-2"
                                                                />
                                                                <h3 className="mt-3 text-center">{data.name}</h3>
                                                            </div>
                                                        </div>
                                                    ))}
                                            </div>
                                        ))}
                                    </div>
                                }
                            </div>
                        </div>
                    )}
                {matchDetails.status === matchStatusEnum.ChooseStadium &&
                    matchLocation !== null && (
                        <div>
                            <div className="text-center w-100 mb-4">
                                <div className="font-size-40">
                                    Please Choose the Stadium
                                </div>
                            </div>
                            {[0, 1, 2].map((d, i) => (
                                <div className="d-flex justify-content-center" key={i}>
                                    {Object.values(stadiums[matchLocation])
                                        ?.slice(d * 5, 5 + d * 5)
                                        .map((data, j) => (
                                            <div className="card p-2 m-3 stadium-box" key={j} onClick={() => ChooseStadium(data)}>
                                                <div className="card-body">
                                                    <h5 className="card-title mb-4">{data.name}</h5>
                                                    <p className="card-text"><strong>Pitch Type : </strong>{data.pitchType}</p>
                                                    <p className="card-text"><strong>Location : </strong> {data.location}</p>
                                                    <p className="card-text"><strong>Capacity : </strong> {data.capacity}</p>
                                                    <p className="card-text"><strong>Inaugurated : </strong>{data.inaugurated}</p>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            ))}
                        </div>
                    )}
                {matchDetails.status === matchStatusEnum.TossTime && (
                    <div className="text-center">
                        <div className="font-size-40">
                            Toss:
                            <Wave
                                text="Please Choose Crown or Money"
                                effect="verticalFadeIn"
                                effectChange={2}
                                effectDuration={1}
                            />
                        </div>
                        <button
                            type="button"
                            className="rounded me-2"
                            onClick={() => flipCoin(0)}
                        >
                            <img src="./asset/img/icon/crown.png" alt="crown" />
                        </button>
                        <button
                            type="button"
                            className="rounded ms-2"
                            onClick={() => flipCoin(1)}
                        >
                            <img src="../asset/img/icon/money.png" alt="money" />
                        </button>
                    </div>
                )}
                {matchDetails.status === matchStatusEnum.TossResult && (
                    <div className="text-center">
                        <div className="font-size-40">
                            <Wave
                                text={
                                    tossWinner ? "You have won the toss" : "You lost the toss"
                                }
                                effect="stretch"
                                effectChange={2}
                            />
                        </div>
                        {tossWinner && (
                            <>
                                <p className="font-size-40">what will you do first</p>
                                <button
                                    type="button"
                                    className="me-2"
                                    onClick={() => chooseBattingOrder(0, false)}
                                >
                                    <img src="./asset/img/icon/cricket-bat.png" alt="bat" />
                                </button>
                                <button
                                    type="button"
                                    className="ms-2"
                                    onClick={() => chooseBattingOrder(1, false)}
                                >
                                    <img src="../asset/img/icon/cricket-ball.png" alt="ball" />
                                </button>
                            </>
                        )}
                        {!tossWinner && (
                            <>
                                <p className="font-size-40">
                                    Your Opponent Choose to {aiChooseBatting ? "Bat" : "Ball"}{" "}
                                    first
                                </p>
                                <p className="font-size-40">
                                    You must select {!aiChooseBatting ? "Bat" : "Ball"}
                                </p>
                                <button
                                    type="button"
                                    className="me-2"
                                    onClick={() => chooseBattingOrder(0, true)}
                                    disabled={aiChooseBatting ? true : false}
                                >
                                    <img
                                        src="./asset/img/icon/cricket-bat.png"
                                        alt="bat"
                                        className={aiChooseBatting ? "opacity-25" : "opacity-100"}
                                    />
                                </button>
                                <button
                                    type="button"
                                    className="ms-2"
                                    onClick={() => chooseBattingOrder(1, true)}
                                    disabled={aiChooseBatting ? false : true}
                                >
                                    <img
                                        src="../asset/img/icon/cricket-ball.png"
                                        alt="ball"
                                        className={aiChooseBatting ? "opacity-100" : "opacity-25"}
                                    />
                                </button>
                            </>
                        )}
                    </div>
                )}
                {matchDetails.status > matchStatusEnum.TossResult && (
                    <>
                        {selectBowler && (isPlayerBattingFirst ? matchDetails.status === matchStatusEnum.TeamTwoBat : matchDetails.status === matchStatusEnum.TeamOneBat) && (
                            <div className="d-flex justify-content-center">
                                {teamTwo.playerList?.filter((filterData, filterIndex) => matchDetails.totalBall !== 5 * filterData.currentMatch?.b_ball && teamTwo.currentBowlerIndex + 1 !== filterData.id && !filterData.isWicketKeeper).map((data, i) => (
                                    <div className="card p-2 m-3 bowler-box" key={i} onClick={() => selectNextBowler(data.id)}>
                                        <p className="card-text">{data.name}</p>
                                        <p className="card-text">{data.spinAbility > data.paceAbility ? 'Spinner' : 'Pacer'}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                        {!selectBowler && (
                            <div className="d-flex">
                                {isPlayerBattingFirst && matchDetails.status === matchStatusEnum.TeamOneBat && (
                                    <>
                                        <button
                                            type="button"
                                            className="btn btn-darkteal btn-block mt-4 me-3"
                                            onClick={() => nextBallAction(battingAction.hitBig)}
                                        >
                                            Hit Aggrisively
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-darkteal btn-block mt-4"
                                            onClick={() => nextBallAction(battingAction.normal)}
                                        >
                                            Hit Normally
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-darkteal btn-block mt-4 ms-3"
                                            onClick={() => nextBallAction(battingAction.defence)}
                                        >
                                            Next Difensively
                                        </button>
                                    </>
                                )}
                                {isPlayerBattingFirst && matchDetails.status === matchStatusEnum.TeamTwoBat && (
                                    <>
                                        <button
                                            type="button"
                                            className="btn btn-darkteal btn-block mt-4 me-3"
                                            onClick={() => nextBallAction(bowlingAction.tryForWicket)}
                                        >
                                            Try to Take wicket
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-darkteal btn-block mt-4"
                                            onClick={() => nextBallAction(bowlingAction.normal)}
                                        >
                                            Try Regular Ball
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-darkteal btn-block mt-4 ms-3"
                                            onClick={() => nextBallAction(bowlingAction.saveRun)}
                                        >
                                            Try to save run
                                        </button>
                                    </>
                                )}
                            </div>
                        )}
                        {console.log('test,', selectBowler, '-', isPlayerBattingFirst, '-', matchDetails.status)}
                        <div className="row mt-3">
                            {matchDetails.status > matchStatusEnum.TossResult && (
                                <>
                                    <div className="col-sm-6 border">
                                        <div className="row font-size-20">
                                            <div className="col-sm-4">
                                                {teamOne?.teamName} : {teamOne?.totalRun}/
                                                {teamOne?.wicketTaken}
                                            </div>
                                            <div className="col-sm-2"></div>
                                            <div className="col-sm-3">
                                                Over : {getOver(teamOne?.ballCompleted)}
                                            </div>
                                            <div className="col-sm-3">
                                                Last Ball:{" "}
                                                {lastBallRun === -2 ||
                                                    matchDetails.status > matchStatusEnum.TeamTwoBat
                                                    ? ""
                                                    : lastBallRun === -1
                                                        ? "WKT"
                                                        : lastBallRun}
                                            </div>
                                        </div>
                                        <table className="table overflow-auto">
                                            <thead>
                                                <tr>
                                                    <th>Batsman</th>
                                                    <th>Run</th>
                                                    <th>Ball</th>
                                                    <th>Strk Rate</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {teamOne.playerList?.map((data, i) => (
                                                    <tr
                                                        className={
                                                            data.currentMatch.isBatting === 1
                                                                ? "mb-1 table-success"
                                                                : data.currentMatch.isBatting === -1
                                                                    ? "mb-1 table-danger"
                                                                    : "mb-1"
                                                        }
                                                        key={i}
                                                    >
                                                        <td className="">{data.name}</td>
                                                        <td className="">
                                                            {data.currentMatch.run}
                                                            {teamOne.currentStrikerIndex === data.id - 1
                                                                ? "*"
                                                                : ""}
                                                        </td>
                                                        <td className="">{data.currentMatch.ball}</td>
                                                        <td className="">
                                                            {getStrickRate(data.currentMatch)}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="col-sm-6 border">
                                        <div className="row font-size-20">
                                            <div className="col-sm-4">
                                                {teamOne?.teamName} : {teamOne?.totalRun}/
                                                {teamOne?.wicketTaken}
                                            </div>
                                            <div className="col-sm-2"></div>
                                            <div className="col-sm-3">
                                                Over : {getOver(teamOne?.ballCompleted)}
                                            </div>
                                            <div className="col-sm-3">
                                                Last Ball:{" "}
                                                {lastBallRun === -2 ||
                                                    matchDetails.status > matchStatusEnum.TeamTwoBat
                                                    ? ""
                                                    : lastBallRun === -1
                                                        ? "WKT"
                                                        : lastBallRun}
                                            </div>
                                        </div>
                                        <table className="table overflow-auto">
                                            <thead>
                                                <tr>
                                                    <th>Bowler</th>
                                                    <th>Over</th>
                                                    <th>Run</th>
                                                    <th>Wicket</th>
                                                    <th>Run/over</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {teamTwo.playerList?.map((data, i) => (
                                                    <tr
                                                        className={
                                                            data.id === teamTwo.currentBowlerIndex + 1
                                                                ? "mb-1 table-success"
                                                                : data.isWicketKeeper
                                                                    ? "mb-1 table-danger"
                                                                    : "mb-1"
                                                        }
                                                        key={i}
                                                    >
                                                        <td className="">{data.name}</td>
                                                        <td className="">
                                                            {getOver(data.currentMatch?.b_ball)}
                                                            {teamOne.currentStrikerIndex === data.id - 1
                                                                ? "*"
                                                                : ""}
                                                        </td>
                                                        <td className="">{data.currentMatch.b_run}</td>
                                                        <td className="">{data.currentMatch.b_wkt}</td>
                                                        <td className="">
                                                            {getRunPerOver(data)}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </>
                            )}
                            {/* ........................................................ */}
                            {matchDetails.status > matchStatusEnum.TeamOneBat && (
                                <div className="col-sm-6 border">
                                    <div className="row font-size-20">
                                        <div className="col-sm-4">
                                            {teamTwo?.teamName} : {teamTwo?.totalRun}/
                                            {teamTwo?.wicketTaken}
                                        </div>
                                        <div className="col-sm-2"></div>
                                        <div className="col-sm-3">
                                            Over : {getOver(teamTwo?.ballCompleted)}
                                        </div>
                                        <div className="col-sm-3">
                                            Last Ball:{" "}
                                            {lastBallRun === -2
                                                ? ""
                                                : lastBallRun === -2
                                                    ? "WKT"
                                                    : lastBallRun}
                                        </div>
                                    </div>
                                    <table className="table overflow-auto">
                                        <thead>
                                            <tr>
                                                <th>Batsman</th>
                                                <th>Run</th>
                                                <th>Ball</th>
                                                <th>Strk Rate</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {teamTwo.playerList?.map((data, i) => (
                                                <tr
                                                    className={
                                                        data.currentMatch.isBatting === 1
                                                            ? "mb-1 table-success"
                                                            : data.currentMatch.isBatting === -1
                                                                ? "mb-1 table-danger"
                                                                : "mb-1"
                                                    }
                                                    key={i}
                                                >
                                                    <td className="">{data.name}</td>
                                                    <td className="">
                                                        {data.currentMatch.run}
                                                        {teamTwo.currentStrikerIndex === data.id - 1
                                                            ? "*"
                                                            : ""}
                                                    </td>
                                                    <td className="">{data.currentMatch.ball}</td>
                                                    <td className="">
                                                        {getStrickRate(data.currentMatch)}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    </>
                )}
            </div>

        </div>
    );
};

export default GamePage;
