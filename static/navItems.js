import {
  AiOutlinePieChart,
  AiOutlinePlusCircle,
  AiOutlineGift,
} from 'react-icons/ai'
import { BiTrendingUp } from 'react-icons/bi'
import { RiCoinsLine, RiNotification3Line } from 'react-icons/ri'
import { MdWeb } from 'react-icons/md'
import { BsPersonPlus } from 'react-icons/bs'
import {MdTrendingFlat } from 'react-icons/md'
// import {FaBitcoin} from 'react-icons/all'

import styled from 'styled-components'
import React from 'react'
import dog from '../assets/doge.png'
import solLogo from '../assets/sol.png'
import btcLogo from '../assets/btc.png'
import coins from '../static/coins'


export const navItems = [
  {
     
    title: 'Assets',
    icon: <AiOutlinePieChart />,
  },
  {
    title: 'Trade',
    icon: <BiTrendingUp />,
    url: "http://localhost:3001/"
  },
  
  {
    title: 'News',
    icon: <MdTrendingFlat/>,
    url:"http://localhost:3002/"
  },
  // {
  //   title: 'Bitcoin',
  //   icon: <FaBitcoin/>,
  // },
  {
    title: 'Tending',
    icon: <BiTrendingUp />,
  
  },
  
]

