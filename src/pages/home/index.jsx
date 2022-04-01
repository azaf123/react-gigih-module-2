import Style from "./style.module.css";
import SearchBar from "../../components/navbar/search-bar";
import Login from "../../components/navbar/login";
import { useState,useEffect } from "react";
import SearchHook from "../../components/navbar/searchHook";

const Home = () => {
    // state = {
    //     accessToken: window.location.hash
    //         .substring(1, window.location.hash.length - 1)
    //         .split("&")[0]
    //         .split("=")[1],

    // }

    const [accessToken, setAccessToken] = useState("")
 
    useEffect(() => {
        const hash = window.location.hash
            .substring(1, window.location.hash.length - 1)
            .split("&")[0]
            .split("=")[1];
        setAccessToken(hash);
    }, [])

        return (
            <header>
                <div className={Style.container}>
                    {accessToken ?
                        <SearchHook accessToken={accessToken} /> : <Login />}
                </div>
            </header>
        );
    
}


export default Home;
