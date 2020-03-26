class Person {
    constructor(name, weight, will, addiction, fitness) {
        this.name = name;
        this.height = 66;
        this.weight = weight;
        this.addiction = addiction; // 1-2499. How quickly bad habits decay and how much food she eats.
        this.will = will; // 1-2499. how quickly bad habits form. Low number means slower gain of bad habits.
        this.fitness = fitness; // 1-2499. Determines the maximum amount of exercise she can do.

        this.setHabits();

        this.calories = 0;
    }

    changeWill(will) {
        this.will += will;
        if (this.will < 1) {
            this.will = 1;
        }
        if (this.will > 2499) {
            this.will = 2499;
        }
    }

    changeAddiction(addiction) {
        this.addiction += addiction;
        if (this.addiction < 1) {
            this.addiction = 1;
        }
        if (this.addiction > 2499) {
            this.addiction = 2499;
        }
    }

    changeFitness(fitness) {
        this.fitness += fitness;
        if (this.fitness < 500 && this.getBMI() > 23.5) {
            this.fitness = 500;
        } else if (this.fitness < 1000 && this.getBMI() > 29.5) {
            this.fitness = 1000;
        } else if (this.fitness < 1500 && this.getBMI() > 40.5) {
            this.fitness = 1500;
        } else if (this.fitness < 2000 && this.getBMI() > 45.5) {
            this.fitness = 2000;
        }

        if (this.fitness < 1) {
            this.fitness = 1;
        }
        if (this.fitness > 2499) {
            this.fitness = 2499;
        }
    }

    info() {
        console.log("->   size: " + this.size());
        console.log("->   weight: " + this.weight);
        console.log("->   addiction: " + this.addiction);
        console.log("->   MealHabit: " + this.habits["meal"].prob);
        console.log("->   SnackHabit: " + this.habits["snack"].prob);
        console.log("->   ExerciseHabit: " + this.habits["exercise"].prob);
    }

    metabolize() {
        this.calories -= this.getBMR();
        this.weight += (this.calories / 3500);
        this.calories = 0;
        if (this.weight < 100) {
            this.weight = 100;
        }
    }

    getBMR() {
        return (1457 + ((this.weight - 100) * 5.45));
    }

    setHabits() {
        this.habits = {
            "snack": new SnackHabit(),
            "meal": new MealHabit(),
            "exercise": new ExerciseHabit()
        };
    }

    getBMI() {
        return (703 * (this.weight) / Math.pow(this.height, 2)).toFixed(2);
    }

    size() {
        if (this.getBMI() < 17.5) {
            return "skinny";
        } else if (this.getBMI() < 19.5) {
            return "thin";
        } else if (this.getBMI() < 21.5) {
            return "slim";
        } else if (this.getBMI() < 23.5) {
            return "normal";
        } else if (this.getBMI() < 25.5) {
            return "curvy";
        } else if (this.getBMI() < 27.5) {
            return "chubby";
        } else if (this.getBMI() < 29.5) {
            return "overweight";
        } else if (this.getBMI() < 35.5) {
            return "fat";
        } else if (this.getBMI() < 40.5) {
            return "obese";
        } else if (this.getBMI() < 45.5) {
            return "very obese";
        } else { // if (this.getBMI() < 50.5)
            return "morbidly obese";
        }
    }

    willText() {
        if (this.will < 500) {
            return this.name + " is determined to lose weight.";
        } else if (this.will < 1000) {
            return  this.name + " wants to lose weight.";
        } else if (this.will < 1500) {
            return this.name + " would prefer to lose weight.";
        } else if (this.will < 2000) {
            return this.name + " does not watch her weight.";
        } else if (this.will < 2500) {
            return this.name + " doesn't mind carrying extra weight.";
        }
    }

    addictionText() {
        if (this.addiction < 500) {
            return this.name + " is not addicted to food.";
        } else if (this.addiction < 1000) {
            return  this.name + " is slightly addicted to food.";
        } else if (this.addiction < 1500) {
            return this.name + " is addicted to food.";
        } else if (this.addiction < 2000) {
            return this.name + " is very addicted to food.";
        } else if (this.addiction < 2500) {
            return this.name + " is extremely addicted to food.";
        }
    }

    sizeText() {
        if (this.getBMI() < 17.5) {
            return this.name + " is skinny an a rail. You can count her ribs. People who see her concave stomach and sharp jawline wonder if she eats at all.";
        } else if (this.getBMI() < 19.5) {
            return this.name + " is very thin. She doesn't have an ounce of fat on her. Her stomach is flat as a board.";
        } else if (this.getBMI() < 21.5) {
            return this.name + " is slim. She is thin without being bony and her stomach curves sightly outwards.";
        } else if (this.getBMI() < 23.5) {
            return this.name + " is a normal, healthy weight. No one would think to call her fat but they wouldn't call her thin either. She gets a slight muffin top when sitting.";
        } else if (this.getBMI() < 25.5) {
            return this.name + " could be described kindly as curvy and unkindly as chubby. She has the beginnings of a double chin and her belly pushes out her shirts a few extra inches.";
        } else if (this.getBMI() < 27.5) {
            return this.name + " is definitely chubby. Her belly is round and squishy. The extra weight she carries is evident all over her plush body and she has a distinct double chin.";
        } else if (this.getBMI() < 29.5) {
            return this.name + " is overweight. One might even go so far as to call her fat given her amble double chin, flabby belly and thick thighs.";
        } else if (this.getBMI() < 35.5) {
            return "There's no getting around it, " + this.name + " is fat. Her large, doughy belly hangs over her pants even when she tries her best to suck it in.";
        } else if (this.getBMI() < 40.5) {
            return this.name + " very fat. Her belly perpetually hangs well over her waist band.";
        } else if (this.getBMI() < 45.5) {
            return this.name + " is obese. Her belly is massive and many of her facial features are lost under layers of soft fat.";
        } else { // if (this.getBMI() >= 45.5)
            return this.name + " is morbidly obese. Her enormous belly hangs down to her thighs.";
        }
    }

    fitnessText() {
        if (this.fitnessLevel() === 0) {
            return this.name + " is in peak physical condition.";
        } else if (this.fitnessLevel() === 1) {
            return this.name + " is in good shape. No level of physical activity is beyond her.";
        } else if (this.fitnessLevel() === 2) {
            return this.name + " is in decent shape. She won't be running any marathons, but it takes a lot to wind her.";
        } else if (this.fitnessLevel() === 3) {
            return this.name + " is not in shape. Pushing herself beyond day to day activities quickly tires her.";
        } else { // if this.fitness > 2000
            return this.name + " is in terrible shape. Physical exertion as routine as walking up a flight of stairs leaves her gasping for breath.";
        }
    }

    fitnessLevel() {
        return Math.floor(this.fitness / 500);
    }
}