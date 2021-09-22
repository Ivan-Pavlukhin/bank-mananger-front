import { useDispatch } from "react-redux"

import { bankOperations } from "../redux/bank"
import BankForm from "./BankForm"

export default function AddBank({setOpenModal, openModal}) {
    const dispatch = useDispatch()

    const handelSubmit = (bank) => e => {
        e.preventDefault()
        dispatch(bankOperations.addBank(bank))
    }
    return <BankForm handelSubmit={handelSubmit} setOpenModal={setOpenModal} openModal={openModal}/>
}