import React from 'react'
import { Switch, Link, Route, useHistory } from 'react-router-dom'


const Home = () => {

    const history = useHistory();

    const toForm = () => {
        history.push('/pizza')
    }
    
    return(
        <div>
            <button onClick={toForm}>Pizza!</button>
        </div>
    )

}

export default Home