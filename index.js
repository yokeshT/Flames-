const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the Boy's Name: ", function (boyName) {

    rl.question("Enter the Girl's Name: ", function (girlName) {

        console.log("\n========== FLAMES CALCULATION ==========\n");

        // Remove spaces and convert to lowercase
        let boy = boyName.toLowerCase().replace(/\s+/g, "");
        let girl = girlName.toLowerCase().replace(/\s+/g, "");

        console.log("Boy's Name  :", boy);
        console.log("Girl's Name :", girl);

        let boyArr = boy.split("");
        let girlArr = girl.split("");

        // Remove common letters
        for (let i = 0; i < boyArr.length; i++) {
            let index = girlArr.indexOf(boyArr[i]);

            if (index !== -1) {
                console.log(`Matching letter removed: '${boyArr[i]}'`);

                boyArr[i] = "";
                girlArr[index] = "";
            }
        }

        // Remaining letters
        let remainingBoy = boyArr.join("");
        let remainingGirl = girlArr.join("");

        console.log("\nRemaining letters in Boy's Name  :", remainingBoy);
        console.log("Remaining letters in Girl's Name :", remainingGirl);

        let count = remainingBoy.length + remainingGirl.length;

        console.log("\nTotal Remaining Letters =", count);

        let flames = ["F", "L", "A", "M", "E", "S"];

        console.log("\nFLAMES Elimination Steps:");

        while (flames.length > 1) {

            let index = (count % flames.length) - 1;

            if (index >= 0) {
                console.log(
                    `Count ${count} -> Remove '${flames[index]}'`
                );
                flames.splice(index, 1);
            } else {
                console.log(
                    `Count ${count} -> Remove '${flames[flames.length - 1]}'`
                );
                flames.pop();
            }

            console.log("Remaining:", flames.join(" "));
        }

        console.log("\n========== RESULT ==========");

        switch (flames[0]) {
            case "F":
                console.log("F = Friends ❤️");
                break;
            case "L":
                console.log("L = Lovers ❤️");
                break;
            case "A":
                console.log("A = Affection 😊");
                break;
            case "M":
                console.log("M = Marriage 💍");
                break;
            case "E":
                console.log("E = Enemies 😡");
                break;
            case "S":
                console.log("S = Siblings 👨‍👩‍👧");
                break;
        }

        rl.close();
    });

});
