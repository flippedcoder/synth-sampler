import React from "react";
import Sequencer from "./Sequencer";
import PlayerProvider from "./PlayerProvider";

const App = () => {
  return (
    <PlayerProvider>
      {({ player }) => {
        if (!player) {
          return <p>loading....</p>;
        }
        return <Sequencer player={player} />;
      }}
    </PlayerProvider>
  );
}

export default App;