import Player from "../Player/Player";
import React from 'react';

const List = (props) => {
  return (
      <div className="row">
        <div className="col">
          <div className=" card">
            <div className="card-header">Jugadores</div>
            {props.players.map((player) =>
                <Player
                    name={player.name}
                    number={player.number}
                    faults={player.faults}
                    infoHandler={props.infoHandler}/>
            )}
          </div>
        </div>
      </div>
  );
};

export default List;