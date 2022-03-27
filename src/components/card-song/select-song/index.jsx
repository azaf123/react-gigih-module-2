import Style from "./style.module.css";

const SelectSong = () => {
    return(
        <div className={Style.container}>
            <div className={Style.row}>
                <select name="" id="" className={Style.selectSong}>
                    <option value="">List of Song</option>
                </select>
            </div>
        </div>
    )
}
export default SelectSong;