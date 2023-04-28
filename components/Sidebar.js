import { useState } from 'react'
import styled from 'styled-components'
import logo from '../assets/cb-logo.jpg'
import Image from 'next/image'
import { navItems } from '../static/navItems'
import { useRouter } from 'next/router'
import btcLogo from '../assets/btc.png'
import { BiTrendingUp } from 'react-icons/bi'
import {Routes, Route, useNavigate} from 'react-router-dom';

const Sidebar = () => {
  const [activeIcon, setActiveIcon] = useState(navItems[0].title)
  const router = useRouter()
  // const navigate = useNavigate();
  
  // const navigateHome = () => {
  //   // 👇️ navigate to /
  //   navigate('http://localhost:3000/#');
  // };
  return (
    <Wrapper style={{background: "#000"}}>
      <LogoContainer>
        <Logo>
          <Image src={logo} alt='Coinbase Logo' />
        </Logo>
      </LogoContainer>
      <NavItemsContainer>
        {
        navItems.map((item) => {
          if(item.title === "Trade"){
            return <NavItem key={item.title} onClick={() => router.push(item.url)}>
            <NavIcon style={{ color: item.title === activeIcon && '#3773f5' }}>
              {item.icon}
            </NavIcon>
            <NavTitle>{item.title}</NavTitle>
          </NavItem>
          }else if(item.title === "News"){
            return <NavItem key={item.title} onClick={() => router.push(item.url)}>
            <NavIcon style={{ color: item.title === activeIcon && '#3773f5' }}>
              {item.icon}
            </NavIcon>
            <NavTitle>{item.title}</NavTitle>
          </NavItem>
          }else{
            return <NavItem key={item.title} onClick={() => setActiveIcon(item.title)}>
          <NavIcon style={{ color: item.title === activeIcon && '#3773f5' }}>
            {item.icon}
          </NavIcon>
          <NavTitle>{item.title}</NavTitle>
        </NavItem>
          }
        })
        
      }

      
     <div className='container'>
      <p style={{marginLeft:78, marginTop:-30}}>  
       <logo > </logo> Bitcoin</p>

       <p style={{marginLeft:78, marginTop:-15}}>
       Ethereum</p>

       <p style={{marginLeft:78, marginTop:-12}}>
       Binance Usd</p>
     {/* <button onClick={'http://localhost:3001/'} style={{ backgroundColor: '#000', color: '#fff', marginLeft:32,marginTop:10, fontSize:40, cursor:'pointer' }}>
      <Logo></Logo> News</button> */}
     </div>,
     


      </NavItemsContainer>
    </Wrapper>
   


  )

  
}

export default Sidebar

const Wrapper = styled.div`
  height: 100%;
  border-right: 1px solid #282b2f;
  width: calc(22rem - 16px - 16px);
  /* TRouBLe */
  padding: 0 1rem;
`
// const Btc = styled.div
// width:24%;
// `

const LogoContainer = styled.div`
  /* TRouBLe */
  margin: 1.5rem 0;
`

const Logo = styled.div`
  width: 44%;
  object-fit: contain;
  margin-left: 1.5rem;
`

const NavItemsContainer = styled.div`
  margin-top: 3rem;

  &:hover {
    cursor: pointer;
  }
`

const NavItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  font-weight: 500;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
  height: 4rem;

  &:hover {
    background-color: #141519;
  }
`

const NavIcon = styled.div`
  background-color: #141519;
  padding: 0.7rem;
  border-radius: 50%;
  margin: 0 1rem;
  display: grid;
  place-items: center;
`

const NavTitle = styled.div``



