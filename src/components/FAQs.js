import React from 'react'

const FAQs = (props) => {

    return (
        <section className={`textSectionContainer ${props.bgClass}`}>
            <h3 className="textSectionTitle fadeIn minionPro">
                {props.title || "FAQs"}
            </h3>

            <hr className="basicHR" />

            <ul className="faqList">
                <li onClick={() => {
                    document.getElementById("answer1").classList.toggle("answerClosed")
                } } 
                className="faqItem">
                    Frequently asked question?

                    <span id="answer1" className="faqItemAnswer answerClosed">
                        Answer to frequently asked question.
                    </span>
                </li>
                <li className="faqItem"></li>
                <li className="faqItem"></li>
            </ul>
        </section>
    )

}

export default FAQs