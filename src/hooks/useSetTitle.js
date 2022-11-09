import { useEffect } from "react"

const useSetTitle = title =>{
    useEffect(()=>{
        document.title= `${title} - Happily Fresh`;
    },[title])
}

export default useSetTitle;