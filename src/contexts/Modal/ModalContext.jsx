import { createContext, useMemo, useState } from 'react';
import Modal from '../../components/Modal/common/Modal';

export const ModalStateContext = createContext([]);

export const ModalDispatchContext = createContext({
  open: () => {},
  close: () => {},
});

export const ModalProvider = ({ children }) => {
  const [openedModals, setOpenedModals] = useState([]);

  const open = (Component, props) => {
    setOpenedModals((modals) => {
      return [...modals, { Component, props }];
    });
  };

  const close = (Component) => {
    setOpenedModals((modals) => {
      return modals.filter((modal) => modal.Component !== Component);
    });
  };

  const dispatch = useMemo(() => ({ open, close }), []);

  return (
    <ModalStateContext.Provider value={openedModals}>
      <ModalDispatchContext.Provider value={dispatch}>
        <Modal />
        {children}
      </ModalDispatchContext.Provider>
    </ModalStateContext.Provider>
  );
};
