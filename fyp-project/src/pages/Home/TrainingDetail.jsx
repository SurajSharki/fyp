import React from 'react'
import {useState, useEffect,useContext} from "react";
import axios from 'axios';
import {useParams} from "react-router-dom";
import { ApiContext } from '../../Context';

const TrainingDetail = () => {
 const [trainingDetail, setTrainingDetail] = useState();
 const {trainingId} = useParams();
 const {userId, userType, loggedIn} = useContext(ApiContext)

 const getTrainingDetail = async () =>{
    try {
        const response = await axios.get(`http://localhost:8000/trainingdetails/${trainingId}`);
    setTrainingDetail(response.data.data)
    } catch (error) {
        console.log(error)
    }
 }
 const applyTraining= async ()=>{
  try {
    const resp = await axios.put(`http://localhost:8000/applyTraining/${trainingId}`,{
      userId: userId,
      
    })
    alert(resp.data.message)
  } catch (error) {
    console.log(error)
  }
 }
 useEffect(() => {
    getTrainingDetail()
    }, []);

  return (
    <div className="container-fluid px-5 py-5">
    <div className="card" >
      <div className="">
        <h4>Training Detail</h4>
        <img src={trainingDetail?.imgName} className="img-fluid" style={{width:"400px", height:"400px", objectFit:"fill"}}></img>
        <h5 className="card-title mb-1">{trainingDetail?.sessionName}</h5>
      </div>
      <div className="card-body">
      <div className="row">
        <div className="col-lg-6 col-12">
        <div className="mb-4">
        <h6 className="text-muted">Academy Name</h6>
        <p className="mb-0">{trainingDetail?.academyName}</p>
          <h6 className="text-muted">Days</h6>
          <p className="mb-0">{trainingDetail?.days}</p>
        </div>
        <div className="mb-4">
          <h6 className="text-muted">Location</h6>
          <p className="mb-0">{trainingDetail?.location}</p>

        </div>
        
        <div className="mb-4">
          <h6 className="text-muted">Game</h6>
          <p>
           {trainingDetail?.games}
          </p>
        </div>
        <div>
          <h6 className="text-muted">Capacity</h6>
          <p>{trainingDetail?.capacity}</p>
        </div>
        </div>
      
       <div className="col-lg-6 col-12"> <div className="mb-4">
          <h6 className="text-muted">Trainer</h6>
          <p className="mb-0">{trainingDetail?.coachName}</p>
          <h6 className="text-muted">Experience</h6>
          <p className="mb-0">{trainingDetail?.experience}</p>
          <h6 className="text-muted">Licensed From</h6>
          <p className="mb-0">{trainingDetail?.License}</p>
        </div>
        <div className="mb-4">
          <h6 className="text-muted">Coach Achievement</h6>         
            <p className='text-black'>{trainingDetail?.achievement}</p>
        </div>
        <div className='mb-4'>
          <h6 className="text-muted">Time And Date</h6>
          <p className="mb-0">Time:{trainingDetail?.time}</p>
          <p className="mb-0">Date:{trainingDetail?.date}</p>
        </div>

        </div>
      </div>
      </div>
      <div className="card-footer d-flex justify-content-between">
        <button className="btn btn-outline-primary">Rs. {trainingDetail?.cost}</button>
        {
          loggedIn == false ?  <button className="btn btn-primary">Login First</button> : loggedIn == true && userType == "student" ?  <button className="btn btn-primary" onClick={()=>{
            applyTraining()
          }}>Register Now</button> :  <button className="btn btn-primary" disabled>Register Now</button>
        }
      </div>
    </div>
  </div>
  )
}

export default TrainingDetail
