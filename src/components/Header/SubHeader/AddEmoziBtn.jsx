import EmojiPicker from 'emoji-picker-react';
import Add24 from '../../../assets/svg/Add24';
import Button from '../../Button/Button/Button';
import styles from './AddEmoziBtn.module.scss';
import { useRef, useState } from 'react';
import useClickOutside from '../../../hooks/useClickOutside';
import useMutate from '../../../hooks/useMutate';
import { TEAM } from '../../../constants';
import { useParams } from 'react-router-dom';

export default function AddEmoziBtn() {
  const [showAddEmozi, setShowAddEmozi] = useState(false);
  const [selectedEmozi, setSelectedEmozi] = useState('');
  const showAddEmoziRef = useRef();
  const { recipientId } = useParams();
  const URL = `/${TEAM}/recipients/${recipientId}/reactions/`;
  const { mutate } = useMutate(URL);

  const handleEmoziSelect = (emoji) => {
    setSelectedEmozi(emoji);
    console.log(selectedEmozi.emoji);

    const formData = {
      emoji: selectedEmozi.emoji,
      type: 'increase',
    };

    mutate(formData, {
      onSuccess: () => {
        console.log('Success!');
      },
      onError: () => {
        console.log('Error!');
      },
    });
  };

  // Share Box 토글 함수
  const closeEmojiPicker = () => {
    showAddEmoziRef.current.style.display = 'none';
    setShowAddEmozi(false);
  };

  useClickOutside(showAddEmoziRef, closeEmojiPicker);

  const handleAddEmozi = () => {
    if (!showAddEmozi) {
      showAddEmoziRef.current.style.display = 'block';
      setShowAddEmozi(true);
    } else {
      showAddEmoziRef.current.style.display = 'none';
      setShowAddEmozi(false);
    }
  };

  return (
    <>
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
    </>
  );
}
