class View {
    updateInfo(girl) {
        $("#name").html(girl.name);
        $("#size").html(girl.sizeText());
        let weight = parseFloat(girl.weight).toFixed(2);
        $("#weight").html("Weight: " + weight);
        let will =  (1 - (girl.will / 2500)).toFixed(3) * 100 + "%";
        $("#willText").html(girl.willText());
        let addiction = (girl.addiction / 2500).toFixed(3) * 100 + "%";
        $("#addictionText").html(girl.addictionText());
        $("#fitnessText").html(girl.fitnessText());
    }

    updateHabits(girl) {
        $("#mealHabit").html("Meal Habit (" + Math.floor(girl.habits["meal"].prob / 100) + ") <br>->Progress: " + (girl.habits["meal"].prob % 100) + "%");
        $("#snackHabit").html("Snack Habit (" + Math.floor(girl.habits["snack"].prob / 100) + ") <br>->Progress: " + (girl.habits["snack"].prob % 100) + "%");
        $("#exerciseHabit").html("Activity Habit (" + Math.floor(girl.habits["exercise"].prob / 100) + ") <br>->Progress: " + (girl.habits["exercise"].prob % 100) + "%");
    }

    updateDay(day) {
        $("#day").html("Day " + day);
    }

    updateSummary(text) {
        let out = "";
        for(let i = 0; i < text.length; i++) {
            out += "<p>" + text[i] + "</p>";
        }
        $("#summary").html(out);
    }
}