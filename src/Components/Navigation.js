import { Navbar, Container, Row, Col } from 'react-bootstrap/'
import {FaCoins} from 'react-icons/fa';

export default function Navigation() {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <FaCoins style={{marginRight: '15px'}} />Crypto Tracker
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}
