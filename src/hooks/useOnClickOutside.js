import {useEffect} from "react";


const useOnClickOutside = (ref, handler) => {
    useEffect(() => {
        const listener = (event) => {
            console.log("event")
            if (!ref.current || ref.current.contains(event.target)) {return}
            handler()
        };
        document.addEventListener("mousedown", listener)
        return () => {
            document.removeEventListener("mousedown", listener)
        };
    });

}

export default useOnClickOutside
