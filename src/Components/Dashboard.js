import React from 'react'
import Cards from './Cards'
import requests from '../Utility/requests'
import '../CSS/dashboard.css'


function Dashboard(props) {
    return (
        <div className="dashboard_container">
            <div className="dashboard_header">
                <div className="dashboard_headercontent">
                <h2>React Websites</h2>
                </div>
            </div>
            <div className="dashboard_content">
                <Cards header="Netflix" description="Netflix Clone Website" fetchURL={requests.fetchTrending}></Cards>
                <Cards header="Amazone" description="Amazone Clone Website" fetchURL={requests.fetchTrending} staticImage></Cards>
                <Cards header="Covi19" description="Covid 19 Website" fetchURL={requests.fetchTrending} staticImage></Cards>
                <Cards header="Spotify" description="Spotify Website" fetchURL={requests.fetchTrending} staticImage></Cards>
                
               
            </div>
            
        </div>
    )
}


export default Dashboard

