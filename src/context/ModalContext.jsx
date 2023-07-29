import { createContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ modalIsOpen, setModalIsOpen }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContext;
