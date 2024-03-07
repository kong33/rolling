import EmojiPicker from 'emoji-picker-react';
import Add24 from '../../../assets/svg/Add24';
import Button from '../../Button/Button/Button';
import styles from './AddEmoziBtn.module.scss';
import { useRef, useState } from 'react';

export default function AddEmoziBtn() {
  const [showAddEmozi, setShowAddEmozi] = useState(false);
  const [selectedEmozi, setSelectedEmozi] = useState('');

  const showAddEmoziRef = useRef();

  const handleEmoziSelect = (emoji) => {
    setSelectedEmozi(emoji);
  };

  const handleAddEmozi = () => {
    if (!showAddEmozi) {
      showAddEmoziRef.current.style.display = 'block';
      setShowAddEmozi(true);
    } else {
      showAddEmoziRef.current.style.display = 'none';
      setShowAddEmozi(false);
    }
  };

  // POST 함수 만들 예정
  // const postBody = {
  //   emoji: selectedEmozi.emoji,
  //   type: 'increase',
  // };

  console.log(selectedEmozi);

  return (
    <div>
      <Button
        type="button"
        styleType="outlined36"
        className={`${styles.addEmoziBtn} ${styles.btn}`}
        onClick={handleAddEmozi}
      >
        <Add24 />
        추가
      </Button>
      <div ref={showAddEmoziRef} className={styles.toggleBox}>
        <EmojiPicker onEmojiClick={handleEmoziSelect} />
      </div>
    </div>
  );
}
