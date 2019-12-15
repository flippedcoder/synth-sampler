import { useState, useEffect } from "react";
import Tone from "tone";

const PlayerProvider = ({ children }) => {
    const [player, setPlayer] = useState(null);
    useEffect(() => {
        const player = new Tone.Players(
            {
                BD: "/808.wav",
                CP: "/Clap.wav",
                CH: "/KickDrum.wav",
                OH: "/HiHatClose.wav",
                AH: "/HiHatOpen.wav",
                RP: "/SnareDrum.wav",
                LH: "/Bubble.wav",
                OP: "/Tam.wav",
                BH: "/808Am.wav"
            },
            () => {
                console.log("buffers loaded");
                setPlayer(player);
            }
        ).toMaster();
    }, []);

    return children({ player });
};

export default PlayerProvider;
