import "../../css/style.css";
import loop from '../../assets/img/header/search.svg';
export default function SearchInput() {
  return (
    <form className="search-form">
      <input type="text" className="search-field ml-16" placeholder="Найти товар"/>
      <img src={loop} alt="" className="search-icon"/>
    </form>
  );
}
