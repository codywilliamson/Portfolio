import React from 'react'
import { Link } from 'gatsby'

const LatestNews = () => {
    return (
        <section className="latestNewsContainer flexHardCenter">
            <h3 className="textSectionTitle minionPro fadeIn">
                Latest News
            </h3>

            {/* <hr className="fullWidthHR fadeIn"/> */}

            <div className="latestNewsImgTextContainer minionPro">
                <div className="latestNewsImgContainer fadeIn">
                    <Link to="/slug">
                        <img src="https://via.placeholder.com/610x222" alt="" className="latestNewsImg"/>
                    </Link>
                </div>

                <div className="latestNewsTextContainer">
                    <Link to="/slug">
                        <h3 className="latestNewsTitle fadeIn">
                            Lorem ipsum dolor sit amet.
                        </h3>
                    </Link>

                    <p className="latestNewsText fadeIn">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eos eius, perspiciatis hic ipsam libero nemo eaque, porro sit facere laudantium quisquam corporis odio optio repudiandae eveniet id eligendi atque.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default LatestNews