import Style from "./style.module.css";
import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import SongImage from "../song-image";
import { getValue } from "@testing-library/user-event/dist/utils";
const SelectSong = ({ selected, setSelected,ura }) => {
    // const [isActive , setIsActive] = useState(false);




    return (
        <div className={Style.container}>
            <div className={Style.row}>
                <button className={Style.ButtonSelect} >
                    <div className={Style.ButtonSelectText}>
                        Select Song
                    </div>
                </button>
            </div>
        </div>
    )
}
export default SelectSong;