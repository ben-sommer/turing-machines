export default {
    A: {
        E: {
            writeAction: "W1",
            moveAction: null,
            nextState: "B",
        },
    },
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
    D2: {
        E: {
            writeAction: "W1",
            moveAction: "-",
            nextState: "D4",
        },
    },
    D3: {
        E: {
            writeAction: "W0",
            moveAction: "-",
            nextState: "D4",
        },
    },
    D4: {
        E: {
            writeAction: null,
            moveAction: "-",
            nextState: "D1",
        },
    },
    D5: {
        E: {
            writeAction: "W1",
            moveAction: null,
            nextState: "B",
        },
    },
};
//# sourceMappingURL=leftAlignedCounter.js.map