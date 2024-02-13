import styles from "../src/styles/align.module.css";
import Image from 'next/image';

export default function Footer() {
  return (
    <>
      <div className="footerContainer">
      <div className="gradiantBg">
              <div className="img">
                <Image src="/bg.png" fill="relative" alt="" />
              </div>
            </div>
        <div className={`footerAlign ${styles.alignBox}`}>
          <div className='title'><span id={styles.styleGradient}>$MOG</span></div>
          <div className='socialsContainer'>
          <a href="https://t.me/" target="_BLANK" rel="noreferrer">
            <div className='socialBox'>
              <Image src="/telegram.png" width="50" height="50" alt="" />
            </div>
          </a>
          <a
            href="https://twitter.com/"
            target="_BLANK"
            rel="noreferrer"
          >
            <div className='socialBox'>
              <Image src="/x.png" width="60" height="60" alt="" />
            </div>
          </a>
          <a
            href="https://dexscreener.com/solana/"
            target="_BLANK"
            rel="noreferrer"
          >
            <div className='socialBox'>
              <Image
                src="/dexscreener.png"
                width="60"
                height="60"
                alt=""
              />
            </div>
          </a>
					<a
            href="https://www.dextools.io/app/es/solana/pair-explorer/"
            target="_BLANK"
            rel="noreferrer"
          >
            <div className='socialBox'>
              <Image
                src="/dx.png"
                width="45"
                height="50"
                alt=""
              />
            </div>
          </a>
					<a
            href="https://raydium.io/swap/?outputCurrency="
            target="_BLANK"
            rel="noreferrer"
          >
            <div className='socialBox'>
              <Image
                src="/raydium.webp"
                width="50"
                height="50"
                alt=""
              />
            </div>
          </a>
					
        </div>
        </div>
      </div>

      <style jsx>{`
        .footerContainer {
          width: 100%;
          height: 300px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          flex-direction: column;
          margin-top: 50px;
          padding-bottom: 150px;
          position: relative;
        }

        .footerAlign {
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
          margin-top: 50px;
        }

        .title span{
          font-size: 5rem;
        }

        .socialsContainer {
          width: 100%;
          height: min-content;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 50px;
					z-index: 1;
          margin-top: -30px;
        }

        .socialsContainer .socialBox {
          width: 70px;
          height: 70px;
          border-radius: 5px;
          background-color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
        }

        .socialBox:hover {
          margin-top: -10px;
          transition: 0.2s ease-out;
          cursor: pointer;
        }

        .gradiantBg {
          position: absolute;
          width: 50%;
          height: 90%;
          background: linear-gradient(90deg, #fff, #fff, #fff, #fff);
          filter: blur(200px);
          -webkit-filter: blur(200px);
          z-index: 1;
        }

        @media screen and (max-width: 750px){

				.socialsContainer {
            gap: 40px;
          }

        }

				@media screen and (max-width: 500px){
					.socialsContainer{
						gap: 10px;
						flex-wrap: wrap;
					}

					.socialsContainer .socialBox {
						width: 60px;
						height: 60px;
					}
				}
      `}</style>
    </>
  );
}