import React from 'react';
import millify from 'millify';
import {Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi';
import { Cryptocurrencies, News} from '../components';

const { Title }= Typography;

const Homepage = () => {
    const { data, isFetching } = useGetCryptosQuery(10);
    const globalStats = data?.data?.stats;
  
    if (isFetching) return ' Loading.........';
  
    return (
      <>
        <Title level={2} className="heading">Global Crypto Stats</Title>
        <Row gutter={[32, 32]}>
          <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total} /></Col>
          <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} /></Col>
          <Col span={12}><Statistic title="Total Market Cap:" value={`$${millify(globalStats.totalMarketCap)}`} /></Col>
          <Col span={12}><Statistic title="Total 24h Volume" value={`$${millify(globalStats.total24hVolume)}`} /></Col>
          <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total} /></Col>
          <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} /></Col>
        </Row>
        <div className="home-heading-container">
          <Title level={2} className="home-title">Top 10 Cryptos In The World</Title>
          <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show more</Link></Title>
        </div>
        <Cryptocurrencies simplified />
        <div className="home-heading-container">
          <Title level={2} className="home-title">Latest Crypto News</Title>
          <Title level={3}><Link to="/news">Show more</Link></Title>
        </div>
        <News simplified />
      </>
    );
  };

// const Homepage = () => {
//     const { data, isFetching } = useGetCryptosQuery();
//     if(isFetching) return ' Loading.........';

//     return (
//         <>
//         {console.log([data])}
//             <Title level={2} className="heading">Global Crypto Stats</Title>
//             <Row>
//                 <Col span={12} ><Statistic title="Total Cryptocurrencies" value={data[0].coins_count} /></Col>
//                 <Col span={12} ><Statistic title="Total Markets" value={millify(data[0].active_markets)} /></Col>
//                 <Col span={12} ><Statistic title="Total Market Cap" value={millify(data[0].total_mcap)} /></Col>
//                 <Col span={12} ><Statistic title="Total 24h Volume" value={millify(data[0].total_volume)} /></Col>
//                 <Col span={12} ><Statistic title="BTC Dominance" value={`${data[0].btc_d}%`} /></Col>
//                 <Col span={12} ><Statistic title="ETH Dominance" value={`${data[0].eth_d}%`} /></Col>
             
                
//             </Row>
//             <div className="home-heading-container">
//                     <Title level={2} className="home-title">Top 10 Cryptocurrencies in the world</Title>
//                     <Title level={3} className="show-more"><Link to ="/cryptocurrencies">Show More</Link></Title>
//             </div>
//             <Cryptocurrencies simplified />
//             <div className="home-heading-container">
//                     <Title level={2} className="home-title">Latest Crypto News</Title>
//                     <Title level={3} className="show-more"><Link to ="/news">Show More</Link></Title>
//             </div>
//             <News simplified />
//         </>
//     )
// }

export default Homepage;
