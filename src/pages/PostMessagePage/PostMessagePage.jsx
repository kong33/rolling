import { useNavigate, useParams } from 'react-router-dom';
import styles from './PostMessagePage.module.scss';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ReactDraft } from '../../components/ReactDraft';
import { Dropdown } from '../../components/Dropdown';
import ProfileImage from '../../components/ProfileImage/ProfileImage';
import useMutate from '../../hooks/useMutate';
import ErrorPage from '../ErrorPage/ErrorPage';
import {
  RELATIONSHIPS,
  FONTS,
  TEAM,
  DEFAULT_PROFILE_URL,
} from '../../constants';

export default function PostMessagePage() {
  const { recipientId } = useParams();
  const navigate = useNavigate();
  const URL = `/${TEAM}/recipients/${recipientId}/messages/`;
  const { mutate } = useMutate(URL);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      sender: e.target.sender.value || null,
      team: TEAM,
      recipientId: recipientId,
      profileImageURL: e.target.profileImageURL.value || DEFAULT_PROFILE_URL,
      relationship: e.target.relationship.value || null,
      content: e.target.content.value || null,
      font: e.target.font.value || null,
    };
    mutate(formData, {
      onSuccess: () => {
        navigate(`/post/${recipientId}`);
      },
      onError: () => {
        return <ErrorPage />;
      },
    });
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
          <ProfileImage />
        </div>
        <div className={styles.box}>
          <Dropdown
            label="상대와의 관계"
            inputName="relationship"
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
          <Dropdown label="폰트 선택" inputName="font" options={FONTS} />
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
