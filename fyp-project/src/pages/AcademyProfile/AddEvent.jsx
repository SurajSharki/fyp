import { useState } from "react";
import "./AddEvent.css"; // External CSS file for styling

const AddEvent = () => {
    const [eventInfo, setEvent] = useState();

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-8 col-12 mx-auto">
                        <div className="card shadow-lg border-0 gradient-card">
                            <h3 className="card-title text-center mt-4 mb-0">Add Event</h3>
                            <div className="card-body">
                                <form className="form-event">
                                    <div className="form-group">
                                        <label className="form-label">Event Name</label>
                                        <input
                                            type="text"
                                            className="form-control form-control-lg"
                                            placeholder="Enter event name"
                                            onChange={(e) => {
                                                setEvent({ ...eventInfo, eventName: e.target.value });
                                            }}
                                        ></input>
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Organized By</label>
                                        <input
                                            type="text"
                                            className="form-control form-control-lg"
                                            placeholder="Enter organizer name"
                                            onChange={(e) => {
                                                setEvent({ ...eventInfo, organized: e.target.value });
                                            }}
                                        ></input>
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Age Category</label>
                                        <input
                                            type="text"
                                            className="form-control form-control-lg"
                                            placeholder="e.g., Adult, Under 18"
                                            onChange={(e) => {
                                                setEvent({ ...eventInfo, ageCategory: e.target.value });
                                            }}
                                        ></input>
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Event Description</label>
                                        <textarea
                                            className="form-control form-control-lg"
                                            rows="4"
                                            placeholder="Enter event description"
                                            onChange={(e) => {
                                                setEvent({ ...eventInfo, eventDesc: e.target.value });
                                            }}
                                        ></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Game Category</label>
                                        <select
                                            className="form-select form-control-lg"
                                            onChange={(e) => {
                                                setEvent({ ...eventInfo, games: e.target.value });
                                            }}
                                        >
                                            <option value="">Select a game</option>
                                            <option value="cricket">Cricket</option>
                                            <option value="football">Football</option>
                                            <option value="basketball">Basketball</option>
                                            <option value="tennis">Tennis</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Poster Image</label>
                                        <input
                                            type="file"
                                            className="form-control form-control-lg"
                                            onChange={(e) => {
                                                setEvent({ ...eventInfo, imgName: e.target.files[0] });
                                            }}
                                        ></input>
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Registration Fee</label>
                                        <input
                                            type="text"
                                            className="form-control form-control-lg"
                                            placeholder="Enter registration fee"
                                            onChange={(e) => {
                                                setEvent({ ...eventInfo, registrationFee: e.target.value });
                                            }}
                                        ></input>
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Location</label>
                                        <input
                                            type="text"
                                            className="form-control form-control-lg"
                                            placeholder="Enter event location"
                                            onChange={(e) => {
                                                setEvent({ ...eventInfo, location: e.target.value });
                                            }}
                                        ></input>
                                    </div>
                                    <div className="form-group d-flex justify-content-between">
                                        <button className="btn btn-primary px-4 py-2 shadow-lg" type="update">Update</button>
                                        <button className="btn btn-success px-4 py-2 shadow-lg" type="submit">Submit</button>
                                        <button className="btn btn-danger px-4 py-2 shadow-lg" type="reset">Reset</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddEvent;
