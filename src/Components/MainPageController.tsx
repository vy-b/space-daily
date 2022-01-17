import { request } from 'http';
import React, { ReactElement, useEffect, useState } from 'react'
import { IApod } from '../Interface/IApod';
import "bootstrap/dist/css/bootstrap.min.css";
import "./ViewCard.css"
import ViewCard from './ViewCard';
// import DatePicker from 'react-datepicker'

interface IMainPageController {
    startDate:any;
    endDate:any;
    setStartDate:any;
    setEndDate:any;
    fetchImages: () => void;
    apodData: IApod[];
}

const MainPageController = (props: IMainPageController): ReactElement => {
    useEffect(() => {
        props.fetchImages();
    }, [])
    
    return(
        <div className = "App">
                <header className="App-header">
                {/* <DatePicker onChange={()=>{console.log("change")}}/> */}
                    {props.apodData.map((apod, i) => {
                        return <ViewCard apodData={apod} key={i}/>
                    })}
                </header>
        </div>
    )
}

export default MainPageController;