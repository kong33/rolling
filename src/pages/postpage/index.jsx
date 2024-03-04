import Input from '../../components/Input/Input';
import Option from '../../components/Option/Option';
import styles from './Post.module.scss';
//import Layout from '../layout';
function PostPage() {
  const LABEL = '배경화면을 선택해 주세요';
  const DESCRIPTION = '컬러를 선택하거나, 이미지를 선택할 수 있습니다.';
  return (
    // <Layout>

    <div className={styles.div}>
      <Input placeholder="적어라" errorMassage="에러" label="To." />
      <h1 className={styles.h1}>{LABEL}</h1>
      <p className={styles.p}>{DESCRIPTION}</p>
      {/* 버튼 */}
      <Option type="color" />
    </div>

    //Layout>
  );
}

export default PostPage;
