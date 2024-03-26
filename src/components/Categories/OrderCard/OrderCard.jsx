import './OrderCard.css'

const OrderCard = ({item}) => {
    const {name,price,image,recipe}=item;
    return (
        <div className="card">
            <img src={image} className="card-image" />
            <div className="heading"> {name}
                <div className="details"> {recipe}</div>
                <div className="price"> ${price}</div>
            </div>
            <button className='order-button'>Add to cart</button>
        </div>
    );
};

export default OrderCard;