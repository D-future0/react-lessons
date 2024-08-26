import React from 'react';
import propTypes from 'prop-types'
import defaultImage from '../../../asset/couch.jpeg'

const Product = ({image, name, price}) => {
  console.log(name, price, image)
  return <article className='product'>
    {/* <img src={image.url} alt='image'></img>
    <h2>{name}</h2>
    <p>{price}</p> */}
  </article>;
};
Product.propTypes = {
  image: propTypes.object.isRequired,
  name: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
}
Product.defaultProps = {
  image: defaultImage,
  name: `default name`,
  price: 0.00
}


export default Product;
