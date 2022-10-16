import React from 'react'

function ListEvent({eventsData, editImg}) {
    return (
        <>
            <div className="third-full-con-pro">
                {eventsData.length > 0 && eventsData.map((obj) => {
                    const base64String = btoa(
                        String.fromCharCode(...new Uint8Array(obj.eventImage.data.data))
                    );
                    return (
                        <div key={obj.eve}>
                            <div className="third-sub-con">
                                <div className="img">
                                    <img className="eve-img" src={`data:image/png;base64,${base64String}`}>
                                    </img>
                                </div>
                                <div className="center-pro">
                                    <div className="third-head">{obj.eventName}</div>
                                    {/* {editImg && <div className="button-pro">
                                        <button className="edit-info" onClick={() => setcontent("edit-profile") && setdata(obj)}>
                                            <img src={editImg}></img>
                                        </button>
                                    </div>} */}
                                </div>
                                <p className="event-details">
                                    <p>{obj.eventDescription}</p>{" "}
                                    <p>{obj.eventDate}</p>
                                    <p>{obj.eventTime}</p>
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default ListEvent
