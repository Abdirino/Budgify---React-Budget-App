import React, { useContext } from 'react';

const BudgetContext = React.createContext()

export function useBudget() {
    return useContext(BudgetContext)
}
export const BudgetProvider = ({children}) => {
    return children
}