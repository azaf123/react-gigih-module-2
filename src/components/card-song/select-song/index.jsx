/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React from 'react';
import Style from './style.module.css';

function SelectSong({ setSongSelected }) {
  return (
    <div className={Style.container}>
      <divs className={Style.row}>
        <div className="btn">
          <button onClick={setSongSelected} className={Style.ButtonSelect}>
            Select
          </button>
        </div>
      </divs>
    </div>
  );
}

function DeselectSong({ setSongDeselected }) {
  return (
    <div className={Style.container}>
      <div className={Style.row}>
        <button onClick={setSongDeselected} className={Style.ButtonDeselect}>
          Deselect
        </button>
      </div>
    </div>
  );
}

export default SelectSong;
export { DeselectSong };
