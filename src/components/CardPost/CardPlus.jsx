import style from './CardPostList.module.scss';
import PlusIcon from '../../assets/svg/Plus';

function CardPlus({ cardPlus }) {
  return (
    <article className={style.cardPost}>
      <button className={style.plusIcon} onClick={() => cardPlus()}>
        <PlusIcon />
      </button>
    </article>
  );
}

export default CardPlus;
