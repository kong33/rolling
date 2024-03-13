import styles from './Avatar.module.scss';
import avatarImg from '../../assets/images/avatar-default.png';

const SIZE = {
  sm: 'sm', // 56px
  md: 'md', // 80px
};

function Avatar({
  src = avatarImg,
  alt = '기본 프로필',
  size = SIZE.sm,
  className,
  onClick,
}) {
  const classNames = `${styles.avatar} ${styles[size]} ${className || ''}`;

  const handleImgError = (e) => {
    e.target.src = avatarImg;
  };

  return (
    <img
      src={src}
      alt={alt}
      className={classNames}
      onError={handleImgError}
      onClick={onClick}
    />
  );
}

export default Avatar;
