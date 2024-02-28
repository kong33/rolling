import styles from './ButtonToggle.module.scss';
import { useState } from 'react';

const ACTIVE_TYPE = {
  left: 'left',
  right: 'right',
};

function ButtonToggle({ onClick, textLeft = 'ON', textRight = 'OFF', active }) {
  const defaultActive = ACTIVE_TYPE[active] || ACTIVE_TYPE.left;
  const [activeSwitch, setActiveSwitch] = useState(defaultActive);
  const switchList = [
    { type: ACTIVE_TYPE.left, text: textLeft },
    { type: ACTIVE_TYPE.right, text: textRight },
  ];

  const handleClick = () => {
    const next =
      activeSwitch === ACTIVE_TYPE.left ? ACTIVE_TYPE.right : ACTIVE_TYPE.left;
    setActiveSwitch(next);
    if (typeof onClick !== 'function') return;
    onClick(next);
  };

  return (
    <button onClick={handleClick}>
      {switchList.map(({ type, text }) => {
        const className = activeSwitch === type ? 'active' : '';
        return (
          <span key={type} className={styles[className]}>
            {text}
          </span>
        );
      })}
    </button>
  );
}

export default ButtonToggle;
