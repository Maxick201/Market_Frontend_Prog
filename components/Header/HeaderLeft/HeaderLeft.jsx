import "../../../css/style.css";

import headerLogo from "../../../assets/img/header/header-logo.svg";

import CatalogBtn from "../../CatalogButton/CatalogButton";

import SearchInput from "../../SearchInput/SearchInput";
export default function HeaderLeft() {
  return (
    <>
      <div className="header-left flex align-center">
        <img src={headerLogo} alt="Header-logo" className="mr-40" />
        <CatalogBtn />
        <SearchInput />
      </div>
    </>
  );
}
