import { useState } from "react"
import { SearchIcon } from 'lucide-react'
import TrainingSessionCard from "../../components/TrainingSessionCard"
const TrainingPage = () => {
    const [searchTerm, setSearchTerm] = useState()
  return (
    <>
      <div className="container px-4 py-5">
        <div className="mb-4">
            <h1 className="display-5 fw-bold mb-3">Training Sessions</h1>
        <div className="row">
            <div className="col-md-6">
            <div className="position-relative">
            <input
                type="text"
                placeholder="Search sessions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="form-control ps-5"
                style={{border:"1px solid black"}}
            />
            <SearchIcon 
                className="position-absolute top-50 start-0 translate-middle-y text-muted ms-3"
                size={20} 
            />
            </div>

            </div>

        </div>
        </div>
        <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
                <TrainingSessionCard></TrainingSessionCard>

            </div>

        </div>
    </div>

    </>
  )
}

export default TrainingPage
