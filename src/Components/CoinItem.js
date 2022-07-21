import {Container, Row, Col, Image} from 'react-bootstrap';

export default function CoinItem(props) {
  return (
    <>
    <Container className='coin-item'>
        <Row style={{margin: '10px auto'}}>
            <Col>
            <p>{props.coins.name}</p>
            <p>{props.coins.symbol}</p>
            </Col>
            <Col>
            <Image src={props.coins.image} style={{height: 'auto', width: '70%'}} alt='' />
            </Col>
            <Col><p>{props.coins.current_price}</p></Col>
            <Col><p>{props.coins.price_change_percentage_24h}</p></Col>
            <Col className='hide-mobile'><p>{props.coins.total_volume}</p></Col>
            <Col className='hide-mobile'><p>{props.coins.market_cap}</p></Col>
        </Row>
    </Container>
    </>
  )
}
