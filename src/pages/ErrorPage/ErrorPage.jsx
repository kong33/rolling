import styles from './ErrorPage.module.scss';
import errorPageImg from '../../assets/images/errorPage.png';
import { Button } from '../../components/Button';
export default function ErrorPage() {
  return (
    <div className={styles.div}>
      <img className={styles.img} src={errorPageImg} alt="에러페이지" />
      <Button size="lg">돌아가기</Button>
    </div>
  );
}
