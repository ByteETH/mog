import Image from "next/image";
import styles from "../src/styles/align.module.css";

export default function MainScreen({ name }) {
  return (
    <>
      <div className="mainContainer">
        <div className={`mainAlign ${styles.alignBox}`}>
          <div className="leftSide">
            <div className="title" id={styles.styleGradient}>
              <span>${name}</span>
            </div>
            <div className="desc">
              <span>{`With $MOG breaking ATH everyday and $TRUMP being trending everywhere $MOGGED was born in a perfect narrative. $MOGGED is a movement, it is a way of life.
Donald Trump is getting $MOGGED. América will get $MOGGED. U will get $MOGGED.`}</span>
            </div>
            <div className="buttonsContainer">
              <a
                href="https://app.uniswap.org/swap?&chain=mainnet&use=v2&outputCurrency=0x7D80B5dAA151c426dC73FDF9996b58CC0Db49D7C"
                target="_BLANK"
                rel="norefferer"
              >
                <button>BUY</button>
              </a>
              <a
                href="https://www.dextools.io/app/es/ether/pair-explorer/0x7D80B5dAA151c426dC73FDF9996b58CC0Db49D7C"
                target="_BLANK"
                rel="norefferer"
              >
                <button>CHART</button>
              </a>
            </div>
          </div>
          <div className="rightSide">
            <div className="imgContainer">
              <Image src="/logo.png" fill="responsive" alt="" />
            </div>
            <div className="gradiantBg">
              <div className="img">
                <Image src="/bg.png" fill="relative" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .mainContainer {
          width: 100%;
          min-height: 95vh;
          display: flex;
          align-items: flex-start;
          justify-content: center;
        }

        .mainAlign {
          min-height: 85vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .leftSide {
          width: 50%;
          height: 700px;
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          flex-direction: column;
          margin-top: 100px;
        }

        .title {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          width: 500px;
          height: 150px;
          position: relative;
        }

        .title span {
          font-weight: bold;
          font-family: var(--Row);
          font-size: 6rem;
        }

        .desc {
          font-size: 1.5rem;
          font-family: var(--Roboto);
          font-weight: 200;
          width: 90%;
          color: white;
          line-height: 1.5;
        }

        .buttonsContainer {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 50px;
          margin-top: 40px;
        }

        .buttonsContainer button {
          text-decoration: none;
          position: relative;
          border: none;
          font-size: 1rem;
          font-family: var(--Roboto);
          cursor: pointer;
          color: #fff;
          width: 200px;
          height: 30px;
          line-height: 2em;
          text-align: center;
          background: linear-gradient(90deg, white, red, red, white);
          background-size: 300%;
          border-radius: 10px;
          z-index: 1;
        }

        .buttonsContainer button:hover {
          animation: ani 8s linear infinite;
          border: none;
        }

        @keyframes ani {
          0% {
            background-position: 0%;
          }

          100% {
            background-position: 300%;
          }
        }

        .buttonsContainer button:before {
          content: "";
          position: absolute;
          top: -5px;
          left: -5px;
          right: -5px;
          bottom: -5px;
          z-index: -1;
          background: linear-gradient(90deg, red, white, white, red);
          background-size: 400%;
          border-radius: 10px;
          transition: 1s;
        }

        .buttonsContainer button:hover::before {
          filter: blur(20px);
        }

        .buttonsContainer button:active {
          background: linear-gradient(
            32deg,
            #03a9f4,
            #f441a5,
            #ffeb3b,
            #03a9f4
          );
        }

        .rightSide {
          width: 50%;
          height: 700px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .imgContainer {
          width: 500px;
          height: 500px;
          position: absolute;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          margin-top: -100px;
        }

        .gradiantBg {
          width: 30%;
          height: 90%;
          background: linear-gradient(90deg, #fff, #fff, #fff, #fff);
          filter: blur(120px);
          -webkit-filter: blur(120px);
          z-index: 1;
        }

        @media screen and (max-width: 1100px) {
          .mainAlign {
            flex-direction: column-reverse;
          }

          .mainAlign .leftSide {
            width: 95%;
            justify-content: flex-start;
            align-items: center;
            margin-top: 0px;
          }

          .mainAlign .rightSide {
            width: 95%;
            height: 400px;
          }

          .imgContainer {
            margin-top: 0px;
            width: 450px;
            height: 450px;
          }

          .gradiantBg {
            width: 40%;
            height: 100%;
          }

          .title {
            justify-content: center;
          }

          .desc {
            justify-content: center;
            text-align: center;
          }
        }

        @media screen and (max-width: 500px) {
          .desc {
            width: 100%;
            font-size: 1.25rem;
          }

          .buttonsContainer button {
            width: 120px;
            font-size: 0.9rem;
          }

          .imgContainer {
            width: 400px;
            height: 400px;
          }
        }

        @media screen and (max-width: 400px) {
          .imgContainer {
            width: 330px;
            height: 330px;
          }
        }
      `}</style>
    </>
  );
}
