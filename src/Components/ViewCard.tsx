import { request } from 'http';
import React, { ReactElement, useEffect, useState } from 'react'
import { IApod } from '../Interface/IApod';
import "bootstrap/dist/css/bootstrap.min.css";
import "./ViewCard.css"
interface IViewCard {
    apodData: IApod;
}

const ViewCard = (props: IViewCard): ReactElement => {
    const [isShown,setIsShown] = useState<boolean>(false);
    return(
        <div className= "card movie-card" onMouseEnter={()=>setIsShown(true)} onMouseLeave={()=>setIsShown(false)}>
            <div className="card-block stretched-link text-decoration">
                <div className="row no-gutters">
                    <div className="col-auto">
                    <div className="card-block px-2">
                        <img className="poster" src={props.apodData?.url} alt="Astronomy Picture Of The Day"/> 
                    </div>
                    </div>
                    {isShown &&
                        <div className="col">
                            <div className="card-block px-2">
                                <h1 className="title">{props.apodData?.title}</h1>
                                <h5 className="text-muted"><span className="year">{props.apodData?.date}</span></h5>

                                
                                <p className="plot" >{props.apodData?.explanation}</p>
                                <p><span className="text-muted">Copyright: </span><span className="text-muted cast"><span id="other" >{props.apodData?.copyright}</span></span></p>
                                
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default ViewCard;