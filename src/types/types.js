// Enum replacement in JS
export const SOSSlot = {
    E: 0,
    S: 1,
    O: 2,
};

export const SlotDirection = {
    HOR: 0,
    VER: 1,
    DIAGX: 2,
    DIAGY: 3,
};

// Player object shape (can be used with PropTypes in components if needed)
export const defaultPlayer = {
    name: "",
    score: 0,
    color: "",
};

// GameState is a 2D array of SOSSlot values
// Example: const gameState = [[SOSSlot.E, SOSSlot.S], [SOSSlot.O, SOSSlot.E]];

// cell object
export const createCell = (x, y) => ({ x, y });

// PlayerData structure
export const createPlayerData = (name, color) => ({ name, color });
