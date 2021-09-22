import Modal from '../Components/Modal';
import BanksList from "../Components/BanksList"
import { useState } from 'react';

export default function Banks() {
    
    const [openModal, setOpenModal] = useState(false)
    const handelModal = () => {
        setOpenModal(!openModal)
    }
    return (
        <div>
            <h1>Banks</h1>
            <div>
                <h2>Create new bank</h2>
                <button className="waves-effect waves-light btn" type="button" onClick={handelModal}>Create</button>
            </div>
            <BanksList />
            {openModal && <Modal setOpenModal={setOpenModal} />}
        </div>
    )
}