import point1Img from '../../assets/images/landing1.png';
import point2Img from '../../assets/images/landing2.png';
import styles from './Landing.module.scss';

function LandingPage() {
  return (
    <>
      <main>
        <section>
          <left>
            <div className={styles.pointBtn}>Point.01</div>
            <div>누구나 손쉽게, 온라인 롤링 페이퍼를 만들 수 있어요</div>
            <div>로그인 없이 자유롭게 만들어요.</div>
          </left>
          <right>
            <img src={point1Img} alt="rolling card" />
          </right>
        </section>
        <section>
          <left>
            <img src={point2Img} alt="emozi" />
          </left>
          <right>
            <div className={styles.pointBtn}>Point.02</div>
            <div>서로에게 이모지로 감정을 표현해보세요</div>
            <div>롤링 페이퍼에 이모지를 추가할 수 있어요.</div>
          </right>
        </section>
      </main>
    </>
  );
}

export default LandingPage;
