import styles from '../src/styles/align.module.css';
import Image from 'next/image';

export default function Howtobuy(){
  return (
    <>
      <div className="htbContainer" id='htb'>
        <div className={`htbAlign ${styles.alignBox}`}>
        <div className="leftSide">
          <Image src='/htb.png' alt='' fill='responsive'/>
        </div>
          <div className="rightSide">
            <div className="title">
              <span className="about" id={`${styles.styleGradient}`}>
                HOW TO BUY
              </span>
            </div>
            <div className="desc">
              <span>{`To buy $ELMOG, first you will need a wallet, you can use Metamask, fill your wallet with ETH, you can buy it from Binance or Coinbase`}</span>
              <span>{`Swap ETH for $ELMOG, use Uniswap using or Contract Address`}</span>
            </div>
            <div className='btnContainer'><a href='https://metamask.io/' target='_BLANK' rel='noreferrer'><button>Get Metamask</button></a></div>
            <div className="gradiantBg">
              <div className="img">
                <Image src="/bg.png" fill="relative" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .htbContainer {
          width: 100%;
          height: min-content;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          flex-direction: column;
          padding-bottom: 150px;
        }

        .htbAlign {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 70px;
        }

        .htbAlign .rightSide {
          width: 50%;
          height: 100%;
          display: flex;
          align-items: flex-end;
          justify-content: flex-start;
          flex-direction: column;
          text-align: right;
          position: relative;
        }

        .htbAlign .leftSide {
          width: 550px;
          height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          margin-top: 20px;
          border-radius: 20px;
          overflow: hidden;
        }

        .title {
          width: 100%;
          height: min-content;
          display: flex;
          align-items: flex-start;
          justify-content: flex-end;
          line-height: 1;
          margin-top: 20px;
          padding-bottom: 30px;
          z-index: 2;
        }

        .desc {
          font-size: 1.2rem;
          font-family: var(--Roboto);
          font-weight: 200;
          width: 70%;
          color: white;
          display: flex;
          flex-direction: column;
          gap: 20px;
          z-index: 2;
        }

        .about {
          font-size: 4rem;
        }

        .btnContainer{
          width: 100%;
          height: min-content;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          margin-top: 50px;
          z-index: 2;
        }

        .btnContainer button{
          width: 200px;
          height: 35px;
          text-decoration: none;
          position: relative;
          border: none;
          font-size: 1rem;
          font-family: var(--Roboto);
          cursor: pointer;
          color: #fff;
          line-height: 2em;
          text-align: center;
          background: linear-gradient(90deg, white, #03e1ff, #dc1fff, white);
          background-size: 300%;
          border-radius: 10px;
          z-index: 1;
        }

        .btnContainer button:hover {
          animation: ani 8s linear infinite;
          border: none;
        }

        .gradiantBg {
          position: absolute;
          top: 50px;
          left: 250px;
          width: 50%;
          height: 50%;
          background: linear-gradient(90deg, #fff, #fff, #fff, #fff);
          filter: blur(120px);
          -webkit-filter: blur(120px);
          z-index: 1;
        }

        @keyframes ani {
          0% {
            background-position: 0%;
          }

          100% {
            background-position: 300%;
          }
        }

        .btnContainer button:before {
          content: "";
          position: absolute;
          top: -5px;
          left: -5px;
          right: -5px;
          bottom: -5px;
          z-index: -1;
          background: linear-gradient(
            90deg,
            #03e1ff,
            #dc1fff,
            #dc1fff,
            #03e1ff
          );
          background-size: 400%;
          border-radius: 10px;
          transition: 1s;
        }

        .btnContainer button:hover::before {
          filter: blur(20px);
        }

        .btnContainer button:active {
          background: linear-gradient(
            32deg,
            #03a9f4,
            #f441a5,
            #ffeb3b,
            #03a9f4
          );
        }

        @media screen and (max-width: 1000px) {
          .htbAlign {
            flex-direction: column-reverse;
          }

          .htbAlign .rightSide {
            width: 95%;
            justify-content: center;
            align-items: center;
            height: min-content;
          }

          .title {
            justify-content: center;
          }

          .desc {
            text-align: center;
            margin-top: 20px;
          }

          .btnContainer{
            justify-content: center;
          }

          .htbAlign .leftSide {
            margin-top: 0px;
          }
        }

        @media screen and (max-width: 500px) {
          .htbAlign .leftSide {
            width: 400px;
            height: 400px;
          }

          .about {
            font-size: 3rem;
            text-align: center;
          }

          .desc {
            font-size: 0.95rem;
          }
        }

        @media screen and (max-width: 400px) {
          .htbAlign .leftSide {
            width: 350px;
            height: 350px;
          }
        }
      `}</style>
    </>
  );
}