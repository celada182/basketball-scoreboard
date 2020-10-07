import React, {useState} from 'react';
import PlayerList from "../../components/PlayerList/PlayerList";
import PlayerInfo from "../../components/PlayerInfo/PlayerInfo";
import PlayerUpdater from "../../components/PlayerUpdater/PlayerUpdater";

const Page = (props) => {
  const PLAYERS = [
    {
      name: 'Javier',
      number: 19,
      faults: 2
    },
    {
      name: 'Kivis',
      number: 10,
      faults: 3
    }
  ];

  const [players, setPlayers] = useState(PLAYERS);
  const [info, setInfo] = useState();

  const updateHandler = (number, faults) => {
    updatePlayer(number, faults);
  };

  const updatePlayer = (number, faults) => {
    const updatedPlayers = [...players];
    const index = updatedPlayers.findIndex(player => player.number == number);
    if (index >= 0) {
      updatedPlayers[index].faults = faults;
      setPlayers(updatedPlayers);
    }
  };

  const infoHandler = (number) => {
    const index = players.findIndex(player => player.number == number);
    if (index >= 0) {
      setInfo(players[index]);
    }
  };

  return (
      <React.Fragment>
        <PlayerUpdater updateHandler={updateHandler}/>
        <PlayerInfo player={info}/>
        <PlayerList players={players} infoHandler={infoHandler}/>
      </React.Fragment>
  );
};

export default Page;