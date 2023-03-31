import React from 'react'
import { Link } from 'react-router-dom'

import './country.scss'

const Country = (props) => {
	const {flag, language, country, id, population} = props
	return (
		<div className='container'>
				<img src={flag} alt={country} className='img'/>
				<h3 className='name'>Country: {country}</h3>
				<p className='language'>Language: {language}</p>
				<p className='population'>Population: {population}</p>
				<Link to={`name/${id}`}>Read More</Link>
		</div>
	)
}

export default Country