import React, { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

export function App() {
  const [isOpenNewTransactionModal, setIsOpenNewTransactionModal] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsOpenNewTransactionModal(true);
  }
  function handleCloseNewTransactionModal() {
    setIsOpenNewTransactionModal(false);
  }
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal isOpen={isOpenNewTransactionModal} onRequestClose={handleCloseNewTransactionModal} ></NewTransactionModal>
      <GlobalStyle />
    </>

  );
}
