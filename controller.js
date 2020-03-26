let girl;
let addictionEvents;
let view;

let day = 0;

$("#game").hide();

$("#start").on("click", function () {
    let name = $("#girlName").val();
    let will = 4 - parseInt($("#will").val());
    let addiction = parseInt($("#addiction").val());
    let startWeight = parseInt($("#startWeight").val());
    let fitness = 4 - parseInt($("#fitness").val());

    girl = new Person(name, startWeight, (will * 500) + 250, (addiction * 500) + 250, (fitness * 500) + 250);
    addictionEvents = new AddictionEvents();
    view = new View();
    runDay();
    $("#inputs").hide();
    $("#game").show();
});

$("#nextDay").on("click", function () {
    runDay();
});

$("#nextWeek").on("click", function () {
    let end = day + 7;
    let week = setInterval(function () {
        runDay();
        if (day >= end) {
            clearInterval(week);
        }
    }, 100);
});

$("#nextMonth").on("click", function () {
    let end = day + 30;
    let month = setInterval(function () {
        runDay();
        if (day >= end) {
            clearInterval(month);
        }
    }, 100);
});

/**
 * Ends the current day, runs metabolism.
 */
function endDay() {
    day++;
    girl.metabolize();
    console.log("--- Day " + day + " ---");
    console.log(girl.getBMI());
}

function runDay() {
    console.log(girl);
    let text = [];
    text[0] = girl.habits["snack"].do(0, girl);
    text[1] = girl.habits["meal"].do(60, girl);
    text[2] = girl.habits["exercise"].do(0, girl);
    text[3] = addictionEvents.do(girl);
    console.log(text);
    view.updateInfo(girl);
    view.updateHabits(girl);
    view.updateDay(day);
    view.updateSummary(text);
    endDay();
}