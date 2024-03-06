import Input from '../../components/Input/Input';
import Option from '../../components/Option/Option';
import styles from './Post.module.scss';
import { Button, ButtonToggle } from '../../components/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BUTTON_SIZE = {
  free: 'free', // width auto
  sm: 'sm', // width 92px
  md: 'md', // width 280px
  lg: 'lg', // width 320px
  xl: 'xl', // width 720px
  full: 'full', // width 100%
};

export default function PostPage() {
  const LABEL = '배경화면을 선택해 주세요';
  const DESCRIPTION = '컬러를 선택하거나, 이미지를 선택할 수 있습니다.';
  const URL = 'https://rolling-api.vercel.app/4-22/recipients/';
  const navigate = useNavigate();
  const [type, setType] = useState('color');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value || null,
      team: '4-22',
      backgroundColor: e.target.backgroundColor.value || 'beige',
      backgroundImageURL: e.target.backgroundImageURL.value || null,
    };

    try {
      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('응답실패');
      }
      const dataJson = await response.json();
      navigate(`/post/${dataJson.id}`);
    } catch (error) {
      alert(error);
    }
  };

  const handleClick = (e) => {
    if (e === 'left') setType('color');
    else setType('image');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.div}>
        <Input
          placeholder="받는 사람 이름을 입력해 주세요"
          errorMassage="필수 항목입니다."
          label="To."
          name="name"
        />
        <div className={styles.textWrapper}>
          <h1 className={styles.h1}>{LABEL}</h1>
          <p className={styles.p}>{DESCRIPTION}</p>

          <ButtonToggle
            textLeft="컬러"
            textRight="이미지"
            onClick={handleClick}
            type="button"
          />
        </div>
        <Option type={type} />
        <input type="hidden" name="team" value="4-22" />
        <Button type="submit" size={BUTTON_SIZE.xl}>
          생성하기
        </Button>
      </div>
    </form>
  );
}
