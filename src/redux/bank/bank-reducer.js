import { combineReducers } from 'redux'
import { createReducer } from '@reduxjs/toolkit'

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
    findBanks
} from './bank-actions'

const initialState = []

const bankReducer = createReducer(initialState, {
    [getBankSuccess]: (_, { payload }) => payload,
    [addBankSuccess]: (state, { payload }) => [...state, payload],
    [deleteBankSuccess]: (state, { payload }) => state.filter(({ _id }) => _id !== payload),
    [updateBankSuccess]: (state, { payload }) => [...state.filter(({ _id }) => _id !== payload._id), payload],
})

const loadingReducer = createReducer(false, {
    [getBankRequest]: () => true,
    [getBankSuccess]: () => false,
    [getBankError]: () => false,
    [addBankRequest]: () => true,
    [addBankSuccess]: () => false,
    [addBankError]: () => false,
    [deleteBankRequest]: () => true,
    [deleteBankSuccess]: () => false,
    [deleteBankError]: () => false,
    [updateBankRequest]: () => true,
    [updateBankSuccess]: () => false,
    [updateBankError]: () => false,
})

const errorReducer = createReducer(null, {
    [addBankError]: (state, { payload }) => state = payload,
    [getBankError]: (state, { payload }) => state = payload,
    [deleteBankError]: (state, { payload }) => state = payload,
    [updateBankError]: (state, { payload }) => state = payload,
})

const filterReducer = createReducer('', {
    [findBanks]: (_, {payload}) => payload,
})

export default combineReducers({
    banks: bankReducer,
    loading: loadingReducer,
    error: errorReducer,
    filter: filterReducer
})
