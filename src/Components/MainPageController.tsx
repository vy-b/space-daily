import { request } from 'http';
import React, { ReactElement, useEffect, useState } from 'react'
import { IApod } from '../Interface/IApod';
import "bootstrap/dist/css/bootstrap.min.css";
import "./ViewCard.css"
import ViewCard from './ViewCard';
import DatePickerComponent from './DatePicker';
import { Button } from 'react-bootstrap';

interface IMainPageController {
    apodData: IApod[];
}

const MainPageController = (props: IMainPageController): ReactElement => {

    
    return(
        <div>
            {props.apodData.map((apod, i) => {
                return <ViewCard apodData={apod} key={i}/>
            })}
            
        </div>
    )
}

export default MainPageController;