import Style from "./style.module.css";

const SelectSong = () => {
    return(
        <div className={Style.container}>
            <div className="row">
                <select name="" id="" className={Style.selectSong}>
                    <option value="">Select a Song</option>
                </select>
            </div>
        </div>
    )
}
export default SelectSong;