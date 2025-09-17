// import leftAlignedCounter from "./programs/leftAlignedCounter.js";
import downCounter from "./programs/downCounter.js";

export type Program = {
  [currentState: string]: {
    [input: string]: {
      writeAction: "W1" | "W0" | "D" | null;
      moveAction: "+" | "-" | null;
      nextState: string;
    };
  };
};

const program: Program = downCounter;

let tape: (0 | 1 | null)[] = [0, 0, 0, 0, 0, 1, 0, 1];
// let tape = Array(8).fill(null);
let currentLocation = 0;
let currentState: keyof typeof program = "A";

const showTape = () => {
  console.log(
    `${currentState}: ${["X", ...tape, "X"]
      .map((item) => item ?? "E")
      .map((item, index) =>
        index - 1 === currentLocation ? `[${item}]` : item
      )}`
  );
};

showTape();

setInterval(() => {
  let input: "E" | "X" | 1 | 0;

  if (currentLocation >= tape.length || currentLocation < 0) {
    input = "X";
  } else {
    input = tape[currentLocation] ?? "E";
  }

  const instruction = program[currentState]![input];

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
