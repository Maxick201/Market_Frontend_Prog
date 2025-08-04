import "../../App.css";
import "../../css/style.css";
import HeaderLeft from "../../components//Header/HeaderLeft/HeaderLeft";
export default function  Header() {
  return (
    <header className="header">
        <div className="container">
           <HeaderLeft/>
        </div>
    </header>
  );
}
