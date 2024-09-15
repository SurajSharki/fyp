
import {useState} from "react"
const AddTraining = () => {
    const [trainingInfo, setTrainingSessions] = useState()
  return (
    <>
    <div className="container mt-3">
    <div className="row">
        <div className="col-md-8 col-12 mx-auto">
      
     <div className="card">
     <h3 className="card-title text-center">Add Training</h3>
        <div className="card-body">
             <form>
                <div className="form-group">
                    <label className="form-label">Training Session Name</label>
                    <input
                    type="text"
                    className="form-control"
                    onChange={(e)=>{
                        setTrainingSessions({...trainingInfo, sessionName: e.target.value})
                    }}
                    style={{border:"1px solid black"}}
                    ></input>
                </div>
                <div className="form-group">
                    <label className="form-label">Location</label>
                    <input
                    type="text"
                    className="form-control"
                    onChange={(e)=>{
                        setTrainingSessions({...trainingInfo, location: e.target.value})
                    }}
                    style={{border:"1px solid black"}}
                    ></input>
                </div>
                <div className="form-group">
                    <label className="form-label">Poster Image</label>
                    <input
                    type="file"
                    className="form-control"
                    onChange={(e)=>{
                        setTrainingSessions({...trainingInfo, imgName: e.target.files[0]})
                    }}
                    style={{border:"1px solid black"}}
                    ></input>
                </div>
                <div className="form-group">
                    <label className="form-label">Academy Name</label>
                    <input
                    type="text"
                    className="form-control"
                    onChange={(e)=>{
                        setTrainingSessions({...trainingInfo, academyName: e.target.value})
                    }}
                    style={{border:"1px solid black"}}
                    ></input>
                </div>
                
                <div className="form-group">
                    <label className="form-label">Coach Name</label>
                    <input
                    type="text"
                    className="form-control"
                    onChange={(e)=>{
                        setTrainingSessions({...trainingInfo, coachName: e.target.value})
                    }}
                    style={{border:"1px solid black"}}
                    ></input>
                </div>
                <div className="form-group">
                    <label className="form-label">Coach Training Experience</label>
                    <input
                    type="text"
                    className="form-control"
                    onChange={(e)=>{
                        setTrainingSessions({...trainingInfo, experience: e.target.value})
                    }}
                    style={{border:"1px solid black"}}
                    ></input>
                </div>
                <div className="form-group">
                    <label className="form-label">License From</label>
                    <input
                    type="text"
                    className="form-control"
                    onChange={(e)=>{
                        setTrainingSessions({...trainingInfo, License: e.target.value})
                    }}
                    style={{border:"1px solid black"}}
                    ></input>
                </div>
             
                <div className="form-group">
                    <label className="form-label">Achievement</label>
                    <textarea
                    type="text"
                    className="form-control"
                    onChange={(e)=>{
                        setTrainingSessions({...trainingInfo, achievements: e.target.value})
                    }}
                    style={{border:"1px solid black"}}
                    ></textarea>
                </div>
                <div className="form-group">
                    <label className="form-label">Game Category</label>
                    <select
                 
                    className="form-select"
                    onChange={(e)=>{
                        setTrainingSessions({...trainingInfo, games: e.target.value})
                    }}
                    style={{border:"1px solid black"}}
                    >
                        <option value = "cricket">Cricket</option>
                        <option value = "cricket">Cricket</option>
                        <option value = "cricket">Cricket</option>
                        <option value = "cricket">Cricket</option>
                    </select>
                </div>
                <div className="form-group">
                    <label className="form-label">Training Cost</label>
                    <input
                    type="text"
                    className="form-control"
                    onChange={(e)=>{
                        setTrainingSessions({...trainingInfo, cost: e.target.value})
                    }}
                    style={{border:"1px solid black"}}
                    ></input>
                </div>
                <div className="form-group mb-3">
                    <label className="form-label">Day</label>
                    <input
                    type="text"
                    className="form-control"
                    onChange={(e)=>{
                        setTrainingSessions({...trainingInfo, days: e.target.value})
                    }}
                    style={{border:"1px solid black"}}
                    ></input>
                </div>
                <div className="form-group ">
                  <button className="btn btn-danger px-5 py-3 w-100" type="submit">Submit</button>
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

export default AddTraining
