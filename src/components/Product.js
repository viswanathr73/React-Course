




const Product = ({ product }) => {

    const { image, title, price, rating } = product;
    return (
        <div className='product'>
            <img className="product_img" src={image} />
            <h1>{title}</h1>
            <p>{rating.rate} ratings</p>
            <p>Price:{price}</p>
        </div>
    )
}

export default Product;