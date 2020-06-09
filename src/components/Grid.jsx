import React from "react";
import Frame from "./Frame";
import Cell from "./Cell";

const Grid = ({ sequence, toggleStep }) => (
    <Frame rows='true' columns>
        {sequence.map((line, i) =>
            line.map((time, j) => (
                <Cell
                    key={i + j}
                    column={j + 1}
                    row={i + 1}
                    activated={sequence[i][j]["activated"]}
                    triggered={sequence[i][j]["triggered"]}
                    onClick={() => toggleStep(i, j)}
                />
            ))
        )}
    </Frame>
);

export default Grid;
