import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'

export const fetch = async (country) => {
    let changeableURL = url;

    if(country) {
        changeableURL = `${url}/countries/${country}`
    }

    try {
        const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(changeableURL);

        const dataNeeded = {
            confirmed,
            recovered,
            deaths,
            lastUpdate
        }
        
        return dataNeeded
    } catch (error) {
        console.log(error)
    }
}

export const fetchDaily = async() => {
    try {
        const {data} = await axios.get(`${url}/daily`);
       
        const modData = data.map(dailyData => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }))

        return modData

    } catch (error) {

    }
}

export const fetchCountries = async() => {
    try {
        const {data: {countries}}= await axios.get(`${url}/countries`)
        return countries.map(country => country.name)
    } catch (error) {

    }
}