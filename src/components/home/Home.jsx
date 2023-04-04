import { useState, useEffect } from 'react'
import axios from 'axios'
import Country from '../country/Country'

import './home.scss'

const Home = () => {
	const [data, setData] = useState([])
	const [error, setError] = useState(null)
	const [searchTitile, setSearchTitle] = useState("")

	const fetchedData = async () => {
		try {
			const response = await axios.get(`https://restcountries.com/v3.1/all`)
			setData(response.data)
			// console.log(response.data);
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

		const filterData = data
      .filter((value) => {
        if (searchTitile === "") {
          return value;
        } else if (
          value.name.common &&
          value.name.common.toLowerCase().includes(searchTitile.toLowerCase())
        ) {
          return value;
        }
      })
      .map((country) => (
        <Country
          flag={country.flags.png}
          language={
            country.languages &&
            Object.keys(country.languages).map((key) => {
              return country.languages[key];
            })
          }
          country={country.name.common}
          key={country.name.common}
          id={country.name.common}
          population={country.population}
        />
      ));


	return (
    <div className='nnu'>
      <input
        className="home__text--input"
        placeholder="Search"
        onChange={(e) => setSearchTitle(e.target.value)}
      />
      <div className="wrapper">{filterData}</div>
    </div>
  );
}

export default Home