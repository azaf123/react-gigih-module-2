import CardMaster from "../../components/card-song/card-master";
import Style from "./style.module.css";
import SearchBar from "../../components/navbar/search-bar";
const Home = () => {

    return (

        <div className={Style.container}>
            <div className={Style.header}>
                <SearchBar />
            </div>
            <div className={Style.card}>
                <CardMaster />
            </div>


        </div>
    );
}


export default Home;
