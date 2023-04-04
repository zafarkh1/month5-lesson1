import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const UseParam = () => {
	const [data, setData] = useState([])
	const [error, setError] = useState(null)
	const {id} = useParams()

	const fetchedData = async () => {
		try {
			const response = await axios.get(`https://restcountries.com/v3.1/name/${id}`)
			setData(response.data)
			console.log(response.data);
		} catch (error) {
			setError(error)
		}
	}

	useEffect(() => {
		fetchedData()
	}, [])

	if (error) {
    return <div>Error: {error.message}</div>
    }
	
	return (
		<div className="container">
			<img src={data.flags} alt="" />
			<h1>{data.name}</h1>
			<p>{data.population}</p>
		</div>
	)
}

export default UseParam