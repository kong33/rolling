import style from './CardPost.module.scss';
import plusIcon from '../../assets/images/plus.svg';

function CardPlus({ cardPlus }) {
  return (
    <article className={style.cardPost}>
      <button className={style.plusIcon} onClick={() => cardPlus()}>
        <img src={plusIcon} alt="플러스 이미지" />
      </button>
    </article>
  );
}

export default CardPlus;
