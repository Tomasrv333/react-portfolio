const ProductCard = (props) => {
  return (
    <div className="product__card">
        <img className="product__img" src={props.img} alt={props.alt} />
        <h3 className="product__title">{props.title}</h3>
        <p className="product__description">{props.description}</p>
    </div>
  )
}

export default ProductCard