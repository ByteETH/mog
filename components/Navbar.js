import Link from 'next/link';
import { MdMenu, MdMenuOpen } from 'react-icons/md';
import { useState } from "react";
import styles from '../src/styles/align.module.css'

export default function Navbar({name}) {
  const [openMobileMenu, setOpenMobileMenu] = useState(true);

  const n = () => {
    setOpenMobileMenu(!openMobileMenu);
    let box = document.getElementById('mobilePopup');
    // if (openMobileMenu) {
    //   box.classList.add('mobilePopupShow');
    // } else {
    //   box.classList.remove('mobilePopupShow');
    // }
  };

  return (
    <>
      <div className="navbarContainer" id='home'>
        <div className={`navbarAlign ${styles.alignBox}`}>
          <div className="leftSide">
            <div className="text">
              <span id={styles.styleGradient}>{name}</span>
            </div>
          </div>

          <div className="rightSide">
            <Link href='#home'><span>Home</span></Link>
            <Link href='#htb'><span>How to buy</span></Link>
            <Link href='#tokenomics'><span>Tokenomics</span></Link>
            <span className='last'><a href='https://t.me/#' rel='noreferrer' target="_BLANK">Join the Community!</a></span>
          </div>
          <div className='rightSideMobile' onClick={n}>
          {openMobileMenu ? (
            <MdMenu color='white' size='35' />
          ) : (
            <MdMenuOpen color='white' size='35' />
          )}
          </div>
        </div>
      </div>

      <div className='mobilePopup' id='mobilePopup'></div>
      <style jsx>{`
        .navbarContainer {
          width: 100%;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mobilePopup {
          display: none;
          width: 100%;
          height: 500px;
          z-index: 10 !important;
        }

        .mobilePopupShow {
          display: block;
          position: fixed;
          top: 0px;
        }

        .navbarAlign {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .rightSideMobile{
          display: none;
        }

        .navbarContainer .leftSide {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }

        .leftSide .logo {
          border-radius: 100%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: white;
          margin-left: 10px;
        }

        .text span {
          font-weight: bold;
          font-family: var(--Row);
          font-size: 1.5rem;
          letter-spacing: 1px;
        }

        .rightSide {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 40px;
          font-family: var(--Roboto);
          font-size: 1.1rem;
        }

        .rightSide span{
          cursor: pointer;
          color: white;
          text-underline-offset: 3px;
        }

        .rightSide span:hover{
          transition: 0.2s ease-out;
          text-decoration: underline;
          color: white;
        }

        .rightSide .last{
          border: 2px solid white;
          border-radius: 10px;
          padding: 10px;
          padding-left: 15px;
          padding-right: 15px;
          cursor: pointer;
        }

        .rightSide .last:hover{
          background-color: purple;
          color: white;
          transition: 0.2s ease-out;
          text-decoration: none;
          background-image: linear-gradient(45deg, #03E1FF, #DC1FFF);
        }


        @media screen and (max-width: 1000px) {

          .rightSide{
            display: none;
          }

          .rightSideMobile{
            display: block;
          }
        }

        @media screen and (max-width: 500px){

          .text{
            margin-top: 0px;
          }
          .text span{
            font-size: 1.3rem;
          }
        }
      `}</style>
    </>
  );
}
