import { useEffect } from "react";


const useTitle = (title) => {
    useEffect(()=>{
        document.title = `${title} - ToyCar.com`
    }, [title])
};

export default useTitle;