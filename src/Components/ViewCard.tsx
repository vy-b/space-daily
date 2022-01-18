import { request } from 'http';
import React, { ReactElement, useEffect, useState } from 'react'
import { IApod } from '../Interface/IApod';
import "bootstrap/dist/css/bootstrap.min.css";
import "./ViewCard.css"
import { Button } from 'react-bootstrap';
interface IViewCard {
    apodData: IApod;
}

const ViewCard = (props: IViewCard): ReactElement => {
    const [showPrompt,setShowPrompt] = useState<boolean>(false);
    const [isShown,setIsShown] = useState<boolean>(false);
    const [like, setLike] = useState<boolean>(false);
    return(
        <div className= "card view-card" onMouseEnter={()=>setShowPrompt(true)} onMouseLeave={()=>{setShowPrompt(false)}}>
            <div className="card-block">
                
                <div className="row no-gutters">
                    <div className="col-auto">
                    <div className="card-block px-2">
                        <img src={props.apodData?.hdurl} alt="Astronomy Picture Of The Day"/> 
                        <h1 className="title">{props.apodData?.title}</h1>
                        <div className="row">
                            
                            <div className="col"><h5 className="text-muted"><span className="year">{props.apodData?.date}</span></h5></div>
                            <div className="col"
                            ><Button className="btn btn-secondary" style={{float:"right"}}
                            onClick={()=> {
                                if (like)
                                    setLike(false);
                                else
                                    setLike(true);
                                if (isShown)
                                    setIsShown(true);
                                else
                                    setIsShown(false);
                            }}>{like ? <span>Liked</span> : <span>Like</span>}
                            </Button></div>

                            
                        </div>
                        
                        {!isShown &&
                            <p className="desc" >{props.apodData?.explanation.substring(0,250)}...</p>
                        }
                    </div>
                    </div>
                    {showPrompt && !isShown &&
                        <p className="text-muted" style={{cursor:"pointer"}} onClick={()=>{setIsShown(true)}}  >Click to see more</p>
                    }

                    {isShown &&
                        <div className="col">
                        <div className="card-block px-2">
                            <p className="desc" >{props.apodData?.explanation}</p>
                            <p className="text-muted"style={{cursor:"pointer"}} onClick={()=>{setIsShown(false)}} >Show less</p>
                        </div>
                    </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default ViewCard;