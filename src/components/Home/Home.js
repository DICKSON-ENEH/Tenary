import React, {useState} from 'react'
import styled  from 'styled-components'
import Body from '../Body/Body'
import pic from '../images/icon-sedans.svg'
import pic1 from '../images/icon-luxury.svg'
import pic2 from '../images/icon-suvs.svg'
import Sedans from '../Sedans/Sedans'

const Home = () => {
  const [change, setChange]=useState(false)

  const Addchange =()=>{
    setChange(!change)
  }  
  return (
    <div>
    <Container>

<div>
  {  change?
null:(<Body image = {pic} Titlle = 'SEDANS' text = 'Choose a sedan for its affordability and excellent fuel economy. Ideal for crushing in the city or on your next road trap. ' scolor=" #df8a2f" bend="20px" />
)}
<Sedans
    
    changee = {change}
    setChangee={setChange}
    Addchange={Addchange}
    />
</div>
<Body image = {pic1} Titlle = 'SUVS' text = 'Take an SUV for its spacious interior, power, and vsersatility. perfect for your next family vacation and off-road adventures ' scolor=" #00403f" />
<Body image = {pic2} Titlle = 'LUXURY' text = 'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxuryrental and arrive in style ' scolor=" #14707c" bendee="20px"/>
    </Container>
    
    </div>

  )
}

export default Home

const Container = styled.div`
display:flex;
justify-content: center;
height:100vh;
align-items:center;

`