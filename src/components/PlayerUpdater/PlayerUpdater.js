import React, {useState} from 'react';

const Updater = (props) => {
  const [number, setNumber] = useState();
  const [faults, setFaults] = useState();

  return (
      <form>
        <div className="form-group">
          <label>Nº</label>
          <input type="number" className="form-control" value={number}
                 onChange={(event) =>
                     setNumber(event.target.value)}/>
        </div>
        <div className="form-group">
          <label>Faults</label>
          <input type="number" className="form-control"
                 value={faults}
                 onChange={(event) =>
                     setFaults(event.target.value)}/>
        </div>
        <button type="button" className="btn btn-primary"
                onClick={() => props.updateHandler(number, faults)}>Actualizar
        </button>
      </form>
  );
};

export default Updater;