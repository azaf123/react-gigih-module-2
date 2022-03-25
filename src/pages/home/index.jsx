import data from "../../data";
import SongImage from "../../components/card-song/song-image";
import SongInfo from "../../components/card-song/song-info";
import SelectSong from "../../components/card-song/select-song";
import Style from "./style.module.css";
const Home = () => {

    return (
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
    );
}
export default Home;
