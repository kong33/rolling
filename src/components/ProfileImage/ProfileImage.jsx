import Avatar from '../Avatar/Avartar';
import { useState } from 'react';
import styles from './ProfileImage.module.scss';
import useFetch from '../../hooks/useFetch';
import { SIZE } from '../../constants';
import { LoadingPage } from '../../pages/LoadingPage';

export default function ProfileImage() {
  //const [imageUrl, setImageUrl] = useState(''); // 내가 올린 ㅕurl
  const [choosedImg, setChoosedImg] = useState(''); // 있는 것 중에 choose
  const { data, isLoading } = useFetch('/profile-images/');
  if (isLoading || !data) return <LoadingPage />;
  const images = data.imageUrls;

  // const handleImageLoad = (e) => {
  //   const { files } = e.target;
  //   const uploadFile = files[0];
  //   const reader = new FileReader();
  //   reader.readAsDataURL(uploadFile);
  //   reader.onloadend = () => {
  //     setImageUrl(reader.result);
  //   };
  // };

  const handleClick = (image) => {
    setChoosedImg(image);
  };

  return (
    <div className={styles.div}>
      <Avatar src={choosedImg} size={SIZE.md} />
      <section className={styles.avatars}>
        {images?.map((image) => (
          <Avatar src={image} onClick={() => handleClick(image)} key={image} />
        ))}
      </section>
      {/* <input
        type="file"
        accept="image/*"
        onChange={handleImageLoad}
        className={styles.filesUpload}
      /> */}
      <input type="hidden" name="profileImageURL" value={choosedImg} />
    </div>
  );
}
