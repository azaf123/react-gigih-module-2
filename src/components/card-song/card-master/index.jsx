import SongImage from "../song-image"
import SongInfo from "../song-info"
import SelectSong from "../select-song"
import data from "../../../data"
import Style from "./style.module.css"
const CardMaster = () => {
    return(
        <div className={Style.container}>
        <div className={Style.card}>
        <div className="row">
            <SongImage song={data.album.images[1].url} />
        </div>
        <div className="row">
            <SongInfo SongTitle={data.album.name} SongArtist={data.artists[0].name} />
        </div>  
        <div className="row">
            <SelectSong />
        </div>
        </div>
    </div>
    )
}
export default CardMaster;