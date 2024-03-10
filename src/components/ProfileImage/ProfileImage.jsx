import Avatar from '../Avatar/Avartar';
import { useState } from 'react';
import styles from './ProfileImage.module.scss';
import { SIZE, PROFILEIMAGE } from '../../constants';

export default function ProfileImage() {
  const [choosedImg, setChoosedImg] = useState(''); // 있는 것 중에 choose

  const handleClick = (image) => {
    setChoosedImg(image);
  };

  return (
    <div className={styles.div}>
      <Avatar src={choosedImg} size={SIZE.md} />
      <section className={styles.avatars}>
        {PROFILEIMAGE?.map((image) => (
          <Avatar src={image} onClick={() => handleClick(image)} key={image} />
        ))}
      </section>
      <input type="hidden" name="profileImageURL" value={choosedImg} />
    </div>
  );
}
