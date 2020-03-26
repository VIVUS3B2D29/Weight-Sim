class AddictionEvents {
    constructor() {
        // Event text
        this.events =
            [
                [],
                // Slight
                [
                    function (girl) {
                        girl.calories += 585;
                        girl.changeAddiction(10);
                        return "Someone left out a few boxes of donuts at " + girl.name + "'s office today. Somehow she just can't bring herself stop at only one.";
                    },
                    function (girl) {
                        girl.calories += 570;
                        girl.changeAddiction(10);
                        return girl.name + " woke up late at night to her stomach growling. It took two slices of left over pizza to quiet it down.";
                    },
                    function (girl) {
                        girl.calories += 500;
                        girl.changeAddiction(10);
                        return girl.name + " overate during lunch. Everything just tasted too good to stop! She basically had no choice but to get seconds.";
                    }
                ],
                // Moderate
                [
                    function (girl) {
                        girl.calories += 1170;
                        girl.changeAddiction(20);
                        return "Someone left out a few boxes of donuts at " + girl.name + "'s office today. At first " + girl.name + " only took one. But as the day wore on and most of the donuts remained uneaten, she couldn't help but pop another one of the delicious pastries into her mouth whenever she walked past. By the end of the day, she was feeling quite full having eaten half a dozen donuts... or so.";
                    },
                    function (girl) {
                        girl.calories += 1140;
                        girl.changeAddiction(20);
                        return girl.name + " woke up late at night to her stomach growling. It took four slices of left over pizza to quiet it down. Funny, once eating four slices of pizza would have left her stuffed but tonight she was almost hungry enough for a fifth slice.";
                    },
                    function (girl) {
                        girl.calories += 1000;
                        girl.changeAddiction(20);
                        return girl.name + " definitely overate during lunch. "  + girl.name + " knew she didn't need an extra-large milkshake with extra whipped cream and sprinkles but she couldn't bring herself to refuse.";
                    }
                ],
                // Severe
                [
                    function (girl) {
                        girl.calories += 1755;
                        girl.changeAddiction(30);
                        return girl.name + " needs to find whoever keeps bringing in boxes of donuts and put a stop to it. Its too much to endure, walking by those delectable treats so many times a day. Fortunately, " + girl.name + " easily solves this problem by simply taking an entire box back to her desk when she thinks no one is looking. Problem solved! Now if only she could find a solution that didn't leave her too full to move for the rest of the morning...";
                    },
                    function (girl) {
                        girl.calories += 1710;
                        girl.changeAddiction(30);
                        return girl.name + " woke up late at night with a sharp pang of hunger. She'd devoured more than half of a left over family-sized pizza before her hunger abated enough to let her go back to bed. She drifted off to sleep with a comfortable feeling of fullness.";
                    },
                    function (girl) {
                        girl.calories += 1500;
                        girl.changeAddiction(30);
                        return girl.name + " stuffed herself during lunch. It was like she couldn't stand to live without a constant stream of food entering her mouth. After such an enormous binge, standing was a much more arduous task than usual.";
                    }
                ],
                // Extreme
                [
                    function (girl) {
                        girl.calories += 2340;
                        girl.changeAddiction(40);
                        return "At this point, " + girl.name + " figures the boxes of office donuts must be intended for her. She gives her coworkers an hour to take what they will and then sneaks all of the remaining donuts back to her desk. Having eaten over a dozen donuts, she really doesn't need to go out for lunch too, she's already stuffed. Of course she still does, but it's a lot harder for her to justify it to herself.";
                    },
                    function (girl) {
                        girl.calories += 2280;
                        girl.changeAddiction(40);
                        return girl.name + " woke up late at night with a gnawing hunger. She heated up one of the family-sized frozen pizzas she kept on hand in case of just such emergencies. She hardly waited for it to cool before shoving slice after slice into her mouth, her greedy belly demanding she eat more until finally her stomach felt almost unbearably tight and not a spec of the pizza remained. " + girl.name + " drifted off to sleep in the warm haze that accompanies being utterly stuffed.";
                    },
                    function (girl) {
                        girl.calories += 2000;
                        girl.changeAddiction(40);
                        return girl.name + " gorged herself at lunch. She ate until she was beyond stuffed, until her belly was completely distended and she in too much pain to continue. It took half an hour for her to recover enough to even consider an attempt at standing.";
                    }
                ]
            ];
    }

    do(girl) {
        let level = Math.floor(girl.addiction / 500); // i.e. 0-4 (0: doesn't exist 1: slight 2: moderate 3: serious 4: extreme)
        if (Math.random() * 5000 < girl.addiction && level > 0) {
            let item = Math.floor(Math.random() * this.events[level].length);
            return this.events[level][item](girl);
        }
        return "";
    }
}

/*
Event happen based on addiction. 1-499 causes [0] events 500-999 causes [1] events and so on
 */