import { useState } from "react"


import style from './Form.module.css'

export default function BankForm({handelSubmit, id}) {

    const [name, setName] = useState()
    const handelName = ({target}) => {
        setName(target.value)
    }

    const [percentageRate, setPercentageRate] = useState(0)
    const handelPercent = ({target}) => {
        setPercentageRate(target.value)
    }

    const [maxLoan, setMaxLoan] = useState(0)
    const handelMaxLoan = ({target}) => {
        setMaxLoan(target.value)
    }

    const [minDownPayment, setMinDownPayment] = useState(0)
    const handelMinDownPayment = ({target}) => {
        setMinDownPayment(target.value)
    }
    // const [downPayment, setDownPayment] = useState(200)
    

    const [loanTerm, setLoanTerm] = useState(0)
    const handelLoanTerm = ({target}) => {
        setLoanTerm(target.value)
    }

    return (<form className={style.form} onSubmit={handelSubmit({name, percentageRate, maxLoan, minDownPayment, loanTerm, _id: id})}>
        <label className={style.form__item}>
            Bank's name
            <input className={style.form__input} type="string" name="name" value={name} onChange={handelName} />
        </label>
        <label className={style.form__item}>
            Annual percentage rate
            <input className={style.form__input} type="number" name="percentageRate" value={percentageRate} onChange={handelPercent} />
        </label>
        <label className={style.form__item}>
            Maximum loan
            <input className={style.form__input} type="number" name="maxLoan" value={maxLoan} onChange={handelMaxLoan} />
        </label>
        <label className={style.form__item}>
            Minimum down payment
            <input className={style.form__input} type="number" name="minDownPayment" value={minDownPayment} onChange={handelMinDownPayment} />
        </label>
        <label className={style.form__item}>
            loanTerm
            <input className={style.form__input} type="number" name="loanTerm" value={loanTerm} onChange={handelLoanTerm} />
        </label>
        <button className={style.form__button} type="submit">{id? 'Update bank': 'Add ban'}k</button>
    </form>)
}