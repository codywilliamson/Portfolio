import React from 'react'

const FAQs = (props) => {

    return (
        <section className="textSectionContainer">
            <h3 className="textSectionTitle fadeIn minionPro">
                {props.title || "FAQs"}
            </h3>

            <hr className="basicHR" />

            <ul className="faqList">
                <li // eslint-disable-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
                onClick={() => {
                    document.getElementById("answer1").classList.toggle("answerClosed")
                    setTimeout(() => {
                        document.getElementById("answer1").classList.toggle("displayNone")
                    }, 200);
                } } 
                className="faqItem">
                    <span className="faqPlus">
                    &#43;
                    </span> 
                    Frequently asked question?
                    <span id="answer1" className="faqItemAnswer answerClosed displayNone">
                        Answer to frequently asked question.
                    </span>
                </li>


                <li // eslint-disable-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions 
                onClick={() => {
                    document.getElementById("answer2").classList.toggle("answerClosed")
                    setTimeout(() => {
                        document.getElementById("answer2").classList.toggle("displayNone")
                    }, 200);
                } } 
                className="faqItem">
                    <span className="faqPlus">
                    &#43;
                    </span> 
                    Frequently asked question?
                    <span id="answer2" className="faqItemAnswer answerClosed displayNone">
                        Answer to frequently asked question.
                    </span>
                </li>

                <li // eslint-disable-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions 
                onClick={() => {
                    document.getElementById("answer3").classList.toggle("answerClosed")
                    setTimeout(() => {
                        document.getElementById("answer3").classList.toggle("displayNone")
                    }, 200);
                } } 
                className="faqItem">
                    <span className="faqPlus">
                    &#43;
                    </span> 
                    Frequently asked question?
                    <span id="answer3" className="faqItemAnswer answerClosed displayNone">
                        Answer to frequently asked question.
                    </span>
                </li>
            </ul>
        </section>
    )

}

export default FAQs