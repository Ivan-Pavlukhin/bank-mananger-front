import {  useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { bankSelectors } from "../redux/bank"
import { findBanks } from "../redux/bank/bank-actions"
import { CSSTransition } from 'react-transition-group';
import style from "./Calculator.module.css"

export default function Calculator() {
    const dispatch = useDispatch()

    const allBanks = useSelector(bankSelectors.getBanks)
    const [bank] = useSelector(bankSelectors.getVisibleBanks)

    const [sBank, setSBank] = useState('Change Bank')
    const handelBank = ({target}) => {
        dispatch(findBanks(target.value))
        setSBank(target.value)
    }

    const [mistake, setMistake] = useState(false)

    const isMistake = () => {
        console.log(downPayment < bank?.minDownPayment );
        if(amountBorrowed > bank?.maxLoan || downPayment < bank?.minDownPayment){
            setMistake(true)
            setTimeout(() => {
                setMistake(false);
              }, 3500);
            return true
        }
    }

    const [monthlyPayment, setMonthlyPayment] = useState()
    const [amountBorrowed, setAmountBorrowed] = useState()
    const [annualInsertRate, setAnnualInsertRate] = useState(bank?.percentageRate / 100)
    const [numberOfMonthlyPayments, setNumberOfMonthlyPayments] = useState(bank?.loanTerm)
    const [downPayment, setDownPayment] = useState() 
    const handelLoan = ({target}) =>{
        setAmountBorrowed(+target.value)
    }

    const handelPayment = ({target}) => {
        setDownPayment(+target.value)
    }

    const annual = () => {
        return (annualInsertRate/12)
    }

    const M = () => {
        return ((amountBorrowed * annual() * (1 + annual())**numberOfMonthlyPayments)/(((1 + annual())**numberOfMonthlyPayments) - 1))
    }

    const handelSubmit = async (e) => {
        e.preventDefault()    
        if(isMistake()){
            return
        }
        setMonthlyPayment(M())
    }

    return (
        <>
        <CSSTransition in={mistake} timeout={500} unmountOnExit classNames={style}>
            <div className={style.notification}>
            <p>amountBorrowed bigger maxLoan</p>
            <p>or</p>
            <p>downPayment smaller minDownPayment</p>
            </div>
        </CSSTransition>
        <form onSubmit={handelSubmit}>
            <label>
                Initial loan
                <input type="number" name="initialLoan" onChange={handelLoan}/>
            </label>
            <label>
                Down payment
                <input type="number" name="downPayment" onChange={handelPayment} />
            </label>
            <label>
                Bank:
                <select name="Bank" value={sBank} onChange={handelBank}>
                    <option value='Change Bank'>Change Bank</option>
                    {allBanks.map(bank => <option value={bank.name} key={bank._id}>
                        {bank.name}
                        </option>)}
                </select>
            </label>
            <button type="submit"> Count </button>
            <div>
                <p>Monthly paymant: {monthlyPayment}</p>
            </div>
        </form>
        
        </>
    )
}