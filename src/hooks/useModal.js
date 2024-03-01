import { useContext } from 'react';
import { ModalDispatchContext } from '../contexts/Modal/ModalContext';

function useModal() {
  const { open, close } = useContext(ModalDispatchContext);

  const openModal = (Component, props) => {
    open(Component, props);
  };

  const closeModal = (Component) => {
    close(Component);
  };

  return {
    openModal,
    closeModal,
  };
}

export default useModal;
