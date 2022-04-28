import Navbar from "../Navbar/Navbar";
import "./Tracker.css";
import React, { useState } from "react";
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker from '@hassanmojab/react-modern-calendar-datepicker';
function Tracker() {
    const [currData, setcurrData] = useState([]);
    const [currNotes, setcurrNotes] = useState('');
    const defaultValue = {
        year: 2019,
        month: 10,
        day: 5,
    };
    const [selectedDay, setSelectedDay] = useState(defaultValue);
    const populateVal = () => {
        console.log("fsafsdf");
        for (let i = 0; i < currData.length; i++) {
            console.log("looping");
            if (currData[i].selectedDate == selectedDay) {
                
                setcurrNotes(currData[i].notes);
            }
        }
    }
    const storeTheData = () => {
        setcurrData([
            {
                "seletedDate": selectedDay,
                "notes": currNotes
            }, ...currData
        ]);
        setcurrNotes('');
        console.log(currData);
    };
    const setNotesValue = (event) => {
        event.preventDefault();
        setcurrNotes(event.target.value);
    };
    return (<React.Fragment>
        <Navbar loginflag={true} />
        <div className="container">
            <div className="row">
                <div className="col s12"></div>
                <div className="col s6">
                    <br /><br /><br />
                    <DatePicker
                        value={selectedDay}
                        onChange={setSelectedDay}
                        shouldHighlightWeekends
                        onsetSelectedDay={populateVal}
                    />
                </div>
                <div className="col s6">
                    <br /><br /><br />
                    <label>
                        Notes:
                        <input type="text" name="notes" value={currNotes} onChange={setNotesValue} />
                    </label>
                    <a class="waves-effect waves-light btn-small" onClick={storeTheData}>Submit</a>
                </div>
            </div>
        </div>
    </React.Fragment>)

}

export default Tracker;