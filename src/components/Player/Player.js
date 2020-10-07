import React from 'react';

const player = (props) => {
  return (
      <React.Fragment>
        <p>{props.name}</p>
        <p>Nº: {props.number}</p>
        <p>Faltas: {props.faults}</p>
        <button type="button" className="btn btn-warning"
                onClick={() => props.infoHandler(props.number)}>Info</button>
      </React.Fragment>
      );
};

export default player;