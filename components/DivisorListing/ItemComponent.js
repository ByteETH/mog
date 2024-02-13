import Image from 'next/image';

export default function BoxItem({srcPath, w, h}) {
  return (
    <>
      <div className="boxItem">
        <div className="inBox">
          <div><img src={srcPath} width={w} height={h} alt=''/></div>
        </div>
      </div>

      <style jsx>{`
        .boxItem {
          width: 100%;
          height: 100px;
        }

        .inBox {
          width: 95%;
          height: 90%;
          border: 1px solid rgba(255,255,255,0.5);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        .inBox div {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

      `}</style>
    </>
  );
}
