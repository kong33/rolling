import { useContext } from 'react';
import {
  ModalDispatchContext,
  ModalStateContext,
} from '../../../contexts/Modal/ModalContext';
import ModalPortal from './ModalPortal';
import ModalLayOut from './ModalLayout';

function Modal() {
  const openedModals = useContext(ModalStateContext);
  const { close } = useContext(ModalDispatchContext);

  return (
    <ModalPortal>
      {openedModals.map((modal, index) => {
        const { Component, props } = modal;
        const { onSubmit, ...restProps } = props;

        const handleClose = () => {
          close(Component);
        };

        const handleSubmit = async () => {
          if (typeof onSubmit === 'function') {
            await onSubmit();
          }
          handleClose();
        };

        return (
          <ModalLayOut key={index}>
            <Component
              {...restProps}
              onClose={handleClose}
              onSubmit={handleSubmit}
            />
          </ModalLayOut>
        );
      })}
    </ModalPortal>
  );
}

export default Modal;
