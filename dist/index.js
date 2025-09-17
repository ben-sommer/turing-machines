import leftAlignedCounter from "./programs/leftAlignedCounter.js";
const program = leftAlignedCounter;
let tape = Array(8).fill(null);
let currentLocation = 0;
let currentState = "A";
const showTape = () => {
    console.log(`${currentState}: ${["X", ...tape, "X"]
        .map((item) => item ?? "E")
        .map((item, index) => index - 1 === currentLocation ? `[${item}]` : item)}`);
};
showTape();
setInterval(() => {
    let input;
    if (currentLocation >= tape.length || currentLocation < 0) {
        input = "X";
    }
    else {
        input = tape[currentLocation] ?? "E";
    }
    const instruction = program[currentState][input];
    if (!instruction)
        throw new Error(`No instruction found for ${currentState}, ${input}`);
    switch (instruction.writeAction) {
        case "D":
            tape[currentLocation] = null;
            break;
        case "W0":
            tape[currentLocation] = 0;
            break;
        case "W1":
            tape[currentLocation] = 1;
            break;
    }
    switch (instruction.moveAction) {
        case "+":
            currentLocation++;
            break;
        case "-":
            currentLocation--;
            break;
    }
    currentState = instruction.nextState;
    if (currentState === "H") {
        throw new Error("Program halted!");
    }
    showTape();
}, 1000);
//# sourceMappingURL=index.js.map