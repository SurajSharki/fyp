import {useState} from "react";
import './UpdateEvent.css'

const UpdateEvent = () => {
    const [eventInfo, setEvent] = useState();
    
  return (
   <>
   <div className="event-container mt-3">
     <div className="event-row">
        <div className="event-col mx-auto">
      
     <div className="event-card">
       <h3 className="event-card-title text-center">Update Event</h3>
        <div className="event-card-body">
             <form>
                <div className="event-form-group">
                    <label className="event-form-label">Event Name</label>
                    <input
                    type="text"
                    className="event-form-control"
                    onChange={(e)=>{
                        setEvent({...eventInfo, eventName: e.target.value});
                    }}
                    ></input>
                </div>

                <div className="event-form-group">
                    <label className="event-form-label">Organized By</label>
                    <input
                    type="text"
                    className="event-form-control"
                    onChange={(e)=>{
                        setEvent({...eventInfo, organized: e.target.value});
                    }}
                    ></input>
                </div>

                <div className="event-form-group">
                    <label className="event-form-label">Age Category</label>
                    <input
                    type="text"
                    className="event-form-control"
                    onChange={(e)=>{
                        setEvent({...eventInfo, ageCategory: e.target.value});
                    }}
                    ></input>
                </div>

                <div className="event-form-group">
                    <label className="event-form-label">Event Description</label>
                    <textarea
                    type="text"
                    className="event-form-control"
                    onChange={(e)=>{
                        setEvent({...eventInfo, eventDesc: e.target.value});
                    }}
                    ></textarea>
                </div>

                <div className="event-form-group">
                    <label className="event-form-label">Game Category</label>
                    <select
                    className="event-form-select"
                    onChange={(e)=>{
                        setEvent({...eventInfo, games: e.target.value});
                    }}
                    >
                        <option value="cricket">Cricket</option>
                        <option value="football">Football</option>
                        <option value="basketball">Basketball</option>
                        <option value="hockey">Hockey</option>
                    </select>
                </div>

                <div className="event-form-group">
                    <label className="event-form-label">Poster Image</label>
                    <input
                    type="file"
                    className="event-form-control"
                    onChange={(e)=>{
                        setEvent({...eventInfo, imgName: e.target.files[0]});
                    }}
                    ></input>
                </div>

                <div className="event-form-group">
                    <label className="event-form-label">Registration Fee</label>
                    <input
                    type="text"
                    className="event-form-control"
                    onChange={(e)=>{
                        setEvent({...eventInfo, registrationFee: e.target.value});
                    }}
                    ></input>
                </div>

                <div className="event-form-group mb-3">
                    <label className="event-form-label">Location</label>
                    <input
                    type="text"
                    className="event-form-control"
                    onChange={(e)=>{
                        setEvent({...eventInfo, location: e.target.value});
                    }}
                    ></input>
                </div>

                <div className="event-form-group d-flex justify-content-between">
                  <button className="event-btn event-btn-success" type="submit">Submit</button>
                  <button className="event-btn event-btn-danger" type="reset">Reset</button>
                </div>
            </form> 
        </div>
     </div>
        </div>
    </div>
   </div>
   </>
  );
}

export default UpdateEvent;
