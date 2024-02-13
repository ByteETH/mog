import BoxItem from "./ItemComponent";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from 'react';
import { Bounce } from "react-awesome-reveal";
import styles from '../../src/styles/align.module.css'

export default function DivisorListing() {
  const [showAmount, setShowAmount] = useState(4);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: showAmount,
    slidesToScroll: 1,
    arrows : false,
    autoplay: true,
    autoplaySpeed: 1500
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1600) {
        setShowAmount(3);
      } if(window.innerWidth <= 1000){
        setShowAmount(2)
      } 
      if(window.innerWidth <= 600){
        setShowAmount(1)
      }
      
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <>
      <div className="carrouselContainer">
        <div className={`carrouselAlign ${styles.alignBox}`}>
        <Bounce duration={'800'}>
        <Slider {...settings}>
          <BoxItem srcPath={'/carrousel/birdeye.webp'} w={200} h={80} />
          <BoxItem srcPath={'/carrousel/coingecko.png'} w={200} h={80}/>
          <BoxItem srcPath={'/carrousel/coinmarketcap.png'} w={230} h={50} />
          <BoxItem srcPath={'/carrousel/dextools.png'} w={150} h={50} />
          <BoxItem srcPath={'/carrousel/raydium.png'} w={180} h={60} />
          <BoxItem srcPath={'/carrousel/dexscreener.png'} w={180} h={50} />
        </Slider>
        </Bounce>
        </div>
      </div>

      <style jsx>{`
            .carrouselContainer{
              width: 100%;
              height: 150px;
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 10px;
              z-index: 2;
              padding-top: 30px;
              margin-bottom: 100px;
              margin-top: -150px;
            }
            

            @media screen and (max-width: 1000px){

            }


        `}</style>
    </>
  );
}
