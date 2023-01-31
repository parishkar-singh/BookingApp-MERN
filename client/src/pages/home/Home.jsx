import React from "react";
import "./home.css"
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertylist/PropertyList";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Header/>
            <div className="homeContainer">
                <Featured/>
                <h1 className="homeTitle">Browse By Property Type</h1>
                <PropertyList/>
                <h1 className="homeTitle">Home our guests love</h1>
                <FeaturedProperties/>
                <MailList/>
                <Footer/>
                {/*<h1 className="homeTitle">MailList</h1>*/}
            </div>

        </div>
    )
}
export default Home
