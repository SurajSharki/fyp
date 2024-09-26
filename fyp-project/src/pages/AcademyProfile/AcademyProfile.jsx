import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate,useParams,Link } from "react-router-dom";
// import imgUrl from "../../assets/img-02_003.jpg";
import "./AcademyProfile.css";

const AcademyProfile = () => {
  const [academyInfo, setAcademyInfo] = useState({});
  const [academyData, setAacdemyData]= useState({})
  const navigator = useNavigate();
  const {academyId} = useParams()

  const verifyAcademy = async () => {
    try {
      const response = await axios.get('http://localhost:8000/verfifyAcademy', {
        withCredentials: true
      });
      console.log(response, "k aricha")
      if (response.data.status !== "ok") {
        navigator("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addDetails = async()=>{
    try {
      const formDate = new FormData();
      for(const key in academyInfo){
        if(academyInfo[key] !== null && academyInfo[key] !==""){
          formDate.append(key, academyInfo[key]);
        }
      }
      const response = await axios.put(`http://localhost:8000/addAcademyProfile/${academyId}`,formDate)
      console.log("New response", response)
      if(response.data.success === true){
        alert("Profile Updated")
      }
      
    } catch (error) {
      console.log(error);
      
    }
  }


  const readDetails = async()=>{
    try {
      const resp = await axios.get(`http://localhost:8000/academyInfo/${academyId}`)
      setAacdemyData(resp.data.data)
      console.log(resp)
      
    } catch (error) {
      
    }

  }
  useEffect(() => {
    verifyAcademy();
    readDetails();
  }, []);

  return (
    <>
      <div className="academy-container my-4">
        <div className="academy-row">
          <div className="academy-left-col">
            <div className="academy-card">
              <h3>Academy Basic Info</h3>

              <div className="academy-card-body">
                <form onSubmit={(e)=>{
                  e.preventDefault()
                  addDetails()
                }}>
                  <div className="academy-form-group mb-2">
                    <label className="academy-form-label">Academy Name</label>
                    <input
                      className="academy-form-control"
                      value={academyInfo.name !== undefined? academyInfo.name :academyData?.name || ""}
                      onChange={(e) => setAcademyInfo({ ...academyInfo, name: e.target.value })}
                    />
                  </div>
                  <div className="academy-form-group">
                    <label className="academy-form-label">Owner Name</label>
                    <input
                      className="academy-form-control"
                      value={academyInfo.ownerName !== undefined? academyInfo.ownerName :academyData?.ownerName || ""}
                      onChange={(e) => {
                        setAcademyInfo({ ...academyInfo, ownerName: e.target.value });
                      }}
                    />
                  </div>
                  <div className="academy-form-group">
                    <label className="academy-form-label">Address</label>
                    <input
                      className="academy-form-control"
                      value={academyInfo.address !== undefined? academyInfo.address :academyData?.address || ""}
                      onChange={(e) => {
                        setAcademyInfo({ ...academyInfo, address: e.target.value });
                      }}
                    />
                  </div>
                  <div className="academy-form-group">
                    <label className="academy-form-label">About</label>
                    <textarea
                      className="academy-form-control"
                      rows="3"
                      value={academyInfo.about !== undefined? academyInfo.about :academyData?.about || ""}
                    
                      onChange={(e) => setAcademyInfo({ ...academyInfo, about: e.target.value })}
                    />
                  </div>
                  <div className="academy-form-group">
                    <label className="academy-form-label">Contact Number</label>
                    <input
                      className="academy-form-control"
                      value={academyInfo.contactNumber !== undefined? academyInfo.contactNumber :academyData?.contactNumber || ""}
                      onChange={(e) => setAcademyInfo({ ...academyInfo, contactNumber: e.target.value })}
                    />
                  </div>
                  <div className="academy-form-group">
                    <label className="academy-form-label">Primary Email</label>
                    <input
                      className="academy-form-control"
                      value={academyInfo.email !== undefined? academyInfo.email :academyData?.email || ""}
                      onChange={(e) => setAcademyInfo({ ...academyInfo, email: e.target.value })}
                      disabled
                    />
                  </div>
                  <div className="academy-form-group">
                    <label className="academy-form-label">Profile Picture</label>
                    <input
                      className="academy-form-control"
                      type="file"
                      
                      onChange={(e) => setAcademyInfo({ ...academyInfo, profilePicture: e.target.files[0] })}
                    />
                  </div>
                  <div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="academy-right-col">
            <div className="academy-card">
              <div className="academy-card-body">
                <div className="academy-img-container ">
                  <img src={academyData?.profilePicture} className="img-fluid mx-auto " alt="Academy" style={{height: "300px", width:"100%", objectFit:"contain"}}/>
                </div>
                <h3 className="academy-title mt-3">Academy Name: {academyInfo.name !== undefined? academyInfo.name :academyData?.name || ""}</h3>
                <p className="academy-location fw-bold text-center">Location: {academyData?.address}</p>
                <h6 className="academy-joined text-center">Joined Date:{academyData?.created} </h6>
              </div>
            </div>
            <div className="academy-btn-group">
              <Link to="/traininglist" className="academy-btn-success text-decoration-none">Training Sessions</Link>
              <button className="academy-btn-primary">Events</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AcademyProfile;
