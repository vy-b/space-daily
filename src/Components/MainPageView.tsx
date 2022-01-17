import { ReactElement, useEffect, useState } from 'react'
import { IApod } from '../Interface/IApod';
import MainPageController from './MainPageController';
interface IMainPageView {

}

const MainPageView = (props: IMainPageView): ReactElement => {
    var today = (new Date()).toISOString().split('T')[0];
    var defaultStartDate = (addDays(today, -30)).toISOString().split('T')[0];
    const [startDate, setStartDate] = useState<string>(defaultStartDate)
    const [endDate, setEndDate] = useState<string>(today)
    const [apodData, setApodData] = useState<IApod[]>([]);
    useEffect(() => {
        console.log("hey");
        fetchImages();
    },[])
    const fetchImages = (): void => {
        var requestUrl = "https://api.nasa.gov/planetary/apod?api_key=Kn96RWxsHUCR1qrV4yubedI14x2BMjgVArdjOPtN&start_date=" + startDate + "&end_date=" + endDate;
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
        });
    }
    return(
        <div>
            
            <MainPageController
                startDate={startDate}
                endDate={endDate}
                setStartDate={setStartDate}
                setEndDate={setEndDate}
                apodData={apodData}
                fetchImages={fetchImages}
            />
        </div>
    )
}
function addDays(date:any, days:any):Date {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

export default MainPageView;