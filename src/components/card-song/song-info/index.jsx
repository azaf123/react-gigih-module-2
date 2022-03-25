import Style from "./style.module.css";
const SongInfo = ({ SongTitle, SongArtist }) => {
  return (
    <div className="container">
      <div className="card">
        <div className={Style.cardContent}>
          <p>{SongTitle}</p>
          <p>{SongArtist}</p>
        </div>
      </div>
    </div>
  );
};
export default SongInfo;
