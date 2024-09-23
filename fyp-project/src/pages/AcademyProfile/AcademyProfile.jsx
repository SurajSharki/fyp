import axios from "axios"
import {useState,useEffect} from "react";
import {useNavigate} from "react-router-dom"
import imgUrl from "../../assets/img-02_003.jpg"

const AcademyProfile = ()=>{
  const[academyInfo, setAcademyInfo] = useState({});
  const navigator = useNavigate()

  const verifyAcademy = async()=>{
    try {
      const  response = await axios.get('https://localhost:8000//verfifyAcademy',
       {
        withCredentails: true
       }
      );
      if(response.data.status !== "ok"){
          navigator("/login")
      }

    } catch (error) {
      console.log(error)
    }

  }
  useEffect(()=>{
    verifyAcademy()
  }
  )
  // console.log(academyInfo.profilePicture.name)
  return(
    <>
    <div className="container my-4">
    <div className="row">
      <div className="col-md-8 col-12">
        <div className="card">
        <h3>Academy Basic Info</h3>

        <div className="card-body">
         <form>
         <div className="form-group mb-2">
                 <label className="form-label">Academy Name</label>
                 <input
                 className="form-control"
                   value={academyInfo.name}
                   onChange={(e) => setAcademyInfo({ ...academyInfo, name: e.target.value })}
                   style={{border:"1px solid black"}}
                 />
               </div>
               <div className="form-group">
                <label className="form-label">Owner Name</label>
                <input className="form-control"
                style={{border:"1px solid black"}}
                onChange = {(e)=>{
                  setAcademyInfo({...academyInfo, ownerName:e.target.value})
                }}
                >
                </input>
               </div>
               <div className="form-group">
                <label className="form-label">
                  Address
                </label>
                <input
                className="form-control"
                style={{border:"1px solid black"}}
                onChange={(e)=>{
                  setAcademyInfo({...academyInfo, address: e.target.value})
                }}
                >

                </input>

               </div>
               <div className="form-group">
                 <label className="form-label">About</label>
                 <textarea
                 className="form-control"
                 rows= "3"
                   value={academyInfo.address}
                   onChange={(e) => setAcademyInfo({ ...academyInfo, about: e.target.value })}
                   style={{border:"1px solid black"}}
                 />
               </div>
               <div className="form-group">
                 <label className="form-label">Contact Number</label>
                 <input
                 className="form-control"
                   value={academyInfo.contactNumber}
                   onChange={(e) => setAcademyInfo({ ...academyInfo, contactNumber: e.target.value })}
                   style={{border:"1px solid black"}}
                 />
               </div>
               <div className="form-group">
                 <label className="form-label">Primary Email</label>
                 <input
                   value={academyInfo.sportCategory}
                   className="form-control"
                   style={{border:"1px solid black"}}
                   onChange={(e) => setAcademyInfo({ ...academyInfo, email: e.target.value })}
                 />
               </div>
               <div className="form-group">
                <label>Profile Picture</label>
                <input className="form-control"
                type="file"
                style={{border:"1px solid black"}}
                onChange={(e) => setAcademyInfo({ ...academyInfo, profilePicture:e.target.files[0]})}
                >
                </input>
               </div>
         </form>
        </div>
        </div>
      
      </div>
      <div className="col-md-4 col-12">
        <div className="card mb-4">
          <div className="card-body">
            <div className="mx-auto" style={{width:"100%"}}> 
            <img src={imgUrl} className="img-fluid rounded">
            </img>
            </div>
            <h3 className="card-title mt-3">Academy Name: {academyInfo.name}</h3>
            <p className="fs-4 fw-bold">Location: {academyInfo.address}</p>
            <h6 className="card-text text-center">Joined Date: 2024-04-12</h6>
            </div> 

        </div>
        <div className="d-flex justify-content-between">
          <button className="btn btn-success py-3 px-3">Training Sessions</button>
          <button className="btn btn-primary py-3 px-5">Events</button>
        </div>
      </div>

    </div>
    </div>
     </>
  )
}

export default AcademyProfile;