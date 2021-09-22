import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { bankOperations, bankSelectors } from "../redux/bank"
import Modal from "./Modal"

import style from "./BanksList.module.css"

export default function BanksList() {
    const dispatch = useDispatch()

    const [bankId, setBankId] = useState('')
    const [openModal, setOpenModal] = useState(false)
    const handelModal = (id) => () => {
        setOpenModal(!openModal)
        setBankId(id)
    }

    const handelDelete = (id) => (e) =>{
        dispatch(bankOperations.deleteBank(id))
    }

    const banks = useSelector(bankSelectors.getBanks)

    

    return(
        <>
            <h2>Banks list</h2>
            <ul className={style.list}>
                {banks.map(bank => {
                    return (
                        <li  key={bank._id} className={style.card}>
                            <h3>{bank.name}</h3>
                            <ul>
                                <li>Annual percentage rate: {bank.percentageRate}</li>
                                <li>Maximum loan: {bank.maxLoan}</li>
                                <li>Minimum down payment:{bank.minDownPayment}</li>
                                <li>loanTerm: {bank.loanTerm}</li>
                            </ul>
                            <button className="waves-effect waves-light btn" type="button" onClick={handelModal(bank._id)}>
                                update
                            </button>
                            <button className="waves-effect waves-light btn" type="button" onClick={handelDelete(bank._id)}>
                                delete
                            </button>
                        </li>
                    )
                })}
            </ul>
            {openModal && <Modal setOpenModal={setOpenModal} id={bankId} />}
        </>
    )
}