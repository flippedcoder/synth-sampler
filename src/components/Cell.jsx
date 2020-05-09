import styled from "styled-components";
import { darken } from "polished";

const getBackground = (activated, triggered) => {
    switch (true) {
        case activated && triggered:
            return darken(0.2, "#925fcd");
        case activated && !triggered:
            return "#925fcd";
        case !activated && triggered:
            return "#aa8b39";
        default:
            return "#90e2d9";
    }
};

const Cell = styled.div.attrs(({ activated, triggered }) => ({
    style: {
        background: getBackground(activated, triggered)
    }
}))`
  border-radius: 4px;
  grid-column: ${props => props.column};
  grid-row: ${props => props.row};
  margin: 2px;
`;

export default Cell;
