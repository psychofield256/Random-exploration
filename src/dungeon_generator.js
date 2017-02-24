// @flow

// the flow annotations may be wrong, as I couldn't setup it and use them only for reading

type Cell = number;
type Row = Array<Cell>;
type Level = Array<Row>;

config = {
	living_cell_rate: 45 / 100
}


function gen_cell(): Cell {
	return Random(config.living_cell_rate);
}

function gen_line(length: number): Row {
	var r: Row = [];
	for (;length > 0; length--) {
		r.push(gen_cell());
	}
	return r;
}

export function create(x: number, y: number): Level {
	var grid: Level = [];
	for (; x > 0; x--) {
		grid.push(gen_line(y));
	}
	return grid;
}


