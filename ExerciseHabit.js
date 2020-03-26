class ExerciseHabit extends Habit {
    constructor() {
        let level = [
            "is a serious athlete. She exercised vigorously.",
            "did a high intensity workout.",
            "went for a jog.",
            "did a light workout.",
            "was somewhat active today but didn't workout.",
            "was sedentary today, she didn't do a lot of moving if she didn't have to.",
            "lazed about all day, doing her best to avoid moving and other strenuous tasks."
        ];
        super(400, level);
    }

    // @Override
    lev(mod, girl) {
        let lev = Math.floor(this.prob / 100);

        if (((Math.random() * 100) - mod) < (this.prob % 100)) {
            lev++;
            this.prob += 8;
        } else {
            this.prob -= (Math.floor(girl.will / 500)) * 2;
        }

        lev = (lev >= this.level.length) ? this.level.length - 1 : lev;
        lev = (lev < 0) ? 0 : lev;
        this.prob = this.prob < 1 ? this.prob = 1 : this.prob;
        this.prob = (this.prob > this.level.length * 100) ? this.level.length * 100 : this.prob;

        return lev;
    }

    do(mod, girl) {
        let lev = super.lev(mod, girl);

        let text = "";

        let lowered = false;

        if (lev === 0 && girl.fitnessLevel() > 1) {
            lev++;
            lowered = true;
        }
        if (lev === 1 && girl.fitnessLevel() > 2) {
            lev++;
            lowered = true;
        }
        if (lev === 2 && girl.fitnessLevel() > 3) {
            lev++;
            lowered = true;
        }

        if (lowered) {
            text += girl.name + " was not in good enough shape to do the level of physical activity she'd intended today. Instead, ";
        }

        girl.changeFitness((lev - 4) * 3);

        // Remove calories from exercise
        girl.calories -= (660 - (lev * 110));

        return text + girl.name + " " + this.level[lev];
    }
}