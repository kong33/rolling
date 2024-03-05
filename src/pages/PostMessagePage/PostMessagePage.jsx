import { useNavigate, useParams } from 'react-router-dom';
import styles from './PostMessagePage.module.scss';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ReactDraft } from '../../components/ReactDraft';
// import { Avatar } from '../../components/Avatar';
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
  const URL = `https://rolling-api.vercel.app/4-22/recipients/${recipientId}/messages/`;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      sender: e.target.sender.value || null,
      team: '4-22',
      recipientId: recipientId,
      profileImageURL: e.target.profileImageURL.value || null,
      relationship: e.target.relationship.value || null,
      content: e.target.content.value || null,
      font: e.target.font.value || null,
    };

    try {
      const response = await fetch(URL, {
        method: 'POST',
        header: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('실패');
      }
      const dataJson = await response.json();
      navigate(`post/${dataJson.id}`);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <form className={styles.container} onSubmit={handleSubmit}>
        <div className={styles.box}>
          <label htmlFor="sender" className={styles.label}>
            From.
          </label>
          <Input
            id="sender"
            placeholder="이름을 입력해 주세요."
            errorMassage="필수 항목입니다."
            name="sender"
          />
        </div>
        <div className={styles.box}>
          <label htmlFor="sender" className={styles.label}>
            프로필 이미지
          </label>
          {/* <div>
            <Avatar size="md" />
          </div> */}
          <div>{/* TODO: 프로필 이미지를 선택해주세요! */}</div>
        </div>
        <div className={styles.box}>
          <Dropdown
            label="상대와의 관계"
            name="relationship"
            placeholders={RELATIONSHIPS}
            options={RELATIONSHIPS}
          />
        </div>
        <div className={styles.box}>
          <label htmlFor="sender" className={styles.label}>
            내용을 입력해 주세요
          </label>
          <ReactDraft />
        </div>
        <div className={styles.box}>
          <Dropdown
            label="폰트 선택"
            name="font"
            placeholders={FONTS}
            options={FONTS}
          />
        </div>
        <div className={styles.box}>
          <input type="hidden" name="team" value="4-22" />
          <Button size="xl" type="submit">
            생성하기
          </Button>
        </div>
      </form>
    </>
  );
}

export default PostMessagePage;
