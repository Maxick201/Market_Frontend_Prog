import "../../css/style.css";
export default function CatalogButton() {
  return (
    <button className="burger-btn flex align-center justify-center" aria-label="Каталог">
      <div className="flex column g-5">
        <span className="burger-item"></span>
        <span className="burger-item"></span>
        <span className="burger-item"></span>
      </div>
      <span className="btn-text">Каталог</span>
    </button>
  );
}
