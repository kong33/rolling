import { useNavigate, useParams } from 'react-router-dom';
import styles from './PostMessagePage.module.scss';
import useFetch from '../../hooks/useFetch';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ReactDraft } from '../../components/ReactDraft';
import { Avatar } from '../../components/Avatar';
import { Dropdown } from '../../components/Dropdown';

// TO-DO

// 1
// "https://rolling-api.vercel.app/2-7/recipients/2298/"에서 데이터가 조회되지 않으면 useNavigate를 통해서 루트 페이지로 이동.
// 존재하는 id로 요청 보내면 { "id": 2298, ... } 데이터가 도착한다.
// 존재하지 않는 id로 요청 보내면 { "detail": "Not found." } 데이터가 도착한다.
// id로 요청을 보내서 response에 id가 존재하지 않으면 페이지 이동.

// App.jsx에 추가할 것
// <Route path="post/:recipientId/message" element={<PostMessagePage />} />

const RELATIONSHIPS = ['지인', '친구', '동료', '가족'];
const FONTS = ['Noto Sans', 'Pretendard', '나눔명조', '나눔손글씨 손편체'];

function PostMessagePage() {
  const { recipientId } = useParams();
  const navigate = useNavigate();
  const [data, isLoading] = useFetch(`/2-7/recipients/${recipientId}/`);

  // You should call navigate() in a React.useEffect(), not when your component is first rendered.
  // useFetch에서 navigate를 담을 수 있게 변경 필요.
  if (!isLoading && !data) {
    navigate('/');
  }

  return (
    <>
      <form className={styles.container}>
        <div className={styles.box}>
          <label htmlFor="sender" className={styles.label}>
            From.
          </label>
          <Input
            id="sender"
            placeholder="이름을 입력해 주세요."
            errorMassage="이름을 입력해 주세요."
            name="sender"
          />
        </div>
        <div className={styles.box}>
          <label htmlFor="sender" className={styles.label}>
            프로필 이미지
          </label>
          <div>
            <Avatar size="md" />
          </div>
          <div>{/* TODO: 프로필 이미지를 선택해주세요! */}</div>
        </div>
        <div className={styles.box}>
          <Dropdown
            label="상대와의 관계"
            name="relationship"
            placeholders={RELATIONSHIPS}
          />
        </div>
        <div className={styles.box}>
          <label htmlFor="sender" className={styles.label}>
            내용을 입력해 주세요
          </label>
          <ReactDraft />
        </div>
        <div className={styles.box}>
          <Dropdown label="폰트 선택" name="font" placeholders={FONTS} />
        </div>
        <div className={styles.box}>
          <Button size="xl">생성하기</Button>
        </div>
      </form>
    </>
  );
}

export default PostMessagePage;
