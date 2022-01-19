import { useState } from "react";

// need to use redux

const useScale = () => {
    const [percent, setPercent] = useState(0);
    const calculatePercentage = (oldval: number, newVal: number) => {
        setPercent(+(newVal / oldval).toFixed(2));
        console.log("s", percent)
      };
   return [percent, calculatePercentage] as const
}

export default useScale


