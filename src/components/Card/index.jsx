import "./Card.css";

function Card({ title, body, id, removeCard }) {
  const remove = "\u2715";
  return (
    <div className="card">
      <button className="remove" onClick={() => removeCard(id)}>
        {remove}
      </button>
      <h1 className="title">{title}</h1>
      <p className="body">{body}</p>
    </div>
  );
}

export default Card;
