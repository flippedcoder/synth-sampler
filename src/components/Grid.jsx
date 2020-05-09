import React from "react";
import Frame from "./Frame";
import Cell from "./Cell";

const Grid = ({ sequence, toggleStep }) => (
    <Frame rows='true' columns>
        {sequence.map((mixerLine, i) =>
            mixerLine.map(({ triggered, activated}, j) => (
                <Cell
                    key={i + j}
                    column={j + 1}
                    row={i + 1}
                    activated={activated}
                    triggered={triggered}
                    onClick={() => toggleStep(i, j)}
                />
            ))
        )}
    </Frame>
);

export default Grid;
