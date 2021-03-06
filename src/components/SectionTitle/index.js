import { PropTypes } from 'prop-types'
import React from 'react'

import './style.css'

const SectionTitle = props => {
    return (
        <div className="section-title">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>{props.section}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

SectionTitle.propTypes = {
    section: PropTypes.string,
}

export default SectionTitle
