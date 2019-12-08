import React from 'react'
import { Link } from 'gatsby'

const LatestNews = () => {
    return (
        <section className="latestNewsContainer">
            <h3 className="textSectionTitle fadeIn">
                Latest News
            </h3>

            <hr className="fullWidthHR fadeIn"/>

            <div className="latestNewsImgTextContainer">
                <div className="latestNewsImgContainer fadeIn">
                    <Link to="/slug">
                        <img src="https://via.placeholder.com/610x222" alt="" className="latestNewsImg"/>
                    </Link>
                </div>

                <div className="latestNewsTextContainer">
                    <Link to="/slug">
                        <h4 className="latestNewsTitle fadeIn">
                            Lorem ipsum dolor sit amet.
                        </h4>
                    </Link>

                    <p className="latestNewsText fadeIn">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente excepturi magnam debitis quos reprehenderit quam corporis laboriosam. Sunt expedita, maiores atque consectetur asperiores commodi, id nemo modi iusto nisi illo.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default LatestNews