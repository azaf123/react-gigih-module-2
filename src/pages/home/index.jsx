import Style from "./style.module.css";
import SearchBar from "../../components/navbar/search-bar";
import Login from "../../components/navbar/login";
import { Component } from "react";

class Home extends Component {
    state = {
        accessToken: window.location.hash
            .substring(1, window.location.hash.length - 1)
            .split("&")[0]
            .split("=")[1],

    }
    render() {
        return (
            <header>
                <div className={Style.container}>
                    {this.state.accessToken ?
                        <SearchBar accessToken={this.state.accessToken} /> : <Login />}
                </div>
            </header>
        );
    }
}


export default Home;
