import React, { Component } from 'react';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart'
import CountryPicker from './components/CountryPicker/CountryPicker'
import Title from './components/Title/Title'

import {fetch} from './components/api'

import './App.css'

export class App extends Component {
	state = {
		data: {},
		country: ''
	}

	async componentDidMount () {
		const data = await fetch();
		
		this.setState({data})
	}

	countryChangeHandler = async (country) => {
		const data = await fetch(country)
		//fetch data
		this.setState({data, country})
		//set state
	}

	render() {
		return (
			<div className="container">
				<Title />
				<Cards data={this.state.data} />

				<CountryPicker countryChangeHandler={this.countryChangeHandler} />
				<Chart data={this.state.data} country={this.state.country} />
			</div>
		);
	}
}

export default App;
