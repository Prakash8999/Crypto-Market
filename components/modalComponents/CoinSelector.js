import { useState } from 'react'
import styled from 'styled-components'
import CoinItem from './CoinItem'

const tempFromAddress = '0x3c7b05D912D6387CDbF07DB6419BB71C71FB4c0a'

const CoinSelector = ({
  setAction,
  selectedToken,
  setSelectedToken,
  sanityTokens,
  twTokens,
  walletAddress,
}) => {
  const [sender] = useState(walletAddress)

  return (
    <Wrapper>
      <Title>Select asset</Title>
      <CoinList>
        {sanityTokens.map(token => (
          <CoinItem
            key={token.name}
            token={token}
            sender={sender}
            selectedToken={selectedToken}
            setAction={setAction}
            setSelectedToken={setSelectedToken}
            sanityTokens={sanityTokens}
            twTokens={twTokens}
          />
        ))}
      </CoinList>
    </Wrapper>
  )
}

export default CoinSelector

const Wrapper = styled.div``
const Title = styled.div`
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`
const CoinList = styled.div`
  display: flex;
  flex-direction: column;
`
