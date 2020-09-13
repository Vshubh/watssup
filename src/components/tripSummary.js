import React from "react";
import "./tripSummary.css";
const tripSummary=(props)=>{
    const {data} = props;
    console.log('asdasdsadas',data)
    let trip_time=new Date(Number(data.totalTripTime))
    let total_trip=trip_time.getHours()+"hrs "+trip_time.getMinutes()+" min"
    let total_time=new Date(Number(data.totalTime))
    let totalTime=total_time.getHours()+"hrs "+total_time.getMinutes()+" min"
    return (
        <div>
        <div className="dash">
          <div>
          

              <span id="f-span">Trip Summary</span><br></br>
              <span id="s-span">Dashboard</span> <span id="t-span">/ Trip Summary</span>
          </div>
          <div>
              <label>From</label>&nbsp;&nbsp;
              <input type="date"></input>&nbsp;&nbsp;
              <label>To</label>&nbsp;&nbsp;
              <input type="date"></input>&nbsp;&nbsp;
              <button type="submit"><i className="fa fa-search btn-btn"></i></button>
              <button id="expt-btn" onClick={()=>{alert("Export Clicked")}}>Export</button>
          </div>
        </div>
        <div className="summ">
            <div className="trip-summ">
                <div style={{backgroundColor:"#87cded"}}>{data.vehicleNo}</div>
                <div style={{backgroundColor:"#ead225"}}>Total Trips:{data.totalTrips}</div>
                <div style={{backgroundColor:"#074e9e"}}>Total Km: {data.totalKm}</div>
                <div style={{backgroundColor:"green"}}>Trip Time:{total_trip}</div>
                <div style={{backgroundColor:"#ca1cf4"}}>Total Time:{totalTime}</div>
                <div style={{backgroundColor:"#b18516"}}>Total Exp:Rs.{data.totalExpences}</div>
            </div>
            <div className="other-exp" style={{backgroundColor:"#2c2928"}}>Other Exp: Rs 0.0</div>
        </div>
        </div>
    )
}

export default tripSummary;