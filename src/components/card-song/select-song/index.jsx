import Style from "./style.module.css";


const SelectSong = ({setSongSelected}) => {
    return (
        <div className={Style.container}>
            <div className={Style.row}>
                <div className="btn">
                <button onClick={setSongSelected} className={Style.ButtonSelect} >Select</button>
                </div>
            </div>
        </div>
    )
}

const DeselectSong = ({setSongDeselected}) => {


    return (
        <div className={Style.container}>
            <div className={Style.row}>
                <button onClick={setSongDeselected} className={Style.ButtonDeselect} >Deselect</button>
            </div>
        </div>
    )
}

export default SelectSong;
export { DeselectSong };
