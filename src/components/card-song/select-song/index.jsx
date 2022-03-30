import Style from "./style.module.css";

const SelectSong = () => {
    return(
        <div className={Style.container}>
            <div className={Style.row}>
                <button className={Style.ButtonSelect}>Select</button>
            </div>
        </div>
    )
}
export default SelectSong;