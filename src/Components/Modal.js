import { useEffect } from 'react';

import AddBank from './AddBank';
import UpdateBank from "./UpdateBank"

import style from './Modal.module.css';

export default function Modal({ setOpenModal, openModal, id}) {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        setOpenModal(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return function clearEvent() {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [setOpenModal]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      setOpenModal(false);
    }
  };

  return (
    <div className={style.backdrop} onClick={handleBackdropClick}>
      <div>
        {id ? <UpdateBank setOpenModal={setOpenModal} openModal={openModal} id={id} />
        :<AddBank setOpenModal={setOpenModal} openModal={openModal}/>}
      </div>
    </div>
  );
}
