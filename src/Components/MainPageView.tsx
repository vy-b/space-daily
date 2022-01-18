import { ReactElement, useEffect, useState } from 'react'
import { IApod } from '../Interface/IApod';
import MainPageController from './MainPageController';
import DatePicker from 'react-bootstrap-date-picker'
import DatePickerComponent from './DatePicker';

interface IMainPageView {

}

const MainPageView = (props: IMainPageView): ReactElement => {
    var today = (new Date().toISOString().split('T')[0]);
    var defaultStartDate = (addDays(today, -30).toISOString().split('T')[0]);
    const [fromDate, setFromDate] = useState<string>(defaultStartDate)
    const [toDate, setToDate] = useState<string>(today)
    const [dateSelected,setDateSelected] = useState<boolean>(true)
    const [apodData, setApodData] = useState<IApod[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    useEffect(() => {
        console.log("hey");
        if (dateSelected)
            fetchImages();
    },[dateSelected])
    const fetchImages = (): void => {
        setIsLoading(true);
        var requestUrl = "https://api.nasa.gov/planetary/apod?api_key=Kn96RWxsHUCR1qrV4yubedI14x2BMjgVArdjOPtN&start_date=" + fromDate + "&end_date=" + toDate;
        fetch(requestUrl)
        .then(resp=>resp.json())
        .then(data=> {
            var temp:any[] = [];
            for(let i = data.length-1; i > -1; i--)
            {
                temp.push(data[i])
            }
            console.log(data);
            setApodData(temp);
            setIsLoading(false);
            setDateSelected(false);
        });
    }
    return(
        <div className = "App">
            {isLoading &&
            <div>
            <img src="https://acegif.com/wp-content/uploads/loading-87.gif" height="100vh"/>
            Loading...
            </div>
            }
            {!isLoading && 
            <div>
                <h1 className="font-weight-bold">SpaceDaily</h1>
                <header className="App-header">
                    <DatePickerComponent fromDate={fromDate} toDate={toDate} setFromDate={setFromDate} setToDate={setToDate} setDateSelected={setDateSelected}/>
                </header>
                <MainPageController
                    apodData={apodData}
                />
            </div>}  
            
        </div>
    )
}
function addDays(date:any, days:any):Date {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

export default MainPageView;