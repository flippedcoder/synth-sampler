import React, { useState, useEffect } from "react";
import Grid from "./Grid";
import Bar from "./NavBar";
import PlayButton from "./PlayButton";

// length of each sound row
const steps = 16;

// default state for each cell
const initialCellState = { triggered: false, activated: false };

// order of samples by column
const lineMap = ["BD", "CP", "CH", "OH", "AH", "RP", "LH", "OP", "BH"];

// initialize each cell on every row
const initialState = [
    new Array(steps).fill(initialCellState),
    new Array(steps).fill(initialCellState),
    new Array(steps).fill(initialCellState),
    new Array(steps).fill(initialCellState),
    new Array(steps).fill(initialCellState),
    new Array(steps).fill(initialCellState),
    new Array(steps).fill(initialCellState),
    new Array(steps).fill(initialCellState),
    new Array(steps).fill(initialCellState)
];

const Sequencer = ({ player }) => {
    const [sequence, setSequence] = useState(initialState);
    const [playing, setPlaying] = useState(true);
    const [currentStep, setCurrentStep] = useState(0);

    // determines if a cell has been set to play
    const toggleStep = (line, step) => {
        const sequenceCopy = [...sequence];
        const { triggered, activated } = sequenceCopy[line][step];

        sequenceCopy[line][step] = { triggered, activated: !activated };
        console.log("toggled");
        setSequence(sequenceCopy);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const nextStep = time => {
        for (let i = 0; i < sequence.length; i++) {
            for (let j = 0; j < sequence[i].length; j++) {
                const { triggered, activated } = sequence[i][j];
                sequence[i][j] = { activated, triggered: j === time };
                if (triggered && activated) {
                    player.get(lineMap[i]).start();
                }
            }
        }
        setSequence(sequence);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            if (playing) {
                setCurrentStep((currentStep + 1) % steps);
                nextStep(currentStep);
            }
        }, 171);

        return () => {
            clearTimeout(timer);
        };
    }, [currentStep, nextStep, playing]);

    return (
        <>
            <Bar>
                <PlayButton playing={playing} onClick={() => setPlaying(!playing)} />
            </Bar>
            <Grid sequence={sequence} toggleStep={toggleStep} />
        </>
    );
};

export default Sequencer;
