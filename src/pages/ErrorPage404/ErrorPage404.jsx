import errorImage from '../../assets/images/errorPage.png';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';
import styles from './ErrorPage404.module.scss';
export default function ErrorPage404() {
  return (
    <div className={styles.div}>
      <img src={errorImage} alt="에러페이지" className={styles.img} />
      <Link to="/">
        <Button size="md">돌아가기</Button>
      </Link>
    </div>
  );
}
