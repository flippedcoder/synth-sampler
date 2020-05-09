import React, { useState, useEffect } from "react";
import Grid from "./Grid";
import Bar from "./NavBar";
import PlayButton from "./PlayButton";
import ClearButton from "./ClearButton";
import {
    steps,
    lineMap,
    initialState
} from '../helpers/initial-values'

const Sequencer = ({ player }) => {
    const [sequence, setSequence] = useState(initialState);
    const [playing, setPlaying] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);

    // determines if a cell has been set to play
    const toggleStep = (line, cell) => {
        const { triggered, activated } = sequence[line][cell]

        const updatedCell = { triggered, activated: !activated }
        const updatedSequence = [ ...sequence, {...sequence[line][cell]}= {activated: updatedCell.activated, triggered: updatedCell.triggered} ].filter(item => Array.isArray(item) )
        setSequence(updatedSequence)
    };

    const handleClearGrid = () => {
        setSequence(initialState)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const nextStep = time => {
        const updatedSequence = sequence.map((mixerLine, mIndex) => 
            mixerLine.map(({ activated }, cIndex) => {
                const updatedCell = { activated: activated, triggered: cIndex === time }

                if (updatedCell.triggered && updatedCell.activated) {
                    player.get(lineMap[mIndex]).start()
                }

                return updatedCell
            })
        )
        setSequence(updatedSequence)
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
                <ClearButton onClick={() => handleClearGrid()} />
                <input type="number" />
            </Bar>
            <Grid sequence={sequence} toggleStep={toggleStep} />
        </>
    );
};

export default Sequencer;
