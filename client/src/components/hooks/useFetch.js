import {useEffect, useState} from "react";
import axios from "axios";
const useFetch = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState([false])
    const link="http://localhost:8080/api"+url
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const res = await axios.get(link)
                setData(res.data)
            } catch (error) {
                setError(error)
            }
            setLoading(false)
        }
        fetchData()
    }, [])

    const reFetch = async () => {

        setLoading(true)
        try {
            const res = await axios.get(link)
            setData(res.data)
        } catch (error) {
            setError(error)
        }
        setLoading(false)
    }
    return {data,loading,error,reFetch}
}
export default useFetch;
