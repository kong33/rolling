import Input from '../../components/Input/Input';
import Option from '../../components/Option/Option';
import styles from './Post.module.scss';
import { Button, ButtonToggle } from '../../components/Button';
import { BUTTON_SIZE, BUTTON_TYPE } from '../../constants/button';
//import useFetch from '../../hooks/useFetch';
//import Layout from '../layout'

export default function PostPage() {
  const LABEL = '배경화면을 선택해 주세요';
  const DESCRIPTION = '컬러를 선택하거나, 이미지를 선택할 수 있습니다.';
  // const URL = '/2-7/recipients/';
  // const postBody = {
  //   team: null,
  //   name: null,
  //   backgroundCoor: null,
  //   backgroundImageURL: null,
  // };
  //const A = useFetch(URL, 'POST', postBody);

  return (
    // <Layout>
    <form action="">
      <div className={styles.div}>
        <Input
          placeholder="받는 사람 이름을 입력해 주세요"
          errorMassage="필수 항목입니다."
          label="To."
        />
        <h1 className={styles.h1}>{LABEL}</h1>
        <p className={styles.p}>{DESCRIPTION}</p>
        <ButtonToggle textLeft="컬러" textRight="이미지" />
        <Option type="color" />
        <Button
          type={BUTTON_TYPE.submit}
          size={BUTTON_SIZE.xl}
          // children={'생성하기'}
        />
      </div>
    </form>
    //</Layout>
  );
}
