import axios from 'axios'

import {
    getBankRequest,
    getBankSuccess,
    getBankError,
    addBankRequest,
    addBankSuccess,
    addBankError,
    deleteBankRequest,
    deleteBankSuccess,
    deleteBankError,
    updateBankRequest,
    updateBankSuccess,
    updateBankError,
} from './bank-actions'

axios.defaults.baseURL = 'https://bank-calculator.herokuapp.com/api/v1/banks'

const getBank = () => dispatch => {
    dispatch(getBankRequest)

    axios
        .get('/')
        .then(({data}) => dispatch(getBankSuccess(data)))
        .catch(error => dispatch(getBankError(error.message)))
}

const addBank = bank => dispatch => {
    const newBank = bank
    dispatch(addBankRequest())

    axios
        .post('/', newBank)
        .then(({ data }) => dispatch(addBankSuccess(data)))
        .catch(error => dispatch(addBankError(error.message)))
}

const deleteBank = id => dispatch => {
    dispatch(deleteBankRequest())

    axios
        .delete( `/${id}`)
        .then(() => dispatch(deleteBankSuccess(id)))
        .catch(error => dispatch(deleteBankError(error.message)))
}

const updateBank = bank => dispatch => {
    const { _id } = bank
    dispatch(updateBankRequest())

    axios
        .patch(`/${_id}`, bank)
        .then(({data}) =>  dispatch(updateBankSuccess(data)))
        .catch(error => dispatch(updateBankError(error.message)))
}

export default { getBank, addBank, deleteBank, updateBank}