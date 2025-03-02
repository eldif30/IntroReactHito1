import "./CardPizza.css";
import { formatCurrency } from "../Utils/formatCurrency";

function CardPizza({ name, price, ingredients, img }) {
  return (
    <div className="col-md-4">
      <div className="card shadow-sm">
        <img src={img} alt={name} className="card-img-top pizza-img" />
        <div className="card-body text-center">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            <strong>Ingredientes:</strong>
            <br />
            <span className="text-muted">🍕 {ingredients.join(", ")}</span>
          </p>
          <p className="card-text">
            <strong>Precio:</strong> {formatCurrency(price)}
          </p>
          <div className="d-flex justify-content-center gap-2">
            <button className="btn btn-outline-secondary">Ver Más 👀</button>
            <button className="btn btn-dark">Añadir 🛒</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPizza;
