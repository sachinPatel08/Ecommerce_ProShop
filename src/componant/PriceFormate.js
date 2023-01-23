import styled from 'styled-components';
const PriceFormate = ({price})=>{
    return(
        <>
        {
            new Intl.NumberFormat('en-IN', 
            { 
            currency:"INR",
            maximumSignificantDigits: 5,
            }).format(Math.round(price * 82.6446) )
        }
        <br></br>
      <DIV>
        {
            `you save ${Math.abs(Math.round(price-(price*(price%10))))}`
        }
      </DIV>
        
        </>
    )
      
}
const DIV = styled.span`
font-size:10px;
`

export default PriceFormate;