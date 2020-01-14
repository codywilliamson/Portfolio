import React from "react"
import Layout from '../components/Layout'
import { Link } from 'gatsby'


const _404 = () => {
    return (
        
        <Layout>

            <div className="_404Container whiteHexBg flex flexHardCenter flexColumn">

                <h2 className="_404Title minionPro">
                    Oops! Looks like that wasn't found here.
                </h2>

                <p className="_404Text">
                    Maybe head back <Link to="/" className="_404Link">home</Link>, 
                    check out our <Link to="/products" className="_404Link">products</Link>, 
                    or read our <Link to="/about" className="_404Link">story</Link>.
                </p>

            </div>

        </Layout>

    )
}

export default _404