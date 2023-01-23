import { NavLink, useParams } from "react-router-dom"
import { Row, Col, Image, ListGroup, Card, Button, Form } from "react-bootstrap"
// import products from "../../../backend/data/products"

import Rating from "../componant/Rating"
import PriceFormate from "../componant/PriceFormate"
import { useEffect, useState } from "react"
import axios from "axios"
const ProductScreen = ({ match }) => {

  // only get singale object
const [product , setProduct] = useState({})


  const { id } = useParams()
 
  // const product = products.find((p) => p._id === id)
  useEffect(()=>{
     const fetchProducts  = async ()=>{
      
      const {data} = await axios.get(`/api/product/${id}`)
      
      setProduct(data)
     }
     fetchProducts()
  },[])

  return (
    <>
      <NavLink className='btn btn-light my-3' to='/'>
        Go Back
      </NavLink>

      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>
              Price: <PriceFormate price={product.price} />{" "}
            </ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong><PriceFormate price={product.price} /></strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>


              <ListGroup.Item>
                <Button
                  
                  className='btn-block'
                  type='button'
                  disabled={product.countInStock === 0}
                >
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
       
        </Col>
      </Row>
    </>
  )
}
export default ProductScreen

// before start any project first do npm init always 
