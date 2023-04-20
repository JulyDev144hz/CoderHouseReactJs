import { useEffect, useState } from "react"


function useFetch(url) {

    const [response, setResponse] = useState({});
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true)
      fetch(url)
        .then((response)=>{
            setResponse(response)
            return response.json();
        })
        .then((infoJson) =>{
            setData(infoJson)
            setLoading(false)
        })
    
    }, [url])
    


  return (
    {response: response, data: data ,loading: loading}
  )
}

export default useFetch