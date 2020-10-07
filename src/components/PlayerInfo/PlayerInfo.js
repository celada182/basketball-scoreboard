import React from 'react';

const Info = (props) => {
  if (props.player) {
    return (
        <div className="row">
          <div className="col">
            <div className=" card">
              <div className="card-header">Jugador</div>
              <p>{props.player.name}</p>
              <p>Nº: {props.player.number}</p>
              <p>Faltas: {props.player.faults}</p>
            </div>
          </div>
        </div>
    );
  }
  return null;
};

export default Info;