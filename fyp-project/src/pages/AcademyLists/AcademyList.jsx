import SportsAcademyCard from "../cards/SportAcademyCard";
import { useState, useEffect } from "react";
import axios from "axios";

const AcademyList = () => {
  const [academies, setAcademies] = useState([]);

  const fetchAcademies = async () => {
    try {
      const response = await axios.get("http://localhost:8000/allAcademies");
      console.log(response.data);
      setAcademies(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAcademies();
  }, []);
  return (
    <>
      <h2 className="mx-4 my-4">Explore Our Academies</h2>
      <div className="container-fluid px-5">
        <div className="row">
          {academies.map((academy) => (
            <div className="col-md-4 col-lg-4 col-12" key={academy?._id}>
              <SportsAcademyCard academies={academy} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AcademyList;
