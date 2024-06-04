import styles from "../src/styles/align.module.css";
import Image from 'next/image';

export default function Tokenomics() {
  return (
    <>
      <div className="tknContainer" id='tokenomics'>
        <div className={`tknAlign ${styles.alignBox}`}>
          <div className="title">
            <span id={styles.styleGradient}>TOKENOMICS</span>
          </div>

          <div className="bodyTokenomics">
          <div className="leftSide">
            <div className="imgContainer"><Image src='/tknm.png' alt='' fill='responsive'/></div>
          </div>
          <div className="rightSide">
            <div className="boxTxt">
              <span>Total Supply: 1 Billion</span>
            </div>
            <div className="boxTxt">
              <span>Chain: Ethereum</span>
            </div>
            <div className="boxTxt">
              <span>Symbol: $ELMOG</span>
            </div>
            <div className="boxTxt lastBox">
              <span>Total Supply: 1 Billion</span>
              <span>0/0 TAX</span>
              <span>Liquidity Burned</span>
              <span>Ownership Revoked</span>
            </div>
          </div>
        </div>
        </div>
      </div>

      <style jsx>{`
        .tknContainer {
          width: 100%;
          height: min-content;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          flex-direction: column;
          margin-top: 50px;
          padding-bottom: 150px;
        }

        .tknAlign {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }

        .title {
          width: 100%;
          height: min-content;
          display: flex;
          align-items: center;
          justify-content: center;
          line-height: 1;
          z-index: 2;
          margin-bottom: 50px;
        }

        .title span{
          font-size: 5rem;
        }



        .bodyTokenomics {
          width: 100%;
          height: min-content;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 100px;
          margin-top: 50px;
        }

        .imgContainer{
          width: 500px;
          height: 500px;
          position: relative;
          border-radius: 20px;
          overflow: hidden;
        }

        .rightSide {
          height: 100%;
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          flex-direction: column;
          gap: 20px;
          margin-top: 0px;
        }

        .boxTxt {
          border: 2px solid rgba(255, 255, 255, 0.5);
          padding: 10px;
          border-radius: 10px;
          font-family: var(--Roboto);
          font-size: 1.5rem;
          font-weight: bold;
          color: white;
          padding-left: 20px;
          padding-right: 20px;
        }

        .lastBox {
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          flex-direction: column;
        }

        @media screen and (max-width: 1000px){

          .title{
            margin-top: -90px;
          }
          .bodyTokenomics{
            flex-direction: column;
          }

          .rightSide{
            justify-content: center;
            align-items: center;
            margin-top: -50px;
          }

          .boxTxt{
            width: 350px;
            text-align: center;
          }

          .lastBox{
            align-items: center;
          }
        }

        @media screen and (max-width: 550px){
          .title span{
            font-size: 3.5rem;
          }
        }

        @media screen and (max-width: 500px){
          .imgContainer{
            width: 400px;
            height: 400px;
          }
        }

        
        @media screen and (max-width: 400px){
          .imgContainer{
            width: 350px;
            height: 350px;
          }
        }
      `}</style>
    </>
  );
}
