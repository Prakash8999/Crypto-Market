import Header from '../components/Header'
import styled from 'styled-components'
import Main from '../components/Main'
import Sidebar from '../components/Sidebar'
import { ThirdwebSDK } from '@3rdweb/sdk'
import { ethers } from 'ethers'
import { useEffect, useState } from 'react'

const Dashboard = ({ address }) => {
  const [twTokens, setTwTokens] = useState([])
  const [sanityTokens, setSanityTokens] = useState([])

  useEffect(() => {
    getCoins()
  }, [])

  const getCoins = async () => {
    try {
      const coins = await fetch(
        "https://07w1ymy0.api.sanity.io/v2021-03-25/data/query/production?query=*%5B_type%3D%3D'coins'%5D%7B%0A%20%20name%2C%0A%20%20usdprice%2C%0A%20%20contractAddress%2C%0A%20%20sysbol%2C%0A%20%20logo%0A%7D",
      )
      const tempSanityTokens = await coins.json()

      setSanityTokens(tempSanityTokens.result)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (sanityTokens) {
      const sdk = new ThirdwebSDK(
        new ethers.Wallet(
          process.env.NEXT_PUBLIC_METAMASK_KEY,
          ethers.getDefaultProvider('https://matic-mumbai.chainstacklabs.com'),
        ),
      )

      sanityTokens.map(tokenItem => {
        const currentToken = sdk.getTokenModule(tokenItem.contractAddress)
        setTwTokens(prevState => [...prevState, currentToken])
      })
    }
  }, [sanityTokens])

  return (
    <Wrapper>
      <Sidebar />
      <MainContainer>
        <Header
          twTokens={twTokens && twTokens}
          sanityTokens={sanityTokens && sanityTokens}
          walletAddress={address && address}
        />
        <Main
          twTokens={twTokens}
          sanityTokens={sanityTokens}
          walletAddress={address}
        />
      </MainContainer>
    </Wrapper>
  )
}

export default Dashboard

export async function getServerSideProps(context) {}

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100vw;
  background-color: #0a0b0d;
  color: white;
`

const MainContainer = styled.div`
  flex: 1;
`
