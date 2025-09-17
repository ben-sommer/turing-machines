import { Program } from "index";

export default {
  // Write a 1 in the first position
  A: {
    E: {
      writeAction: "W1",
      moveAction: null,
      nextState: "B",
    },
  },
  // Move to the right-most bit
  B: {
    0: {
      writeAction: null,
      moveAction: "+",
      nextState: "B",
    },
    1: {
      writeAction: null,
      moveAction: "+",
      nextState: "B",
    },
    X: {
      writeAction: null,
      moveAction: null,
      nextState: "H",
    },
    E: {
      writeAction: null,
      moveAction: "-",
      nextState: "C",
    },
  },
  // Add 1. If number of bits changes initiate right-shift of 1 else repeat.
  C: {
    0: {
      writeAction: "W1",
      moveAction: null,
      nextState: "B",
    },
    E: {
      writeAction: null,
      moveAction: null,
      nextState: "H",
    },
    1: {
      writeAction: "W0",
      moveAction: "-",
      nextState: "C",
    },
    X: {
      writeAction: null,
      moveAction: "+",
      nextState: "D",
    },
  },
  // Move to the right-most bit
  D: {
    0: {
      writeAction: null,
      moveAction: "+",
      nextState: "D",
    },
    1: {
      writeAction: null,
      moveAction: "+",
      nextState: "D",
    },
    X: {
      writeAction: null,
      moveAction: null,
      nextState: "H",
    },
    E: {
      writeAction: null,
      moveAction: "-",
      nextState: "D1",
    },
  },
  // Branch based on value and initiate copy to right-hand cell.
  D1: {
    1: {
      writeAction: "D",
      moveAction: "+",
      nextState: "D2",
    },
    0: {
      writeAction: "D",
      moveAction: "+",
      nextState: "D3",
    },
    X: {
      writeAction: null,
      moveAction: "+",
      nextState: "D5",
    },
  },
  // Complete copy of '1' from left-hand cell.
  D2: {
    E: {
      writeAction: "W1",
      moveAction: "-",
      nextState: "D4",
    },
  },
  // Complete copy of '0' from left-hand cell.
  D3: {
    E: {
      writeAction: "W0",
      moveAction: "-",
      nextState: "D4",
    },
  },
  // Move left one cell to repeat process
  D4: {
    E: {
      writeAction: null,
      moveAction: "-",
      nextState: "D1",
    },
  },
  // Move left one cell to repeat process
  D5: {
    E: {
      writeAction: "W1",
      moveAction: null,
      nextState: "B",
    },
  },
} satisfies Program;
