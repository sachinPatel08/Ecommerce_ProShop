import {Card} from 'react-bootstrap'
import Rating from '../componant/Rating'
import PriceFormate from '../componant/PriceFormate'
import {NavLink} from 'react-router-dom'
const Product = ({product})=>{
//    const {_id,name,image,description,brand,category,price,countInstock,rating,numReviews} = product;
    return(
        <>
        <Card className='my-3 p-3 rounded'>
      <NavLink to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
        </NavLink>
        

        <Card.Body>
        <NavLink to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>

          <Card.Text as='div'>
          <div className="my-3"> 
          {/* {product.rating} from {product.numReviews} Reviews */}
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
          </div>
        </Card.Text>

        <Card.Text as='h3'> Rs. <PriceFormate price={product.price} />  </Card.Text>

          </NavLink>
          </Card.Body>
          </Card>

        </>
    )
}
export default Product;