import { createAction } from '@reduxjs/toolkit'

export const getBankRequest = createAction('bank/getBankRequest')
export const getBankSuccess = createAction('bank/getBankSuccess')
export const getBankError = createAction('bank/getBankError')

export const addBankRequest = createAction('bank/addBankRequest')
export const addBankSuccess = createAction('bank/addBankSuccess')
export const addBankError = createAction('bank/addBankError')

export const deleteBankRequest = createAction('bank/deleteBankRequest')
export const deleteBankSuccess = createAction('bank/deleteBankSuccess')
export const deleteBankError = createAction('bank/deleteBankError')

export const updateBankRequest = createAction('bank/updateBankRequest')
export const updateBankSuccess = createAction('bank/updateBankSuccess')
export const updateBankError = createAction('bank/updateBankError')

export const findBanks = createAction('bank/findBanks')