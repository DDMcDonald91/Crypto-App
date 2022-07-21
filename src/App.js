import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Coins from './Components/Coins';
import Navigation from './Components/Navigation';

function App() {
  const [coins, setCoins] = useState([]);
  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"

  useEffect(() => {
    axios.get(url)
    .then((res) => {
      setCoins(res.data)
      let firstCoin = res.data[0]
      console.log(coins, firstCoin)
    }).catch((error) => {
      console.log(error)
    })
  }, [])


  if(!coins) {
    return(
     <p>Loading....</p>
    )
  } else {
  return (
    <>
    <Navigation />
    <Container className="App">
     <Coins coins={coins} />
    </Container>
    </>
  );
  }
}

export default App;
