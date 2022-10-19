import { useEffect, useState } from "react";

export function useDebounce(value ,delay=300) {
	const [debounced,setDebounced]=useState(value)
	useEffect(() => {
	  const hendler=setTimeout(() => {
		setDebounced(value)
	  }, delay);
	
	  return () => {
		 clearTimeout(hendler)
	  }
	}, [value,delay])
	return debounced
}