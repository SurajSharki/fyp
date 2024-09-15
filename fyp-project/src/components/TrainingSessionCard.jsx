import { CalendarIcon, MapPinIcon } from "lucide-react"

export default function TrainingSessionCard() {
  return (
    <div className="card w-100" >
      <img
        src="/placeholder.svg?height=200&width=400"
        alt="Training Session"
        className="card-img-top"
        style={{ height: '12rem', objectFit: 'cover' }}
      />
      <div className="card-header">
        <h2 className="h5 card-title mb-1">Advanced React Techniques</h2>
        <div className="d-flex align-items-center mt-2">
          <div className="avatar me-2">
            <img
              src="/placeholder.svg?height=24&width=24"
              alt="Instructor"
              className="rounded-circle"
              style={{ width: '24px', height: '24px' }}
            />
          </div>
          <span className="text-muted small">Conducted by John Doe</span>
        </div>
      </div>
      <div className="card-body">
        <div className="mb-2">
          <div className="d-flex align-items-center mb-2">
            <MapPinIcon className="me-2" style={{ width: '1.25rem', height: '1.25rem' }} />
            <span className="small">Tech Hub, Silicon Valley</span>
          </div>
          <div className="d-flex align-items-center">
            <CalendarIcon className="me-2" style={{ width: '1.25rem', height: '1.25rem' }} />
            <span className="small">June 15, 2023</span>
          </div>
        </div>
      </div>
      <div className="card-footer d-flex justify-content-between align-items-center">
        <span className="fs-4 text-success fw-bold">$299</span>
        <button className="btn btn-primary">
         View Details
        </button>
      </div>
    </div>
  )
}