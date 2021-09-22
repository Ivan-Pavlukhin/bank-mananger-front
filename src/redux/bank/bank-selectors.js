import { createSelector } from '@reduxjs/toolkit'

const getBanks = state => state.banks.banks
const getFilter = state => state.banks.filter

const getVisibleBanks = createSelector([getFilter, getBanks], (filter, banks) => {
    if(!filter && !banks) {
        return
    }
    const normalizedFilter = filter.toLowerCase()

    return banks.filter(({name}) => name.toLowerCase().includes(normalizedFilter))
})

export default {
    getBanks,
    getVisibleBanks,
    getFilter
}