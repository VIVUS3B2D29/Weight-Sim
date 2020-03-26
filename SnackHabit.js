class SnackHabit extends Habit {
    constructor() {
        let level = [
            "did not have any snacks.",
            "had a snack.",
            "had a few snacks.",
            "had many snacks.",
            "was snacking more often than not.",
            "snacked constantly, her belly was never empty.",
            "ate mindlessly all day."
        ];
        super(100, level);
    }

    do(mod, girl) {
        let lev = super.lev(mod, girl);

        // Add calories from snacking
        girl.calories += (100 + Math.random() * 100) * lev;
        // Change addiction
        if (lev < 2) {
            girl.changeAddiction(lev - 2);
        } else {
            girl.changeAddiction(lev - 1);
        }


        return girl.name + " " + this.level[lev];
    }
}