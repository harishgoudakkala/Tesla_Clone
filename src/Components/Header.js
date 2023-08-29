import React,{useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import {selectCars} from "../features/CarSlice/CarSlice"
import { useSelector } from 'react-redux'

function Header() {
  const [NavStatus,setNavStatus] = useState(true);
  const cars = useSelector(selectCars)

  return (
    <Container>
      <a>
        <img src='logo.svg'/>
      </a>
      <Menu>
        {cars && cars.map((car,index)=>(
          <a key={index} href='#'>{car}</a>
        ))}
      </Menu>
      <RightMenu>
        <a href='#'>Shop</a>
        <a href='#'>Tesla Account</a>
        <CustomMenu onClick={()=>setNavStatus(false)}/>
      </RightMenu>

      <Navi show={NavStatus}>
        <CloseWrap>
        <CustomClose onClick={()=>setNavStatus(true)} />
        </CloseWrap>
        {cars && cars.map((car,index)=>(
          <li><a key={index} href='#'>{car}</a></li>
        ))}
        <li><a href="#">Existing Inventory</a>  </li>
        <li><a href="#">Used Inventory</a>  </li>
        <li><a href="#">Trade-In</a>  </li>
        <li><a href="#">CyberTruck</a>  </li>
        <li><a href="#">Roadaster</a>  </li>
        
      </Navi>

    </Container>

    
  )
}

export default Header

const Container = styled.div`
min-height: 60px;
position :fixed;
display: flex;
padding: 20px 30px;
align-items : center;
top: 0;
left: 0;
right: 0;
justify-content : space-between;
z-index:1;
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  a{
    font-weight:600;
    text-transform: uppercase;
    padding : 0 10px;
    flex-wrap: nowrap;
  }
  @media(max-width: 760px) {
    display:none;
  }
`

const RightMenu = styled.div`
  display : flex;
  align-items : center;
  a{
    font-weight:600;
    text-transform: uppercase;
    margin-right:10px;
  }
`

const CustomMenu = styled(MenuIcon) `
cursor: pointer;
`

const Navi = styled.div`
  position: fixed;
  top:0;
  bottom:0;
  right:0;
  background:white;
  width:300px;
  z-index:10;
  list-style:none;
  padding:20px;
  transform: ${props => props.show ? `translateX(100%)` :`translateX(0)`};
  transition: transform 0.5s;
  li{
    padding:15px 0;
    border-bottom: 1px solid rgba(0,0,0,.2)
  }
  a{
    font-weight:600;
  }
`

const CustomClose = styled(CloseIcon)`
`
const CloseWrap = styled.div`
  display:flex;
  justify-content: flex-end;
  cursor: pointer;
`