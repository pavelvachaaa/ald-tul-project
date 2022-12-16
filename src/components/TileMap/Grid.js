import { getRandomNumber, setCharAt } from "./utils";

// Enum 
const State = {
    Empty: -1,
    Invalid: 999
}

export class Grid {

    constructor(numberOfRows, numberOfColumns) {
        this.numberOfRows = numberOfRows;
        this.numberOfColumns = numberOfColumns;

        this.grid = [...Array(numberOfRows)].map(() => Array(numberOfColumns).fill(State.Empty));

        this.directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
        this.neighbors = [];

        /// Formát (UP,RIGHT,DOWN,LEFT) (0,1,2,3) - 1-15.png
        this.connections = [
            "0101",
            "1111",
            "1010",
            "0011",
            "0110",
            "1100",
            "1001",
            "1110",
            "1011",
            "0111",
            "1101",
            "0010",
            "1000",
            "0100",
            "0001"
        ];
    }

    setTile(position, tile) {
        this.grid[position[0]][position[1]] = tile;
    }

    isEmpty() {
        for (let i = 0; i < this.numberOfRows; i++)
            for (let j = 0; j < this.numberOfColumns; j++)
                if (this.grid[i][j] != State.Empty)
                    return false;

        return true;
    }

    // Používají se kvůli výkonu obě varianty (isEmpty, isFull)
    isFull() {
        for (let i = 0; i < this.numberOfRows; i++)
            for (let j = 0; j < this.numberOfColumns; j++)
                if (this.grid[i][j] == State.Empty)
                    return false;

        return true;
    }

    getNeighbor() {
        if (this.isEmpty())
            return [getRandomNumber(this.numberOfRows), getRandomNumber(this.numberOfColumns)]

        const randomIndex = getRandomNumber(this.neighbors.length);
        const selected = this.neighbors[randomIndex];

        this.neighbors.splice(randomIndex, 1);

        return selected;
    }

    addAllAdjacent(pos) {
        let position;
        for (let i = 0; i < this.directions.length; i++) {
            position = [...pos];
            const [dx, dy] = this.directions[i];

            const newX = position[0] + dx;
            const newY = position[1] + dy;

            // Když jsme v hranicích, aktualizuj pozici
            if (newX >= 0 && newX < this.numberOfRows && newY >= 0 && newY < this.numberOfColumns) {
                position[0] = newX;
                position[1] = newY;
            }

            if (!(this.neighbors.some(row => JSON.stringify(row) === JSON.stringify(position))) && this.grid[position[0]][position[1]] == State.Empty) {
                this.neighbors.push([position[0], position[1]])
            }
        }
    }

    getTile(pos) {
        let mask = "xxxx";
        let position;

        const indexes = [2, 3, 0, 1];
        for (let i = 0; i < indexes.length; i++) {
            position = [...pos];

            const [dx, dy] = this.directions[i];

            const newX = position[0] + dx;
            const newY = position[1] + dy;

            // Když jsme v hranicích, aktualizuj pozici
            if (newX >= 0 && newX < this.numberOfRows && newY >= 0 && newY < this.numberOfColumns) {
                position[0] = newX;
                position[1] = newY;
            }

            const selectedItem = this.grid[position[0]][position[1]]

            if (selectedItem != State.Empty && selectedItem != State.Invalid) {
                mask = setCharAt(mask, i, this.connections[selectedItem - 1].charAt(indexes[i]));
            }
        }

        const filtered = [];
        for (let index = 0; index < this.connections.length; index++) {

            let element = this.connections[index];
            let allDifferent = true;

            for (let i = 0; i < element.length; i++) {
                let current = element.charAt(i);

                if (mask.toString().charAt(i) === "x") {
                    continue;
                }
                if (mask.toString().charAt(i) != current) {
                    allDifferent = false;
                }
            }

            if (allDifferent) {
                filtered.push(element);
            }
        }

        if (filtered.length == 0) {
            return State.Invalid;
        }

        return this.connections.indexOf(filtered[getRandomNumber(filtered.length)]) + 1;

    }


}