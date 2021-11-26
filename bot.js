let x = 0;
let y = 0;
let facePosition = "North";
let routeTableData = [];

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

function turnRoute(turn, keyword) {
    this.Turn = turn;
    this.Keyword = keyword;
}

const jobRKeyword = () => {
    if (facePosition == "North") {
        facePosition = "East";
        routeTableData.push(new turnRoute("East", "R"));
    } else if (facePosition == "East") {
        facePosition = "South";
        routeTableData.push(new turnRoute("South", "R"));
    } else if (facePosition == "South") {
        facePosition = "West";
        routeTableData.push(new turnRoute("West", "R"));
    } else if (facePosition == "West") {
        facePosition = "North";
        routeTableData.push(new turnRoute("North", "R"));
    }
};

const jobLKeyword = () => {
    if (facePosition == "North") {
        facePosition = "West";
        routeTableData.push(new turnRoute("West", "L"));
    } else if (facePosition == "West") {
        facePosition = "South";
        routeTableData.push(new turnRoute("South", "L"));
    } else if (facePosition == "South") {
        facePosition = "East";
        routeTableData.push(new turnRoute("East", "L"));
    } else if (facePosition == "East") {
        facePosition = "North";
        routeTableData.push(new turnRoute("North", "L"));
    }
};

const runCode = (code) => {
    const output = code.split(/([RL])|(W\d+)/g).filter(Boolean);

    output.forEach((key) => {
        switch (key) {
            case "R":
                jobRKeyword();
                break;
            case "L":
                jobLKeyword();
                break;
            default:
                let positionValue = parseInt(key.substring("1"));
                if (facePosition == "North") {
                    y += positionValue;
                } else if (facePosition == "East") {
                    x += positionValue;
                } else if (facePosition == "South") {
                    y -= positionValue;
                } else if (facePosition == "West") {
                    x -= positionValue;
                }
                break;
        }
    });
};

readline.question(`Enter the Code for the Bot 🤖 \n`, (code) => {
    console.log(`WALKING CODE - ${code}`);
    runCode(code);
    console.table(routeTableData);
    console.log(`Current Direction: ${facePosition}`);
    console.log(`Current Position is X: ${x} Y: ${y}`);
    console.log(`---------------------------------`);
    console.log(`X: ${x} Y: ${y} Direction: ${facePosition}`);
    readline.close();
});
