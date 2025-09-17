import { Program } from "index";

export default {
  // Move to the right-most bit
  A: {
    E: {
      writeAction: null,
      moveAction: "+",
      nextState: "A",
    },
    1: {
      writeAction: null,
      moveAction: "+",
      nextState: "A",
    },
    0: {
      writeAction: null,
      moveAction: "+",
      nextState: "A",
    },
    X: {
      writeAction: null,
      moveAction: "-",
      nextState: "B",
    },
  },
  // Find right-most '1' and overwrite it with a '0'.
  B: {
    0: {
      writeAction: null,
      moveAction: "-",
      nextState: "B",
    },
    1: {
      writeAction: "W0",
      moveAction: "+",
      nextState: "C",
    },
    X: {
      writeAction: null,
      moveAction: null,
      nextState: "H",
    },
    E: {
      writeAction: null,
      moveAction: null,
      nextState: "H",
    },
  },
  // Fill all cells to the right with '1's.
  C: {
    0: {
      writeAction: "W1",
      moveAction: "+",
      nextState: "C",
    },
    X: {
      writeAction: null,
      moveAction: "-",
      nextState: "B",
    },
  },
} satisfies Program;
