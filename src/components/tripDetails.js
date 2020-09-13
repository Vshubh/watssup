import React from "react";
import "./tripDetails.css"

const tripDetails = (props) => {

    return (
        Object.keys(props.data).length !== 0 ?
            props.data.tripDetails.map(details => {
                let strt_d = new Date(Number(details.startDay))
                let end_d = new Date(Number(details.endDay))
                let startDay = strt_d.getMonth() + "/" + strt_d.getDate() + "/" + strt_d.getFullYear()
                let endDay = end_d.getMonth() + "/" + end_d.getDate() + "/" + end_d.getFullYear()
                let total_km = 0;
                details.tripLists.forEach((det) => {
                    total_km += Number(det.totalKm)
                })

                return (
                    <div className="det_trip">
                        <div className="inner-div">
                            <span>Date:{startDay}-</span>
                            <span>{endDay}</span>
                            <span id="total_km">Total KM:{total_km}</span>
                            <span id="toggle-btn">&#9866;</span>
                        </div>
                        <div className="table-div">
                            <table>
                                <tr>
                                    <th>#</th>
                                    <th>Trip starts To Trip Ends</th>
                                    <th>Driver Name</th>
                                    <th>The Expenses</th>
                                    <th>Trip Km</th>
                                    <th>Trip GPS Km</th>
                                    <th>Trip Time</th>
                                    <th>Odomenter Reading</th>
                                    <th>Action</th>
                                </tr>
                                {details.tripLists.map((trans, index) => {
                                    let trip_time = new Date(Number(trans.tripRunningTime))
                                    let total_trip = trip_time.getHours() + "hrs " + trip_time.getMinutes() + " min"
                                    return (
                                        <tr>
                                            <td>{index}</td>
                                            <td>{trans.startPointNode}&#10142;{trans.endPointNode}</td>
                                            <td>{trans.driverName}</td>
                                            <td>Rs.0</td>
                                            <td>{trans.totalKm}</td>
                                            <td>{trans.gpsDistance}</td>
                                            <td>{total_trip}</td>
                                            <td>{trans.startODOMeter}&#10142;{trans.endODOMeter}</td>
                                            <td><button id="first_btn" onClick={() => { alert("Movement Report") }}>Movement Report</button>
                                                <button onClick={() => { alert("Stoppage Report") }}>Stoppage Report</button>
                                            </td>
                                        </tr>
                                    )
                                })}

                            </table>
                        </div>
                    </div>
                )
            }) : null
    )
}

export default tripDetails;