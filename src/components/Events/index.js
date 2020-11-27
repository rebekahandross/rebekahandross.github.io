import React from "react"
import SectionTitle from "../SectionTitle"
import {WEDDING_DATE_FULL, PARTY_DATE_FULL} from "../../util/constants"
import event1 from "../../images/events/anthony-chapel.jpg"
import event2 from "../../images/events/springdale-station-inside.jpg"

import "./style.css"

const Events = () => {
    return (
        <div id="events" className="event-section section-padding">
            <SectionTitle section={"When & Where"} />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="tabs-site-button">
                            <div className="event-tabs">
                                <div className="col-md-12 col-12">
                                    <div className="event-wrap">
                                        <div className="row">
                                            <div className="col-lg-5 col-md-12 col-12">
                                                <div className="event-img">
                                                    <img src={event1} alt="" />
                                                </div>
                                            </div>
                                            <div className="col-lg-7 col-md-12 col-12">
                                                <div className="event-text">
                                                    <h3>Wedding Ceremony</h3>
                                                    <span>
                                                        {WEDDING_DATE_FULL}
                                                    </span>
                                                    <span>
                                                        Anthony Chapel
                                                        <br />
                                                        Garvan Woodland Gardens
                                                        <br />
                                                        Hot Springs, AR
                                                    </span>
                                                    <p>
                                                        Due to COVID-19, we will
                                                        be having an intimate,
                                                        immediate-family-only
                                                        ceremony at the
                                                        beautiful Anthony Chapel
                                                        in the Garvan Woodland
                                                        Gardens.{" "}
                                                    </p>
                                                    <div className="btn">
                                                        <a
                                                            href="https://www.garvangardens.org/weddings/anthony_chapel/default.aspx"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            Info
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="event-wrap">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-12 col-12">
                                                <div className="event-text event-text-2">
                                                    <h3>Wedding Celebration</h3>
                                                    <span>
                                                        {PARTY_DATE_FULL}
                                                    </span>
                                                    <span>
                                                        Springdate Station 979
                                                        <br />
                                                        Springdale Rd Suite #160
                                                        <br />
                                                        Austin, TX
                                                    </span>
                                                    <p>
                                                        Although we cannot host
                                                        all of the guests we had
                                                        planned for our
                                                        ceremony, please join us
                                                        in 2022 for a
                                                        celebration in Austin
                                                        the following year!{" "}
                                                    </p>
                                                    <div className="btn">
                                                        <a
                                                            href="https://springdalestation.com/"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            Info
                                                        </a>
                                                    </div>
                                                    <div className="btn">
                                                        <a
                                                            href="https://goo.gl/maps/BUi7TBi9NfD2"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            Location
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 col-md-12 col-12">
                                                <div className="event-img">
                                                    <img src={event2} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Events
