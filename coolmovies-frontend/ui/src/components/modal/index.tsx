import React from 'react';
import { ModalContainer, ModalContent, ModalHeader, ModalFooter } from './styles';

interface ModalProps {

}

const Modal: React.FC<ModalProps> = ({ children }) => { 
  return (
    <ModalContainer>
      <ModalHeader />
      <ModalContent>
        {children}
      </ModalContent>
      <ModalFooter />
    </ModalContainer>
  )
}

export default Modal;