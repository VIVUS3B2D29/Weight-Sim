class MealHabit extends Habit {
    constructor() {
        let level = [
            "is on a strict diet, she ate very little during meals.",
            "ate very healthy meals.",
            "did not eat especially healthy meals.",
            "got fast food for lunch.",
            "ate fast food for both breakfast and dinner.",
            "ate fast food for every meal."
        ];
        super(200, level);
    }

    do(mod, girl) {
        let lev = super.lev(mod, girl);

        // Add calories form meal
        girl.calories += ((lev * 120) + 250 + (Math.random() * 50)) * 3;
        // Change addiction
        girl.changeAddiction((lev - 2) * 3);

        return girl.name + " " + this.level[lev];
    }
}