import {useState} from "react"
import './AddTraining.css'
const AddTraining = () => {
    const [trainingInfo, setTrainingSessions] = useState()
  return (
    <>
    <div className="training-container mt-3">
    <div className="training-row">
        <div className="training-col mx-auto">
      
     <div className="training-card">
     <h3 className="training-card-title text-center">Add Training</h3>
        <div className="training-card-body">
             <form>
                <div className="training-form-group">
                    <label className="training-form-label">Training Session Name</label>
                    <input
                    type="text"
                    className="training-form-control"
                    onChange={(e)=>{ 
                        setTrainingSessions({...trainingInfo, sessionName: e.target.value})
                    }}
                    style={{border:"1px solid black"}}
                    ></input>
                </div>
                <div className="training-form-group">
                    <label className="training-form-label">Location</label>
                    <input
                    type="text"
                    className="training-form-control"
                    onChange={(e)=>{ 
                        setTrainingSessions({...trainingInfo, location: e.target.value})
                    }}
                    style={{border:"1px solid black"}}
                    ></input>
                </div>
                <div className="training-form-group">
                    <label className="training-form-label">Poster Image</label>
                    <input
                    type="file"
                    className="training-form-control"
                    onChange={(e)=>{ 
                        setTrainingSessions({...trainingInfo, imgName: e.target.files[0]})
                    }}
                    style={{border:"1px solid black"}}
                    ></input>
                </div>
                <div className="training-form-group">
                    <label className="training-form-label">Academy Name</label>
                    <input
                    type="text"
                    className="training-form-control"
                    onChange={(e)=>{ 
                        setTrainingSessions({...trainingInfo, academyName: e.target.value})
                    }}
                    style={{border:"1px solid black"}}
                    ></input>
                </div>
                
                <div className="training-form-group">
                    <label className="training-form-label">Coach Name</label>
                    <input
                    type="text"
                    className="training-form-control"
                    onChange={(e)=>{ 
                        setTrainingSessions({...trainingInfo, coachName: e.target.value})
                    }}
                    style={{border:"1px solid black"}}
                    ></input>
                </div>
                <div className="training-form-group">
                    <label className="training-form-label">Coach Training Experience</label>
                    <input
                    type="text"
                    className="training-form-control"
                    onChange={(e)=>{ 
                        setTrainingSessions({...trainingInfo, experience: e.target.value})
                    }}
                    style={{border:"1px solid black"}}
                    ></input>
                </div>
                <div className="training-form-group">
                    <label className="training-form-label">License From</label>
                    <input
                    type="text"
                    className="training-form-control"
                    onChange={(e)=>{ 
                        setTrainingSessions({...trainingInfo, License: e.target.value})
                    }}
                    style={{border:"1px solid black"}}
                    ></input>
                </div>
             
                <div className="training-form-group">
                    <label className="training-form-label">Achievement</label>
                    <textarea
                    type="text"
                    className="training-form-control"
                    onChange={(e)=>{ 
                        setTrainingSessions({...trainingInfo, achievements: e.target.value})
                    }}
                    style={{border:"1px solid black"}}
                    ></textarea>
                </div>
                <div className="training-form-group">
                    <label className="training-form-label">Game Category</label>
                    <select
                 
                    className="training-form-select"
                    onChange={(e)=>{ 
                        setTrainingSessions({...trainingInfo, games: e.target.value})
                    }}
                    style={{border:"1px solid black"}}
                    >
                        <option value = "cricket">Cricket</option>
                        <option value = "football">Football</option>
                        <option value = "basketball">Basketball</option>
                        <option value = "hockey">Hockey</option>
                    </select>
                </div>
                <div className="training-form-group">
                    <label className="training-form-label">Training Cost</label>
                    <input
                    type="text"
                    className="training-form-control"
                    onChange={(e)=>{ 
                        setTrainingSessions({...trainingInfo, cost: e.target.value})
                    }}
                    style={{border:"1px solid black"}}
                    ></input>
                </div>
                <div className="training-form-group mb-3">
                    <label className="training-form-label">Day</label>
                    <input
                    type="text"
                    className="training-form-control"
                    onChange={(e)=>{ 
                        setTrainingSessions({...trainingInfo, days: e.target.value})
                    }}
                    style={{border:"1px solid black"}}
                    ></input>
                </div>
                <div className="training-form-group">
                  <button className="training-btn btn-danger px-5 py-3 w-100" type="submit">Submit</button>
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

