class Habit {
    constructor(prob, level) {
        this.prob = prob;
        this.level = level;
    }

    /**
     * Calculates what level the habit happens at.
     *
     * @param mod number The habit modifier.
     * @param girl Person object.
     * @returns number The habit level.
     */
    lev(mod, girl) {
        let lev = Math.floor(this.prob / 100);

        if (((Math.random() * 100) - mod) < (this.prob % 100)) {
            lev++;
            this.prob += (Math.ceil(girl.addiction / 500)) * 2;
        } else {
            this.prob -= (5 - Math.floor(girl.will / 500)) * 2;
        }

        lev = (lev >= this.level.length) ? this.level.length - 1 : lev;
        lev = (lev < 0) ? 0 : lev;
        this.prob = this.prob < 1 ? this.prob = 1 : this.prob;
        this.prob = (this.prob > this.level.length * 100) ? this.level.length * 100 : this.prob;

        return lev;
    }
}