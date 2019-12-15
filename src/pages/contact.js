import React from "react"
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import contactHeader from '../assets/headers/contactHeader.png'
import ContactForm from '../components/ContactForm'

const Contact = () => {
    return (

        <Layout>

            <PageHeader 
                title="contact us"
                headerStyle="pageTitle"
                bgImage={contactHeader}
            />


            <ContactForm />


        </Layout>

    )
}

export default Contact