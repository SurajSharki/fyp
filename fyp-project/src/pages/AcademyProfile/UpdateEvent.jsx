import {useState} from "react";

const UpdateEvent = () => {
    const [eventInfo, setEvent] = useState()
  return (
   <>
   <div className="container mt-3">
   <div className="row">
        <div className="col-md-8 col-12 mx-auto">
      
     <div className="card">
     <h3 className="card-title text-center">Update Event</h3>
        <div className="card-body">
             <form>
                <div className="form-group">
                    <label className="form-label">Event Name</label>
                    <input
                    type="text"
                    className="form-control"
                    onChange={(e)=>{
                        setEvent({...eventInfo, eventName: e.target.value})
                    }}
                    style={{border:"1px solid black"}}
                    ></input>
                </div>
                <div className="form-group">
                    <label className="form-label">Organized By</label>
                    <input
                    type="text"
                    className="form-control"
                    onChange={(e)=>{
                        setEvent({...eventInfo, organized: e.target.value})
                    }}
                    style={{border:"1px solid black"}}
                    ></input>
                </div>
                <div className="form-group">
                    <label className="form-label">Age Category</label>
                    <input
                    type="text"
                    className="form-control"
                    onChange={(e)=>{
                        setEvent({...eventInfo, ageCategory: e.target.value})
                    }}
                    style={{border:"1px solid black"}}
                    ></input>

                </div>
                <div className="form-group">
                    <label className="form-label">Event Description</label>
                    <textarea
                    type="text"
                    className="form-control"
                    onChange={(e)=>{
                        setEvent({...eventInfo, eventDesc: e.target.value})
                    }}
                    style={{border:"1px solid black"}}
                    ></textarea>
                </div>
                <div className="form-group">
                    <label className="form-label">Game Category</label>
                    <select
                 
                    className="form-select"
                    onChange={(e)=>{
                        setEvent({...eventInfo, games: e.target.value})
                    }}
                    style={{border:"1px solid black"}}
                    >
                        <option value = "cricket">Cricket</option>
                        <option value = "cricket">Cricket</option>
                        <option value = "cricket">Cricket</option>
                        <option value = "cricket">Cricket</option>
                    </select>
                </div>
                <div className="form-group ">
                    <label className="form-label">Poster Image</label>
                    <input
                    type="file"
                    className="form-control"
                    onChange={(e)=>{
                        setEvent({...eventInfo, imgName: e.target.files[0]})
                    }}
                    style={{border:"1px solid black"}}
                    ></input>
                    <div className="form-group">
                    <label className="form-label">Registration Fee</label>
                    <input
                    type="text"
                    className="form-control"
                    onChange={(e)=>{
                        setEvent({...eventInfo, registrationFee: e.target.value})
                    }}
                    style={{border:"1px solid black"}}
                    ></input>
                </div>
                </div>
                <div className="form-group mb-3">
                    <label className="form-label">Location</label>
                    <input
                    type="text"
                    className="form-control"
                    onChange={(e)=>{
                        setEvent({...eventInfo, location: e.target.value})
                    }}
                    style={{border:"1px solid black"}}
                    ></input>
                </div>
              
                <div className="form-group d-flex justify-content-between ">
                  <button className="btn btn-success px-5 py-3 " type="submit">Submit</button>
                  <button className="btn btn-danger px-5 py-3" type="reset">Reset</button>
                </div>
                
                <div className="form-group ">
                 
                </div>
            </form> 
     


        </div>

     </div>
        </div>
    </div>
   </div>
   </>
  )
}

export default UpdateEvent
