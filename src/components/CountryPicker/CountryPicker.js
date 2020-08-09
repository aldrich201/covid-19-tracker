import React, {useState, useEffect} from 'react'
import {NativeSelect, FormControl} from '@material-ui/core'

import {fetchCountries} from '../api'

const CountryPicker = ({countryChangeHandler}) => {

    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetch = async() => {
            setFetchedCountries(await fetchCountries())
        }

        fetch();
    }, [setFetchedCountries]);

    console.log(fetchedCountries)

    return (
        <FormControl className="form-control">
            <NativeSelect defaultValue="" onChange={e => countryChangeHandler(e.target.value)}>
                <option value="">Global</option>
                {fetchedCountries.map((country, i )=> <option key={i} value={country}>{country} </option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker
