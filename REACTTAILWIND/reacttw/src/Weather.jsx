import React from 'react'

export const Weather = () => {
    const [query, setquery] = useState('')
    const [Weather, SetWeather] = useState([])

    const fetchapidata = async () => {
        try {
            const response = await axios.get(`https://www.omdbapi.com/?s=${query}&apikey=a5ef1268`)
            Setsearch(response.data.Search)
            console.log("Response " + response.data.Search)

        }
        catch (error) {
            console.error(error);

        };
    }
    const change = (event) => {
        setquery(event.target.value)
    }
  return (
    <div>Weather</div>
  )
}
