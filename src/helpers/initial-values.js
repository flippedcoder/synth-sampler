// length of each sound row
const steps = 4

// default state for each cell
const initialCellState = {
    triggered: false,
    activated: false
}

// order of samples by column
const lineMap = [
    "BD",
    "CP",
    "CH",
    "OH"
]

// initialize each cell on every row
const initialState = [
    new Array(steps).fill(initialCellState),
    new Array(steps).fill(initialCellState),
    new Array(steps).fill(initialCellState),
    new Array(steps).fill(initialCellState),
]

export { steps, lineMap, initialState }