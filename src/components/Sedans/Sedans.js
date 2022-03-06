import React,{useState} from 'react'
import styled from 'styled-components'
import pic from '../images/icon-sedans.svg'
import Button from '../Body/Body'


const sedans = ({changee, setChangee, Addchange}) => {
  return (
      <div>
          {changee?(
    <Components>
        <Wrap>
     <Icon>
         <img src={pic} alt ="a car"/>
     </Icon>
     <Leftwrap>
         <Title>
             SEDANS
         </Title>
         <Text>
         Choose a sedan for its affordability and excellent fuel economy. Ideal for crushing in the city or on your next road trap.
         </Text>
         <Button onClick={Addchange}/>
     </Leftwrap>
     </Wrap>
    </Components>
          ):null}
    </div>
  )
}

export default sedans

const Components=styled.div`
background:#df8a2f;
display:flex;
justify-content:center;
align-items: center;
font-family:quicksand;
color:white

`
const Icon= styled.div`
img{
    width:500px;
    
}
`
const Leftwrap = styled.div``
const Title=styled.div`
font-weight: bold;
font-size:3rem;

`
const Wrap= styled.div`
display:flex;
justify-content: space-around;
align-items: center;
width: 80%;
`

const Text= styled.div`
width:400px;
font-size:20px
`