import Style from "./style.module.css";
const SearchBar = ({
    search,
    onSearchChange,
    onSearchSubmit
}) => {
    return (
        <div className={Style.box}>
            <form nameName={Style.search}>
                <input type="text" className={Style.input} name="txt"
                    onmouseout="document.search.txt.value = ''"></input>
            </form>
            <i class="fas fa-search"></i>
        </div>
    );
};
export default SearchBar;