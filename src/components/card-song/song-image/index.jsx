import Style from './style.module.css';

function SongImage({ song }) {
  return (
    <div className={Style.container}>
      <div className={Style.songImage}>
        <div className="card">
          <div className="card-image">
            <img src={song} width={300} height={200} alt="pic" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default SongImage;
