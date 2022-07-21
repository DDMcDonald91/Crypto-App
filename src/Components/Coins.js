import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import CoinItem from './CoinItem';

export default function Coins(props) {
  return (
    <Container style={{width: '90vw'}}>
        <Row>
            <Row style={{margin: '10px auto'}}>
                <Col className='heading'><p>#</p></Col>
                <Col><p className='coin-name'>Coin</p></Col>
                <Col><p>Current Price</p></Col>
                <Col><p>24hr Changes</p></Col>
                <Col><p className='hide-mobile'>Total Volume</p></Col>
                <Col><p className='hide-mobile'>Market Cap</p></Col>
            </Row>
            {props.coins.map(coins => {
                return(
                    <CoinItem coins={coins} key={coins.id} />
                )
            })}
        </Row>
    </Container>
  )
}
