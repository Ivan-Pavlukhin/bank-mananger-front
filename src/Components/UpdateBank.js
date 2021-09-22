import { useDispatch } from "react-redux"

import { bankOperations } from "../redux/bank"
import BankForm from "./BankForm"

export default function UpdateBank({setOpenModal, openModal, id}) {
    const dispatch = useDispatch()

    const handelSubmit = (bank) => e => {
        e.preventDefault()
        dispatch(bankOperations.updateBank(bank))
    }
    return <BankForm handelSubmit={handelSubmit} setOpenModal={setOpenModal} openModal={openModal} id={id}/>
}