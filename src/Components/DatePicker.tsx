import React from 'react'
import { Button, Form } from 'react-bootstrap';
interface IDatePicker {
    fromDate:any;
    toDate:any;
    setFromDate:any;
    setToDate:any;
    setDateSelected:any;
}
const DatePickerComponent = (props: IDatePicker): React.ReactElement => {
 
    
 
        return(
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <Form.Group controlId="dob">
                            <span style={{fontSize:"14px"}}>From Date:</span>
                            <Form.Control type="date"  value={props.fromDate} 
                            onChange={(e:any)=>{
                                props.setFromDate(e.target.value); 
                                }} />
                        </Form.Group>
                    </div>
                    <div className="col-md-6" style={{marginLeft:"auto",marginRight:"0"}}>
                        <Form.Group controlId="dob">
                            <span style={{fontSize:"14px"}}>To Date:</span>
                            <Form.Control type="date"  value={props.toDate} 
                            onChange={(e:any)=>{
                                var d1 = Date.parse(props.fromDate);
                                var d2 = Date.parse(e.target.value);
                                var today = Date.parse(new Date().toString());
                                if (d1 > d2) {
                                    props.setFromDate(e.target.value);
                                }
                                else if (d2 > today) {
                                    alert ("Images aren't available for that day yet!");
                                }
                                else {
                                    props.setToDate(e.target.value);
                                }
                                }}
                            />
                        </Form.Group>
                    </div>
                    
                </div>
                <div className="row" style={{textAlign:"center",display: "flex",alignItems: "center",justifyContent: "center"}}>
                    <Button className="btn btn-secondary" style={{width:"30vh",textAlign:"center",marginTop:"2vh"}} 
                        onClick={()=>props.setDateSelected(true)}>
                        Show me the images!
                    </Button>
                </div>
            </div>
        )
    
     
}
 
export default DatePickerComponent;