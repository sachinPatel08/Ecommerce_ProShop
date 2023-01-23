import styled from 'styled-components';
const Rating = ({text , value})=>{
    return( 
        <div className='rating'>
        <span>
          <I

            className={
              value >= 1
                ? 'fas fa-star'
                : value >= 0.5
                ? 'fas fa-star-half-alt'
                : 'far fa-star'
            }
          ></I>
        </span>
        <span>
          <I
            
            className={
              value >= 2
                ? 'fas fa-star'
                : value >= 1.5
                ? 'fas fa-star-half-alt'
                : 'far fa-star'
            }
          ></I>
        </span>
        <span>
          <I
           
            className={
              value >= 3
                ? 'fas fa-star'
                : value >= 2.5
                ? 'fas fa-star-half-alt'
                : 'far fa-star'
            }
          ></I>
        </span>
        <span>
          <I
            
            className={
              value >= 4
                ? 'fas fa-star'
                : value >= 3.5
                ? 'fas fa-star-half-alt'
                : 'far fa-star'
            }
          ></I>
        </span>
        <span>
          <I
            
            className={
              value >= 5
                ? 'fas fa-star'
                : value >= 4.5
                ? 'fas fa-star-half-alt'
                : 'far fa-star'
            }
          ></I>
        </span>
        <span>{text && text}</span>
      </div>
    )
}

const I = styled.i`
color:#f8e825
`


export default Rating;

// <i class="fa-solid fa-star"></i>
// <i class="fa-regular fa-star"></i>
// <i class="fa-solid fa-star-half-stroke"></i>