export default function Product(props) {
  const { id, name, price, image } = props;

  return (
    <div className="card">
      <div id={id} className="card-image">
        <img src={image} alt={name}/>
        <button className="btn-floating halfway-fab waves-effect waves-light blue-grey lighten-1">
          <i className="material-icons">add</i>
        </button>
      </div>
      <div className="card-content">
        <h5><strong>{name}</strong></h5>
        <p>Price: <b>${price}</b></p>
      </div>
    </div>
  );
}
