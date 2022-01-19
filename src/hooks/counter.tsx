import { useState } from "react"

const useCounter = () => {
    const [counter, setCaouner] : [number, (A:number)=>void] = useState(0);

    const incCount = () => {
        setCaouner(counter+1)
    }

    const decCount = () => {
        setCaouner(counter-1)
    }
    return [incCount, decCount, counter] as const
}

export default useCounter