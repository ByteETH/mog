import Image from 'next/image';
import styles from '../src/styles/align.module.css';

export default function AboutSection({name}){
  return (
    <>
      <div className="aboutContainer">
        <div className={`aboutAlign ${styles.alignBox}`}>
          <div className='leftSide'>
          <div className="gradiantBg">
              <div className="img">
                <Image src="/bg.png" fill="relative" alt="" />
              </div>
            </div>
            <div className="title">
              <span className='about' id={`${styles.styleGradient}`}>ABOUT ${name}</span>
            </div>
            <div className='desc'>
              <span>{`$ELMOG is the internet's first culture coin.`}</span>
              <span>{`But it's more than just a coin, it's tokenized winning. $ELMOG is effortless cosmic domination and unaduletared success distilled into computer photons.`}</span>
              <span>{`Elmog is a movement, it is a way of life. Since day one, Elmog has built its community organically from the ground-up with one goal in mind: to be a culture-defining force in the crypto ecosystem.`}</span>
            </div>
          </div>
          <div className='rightSide'>
            <Image src='/about.png' fill='responsive' alt=''/>
          </div>
        </div>
      </div>

      <style jsx>{`
        .aboutContainer {
          width: 100%;
          min-height: min-content;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          flex-direction: column;
          padding-bottom: 150px;
        }

        .aboutAlign {
          display: flex;
          align-items: center;
          justify-content: center;
          gap:70px;
        }

        .aboutAlign .leftSide{
          width: 50%;
          height: 100%;
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          flex-direction: column;
          position: relative;
        }

        .gradiantBg {
          position: absolute;
          top: 150px;
          right: 200px;
          width: 50%;
          height: 50%;
          background: linear-gradient(90deg, #fff, #fff, #fff, #fff);
          filter: blur(120px);
          -webkit-filter: blur(120px);
          z-index: 1;
        }

        .aboutAlign .rightSide{
          width: 500px;
          height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 20px;
          position: relative;
          border-radius: 20px;
          overflow: hidden;
        }

        .title {
          width: 100%;
          height: min-content;
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          line-height: 1;
          margin-top: 20px;
          padding-bottom: 30px;
          z-index: 2;
        }

        .desc{
          font-size: 1.2rem;
          font-family: var(--Roboto);
          font-weight: 200;
          width: 90%;
          color: white;
          display: flex;
          flex-direction: column;
          gap: 20px;
          z-index: 2;
        }

        .about{
          font-size: 4rem;
        }

        @media screen and (max-width: 1000px){
          .aboutAlign{
            flex-direction: column;
          }

          .aboutAlign .leftSide{
            width: 95%;
            justify-content: center;
            align-items: center;
            height: min-content;
          }

          .title{
            justify-content: center;
          }

          .desc{
            text-align: center;
            margin-top: 20px;
          }

          .aboutAlign .rightSide{
            margin-top: 0px;
          }
        }

        @media screen and (max-width: 500px){
          .aboutAlign .rightSide{
            width: 400px;
            height: 400px;
          }

          .about{
            font-size: 3rem;
            text-align: center;
          }

          .desc{
            font-size: 0.95rem;
          }
        }

        @media screen and (max-width: 400px){
          .aboutAlign .rightSide{
            width: 350px;
            height: 350px;
          }
        }
      `}</style>
    </>
  );
}