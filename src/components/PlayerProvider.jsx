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
                OH: "/HiHatClose.wav"
            },
            () => {
                console.log("sounds loaded");
                setPlayer(player);
            }
        ).toMaster();
    }, []);

    return children({ player });
};

export default PlayerProvider;
