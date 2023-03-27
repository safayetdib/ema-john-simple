import React from 'react';
import './Product.css';

const Product = (props) => {
	const { img, name, seller, quantity, price, ratings } = props.product;

	return (
		<div className="product">
			<img src={img} alt="product image" />
			<div className="product-info">
				<div>
					<h5 className="product-name">{name}</h5>
					<h6 className="product-price">Price: ${price}</h6>
				</div>
				<div>
					<p>Manufacturer: {seller}</p>
					<p>Ratings: {ratings} Stars</p>
				</div>
			</div>
			<button className="btn-cart">Add To Cart</button>
		</div>
	);
};

export default Product;
