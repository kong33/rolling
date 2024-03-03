import Input from '../../components/Input/Input';
import Option from '../../components/Option/Option';
import styles from './Post.module.scss';
//import Layout from '../layout';
function PostPage() {
  return (
    // <Layout>
    <div className={styles.div}>
      <Input placeholder="적어라" errorMassage="에러" label="To." />
      <Option type="color" />
    </div>
    //Layout>
  );
}

export default PostPage;
