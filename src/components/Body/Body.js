import React  from 'react'
import styled from 'styled-components'


const Body = ({image, Titlle, text, scolor, bend, bendee, Addchange}) => {

  

  return (
    <div>
    <Components scolor={scolor} bend={bend} bendee= {bendee}>
<Wrapper>
<Icon>
    <img src= {image} alt =""/>
</Icon>
<Title>
    {Titlle}
</Title>
<Description>
   {text}
</Description>
<Button  scolor={scolor} onClick= {Addchange}>Learn More</Button>
</Wrapper>
    </Components>
    </div>
  )
} 

export default Body

const Components = styled.div`
width: 280px;
height:450px;
background:${({scolor})=>scolor};
color:white;
display:flex;
justify-content:center;
flex-direction: column;
align-items: center;
font-family: quicksand;
border-top-left-radius: ${({bend})=>bend};
border-bottom-left-radius: ${({bend})=>bend};
border-top-right-radius: ${({bendee})=>bendee};
border-bottom-right-radius: ${({bendee})=>bendee};

`
const Wrapper = styled.div`
width:80%;
height:400px
`
const Icon = styled.div``
const Title = styled.div`
margin-top:45px;
font-weight:bold;
font-size:2rem
`
const Description= styled.div`
margin-top:45px
`
const Button = styled.button`
margin-top:65px;
padding:15px 15px;
border-radius:30px;
border:none;
outline:none;
color:${({scolor})=>scolor};
font-size:15px;
cursor:pointer

`