import React from "react"
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "../home/Home"
import Drawer from "../drawer/Drawer"
import DealsAndOffers from "../dealsAndOffers/DealsAndOffers"
import DrawerList from "../drawer/DrawerList"
import FooterJsx from "../footer/FooterJsx";
import TermsandConditions from "../footer/TermsandConditions"
import FindKfc from "../footer/FindKfc"
import SignIn from "../account/SignIn"
import Contact from "../contact/contact"

export default function NavBar(){
    return (
        <>
        <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <img src="/KFC_logo.png" alt="img1" id="kfcImage" style={{height:'100px',}}/>
                <Link className="navbar-brand" to="">Home</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/drawer/DrawerList">Menu</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/dealsAndOffera">Deals</Link>
                    </li>
                    <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Merch
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><Link className="dropdown-item" href="#">Action</Link></li>
                        <li><Link className="dropdown-item" href="#">Another action</Link></li>
                        <li><hr className="dropdown-divider"></hr></li>
                        <li><Link className="dropdown-item" href="#">Something else here</Link></li>
                    </ul>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">About</Link>
                    </li>
                </ul>
                <i class="bi bi-person-circle"></i><span style={{ fontWeight: "800", fontFamily:"American Purpose", letterSpacing:"-1px"}}>
                    &nbsp;
                    <Link className="navbar-brand" to="/SignIn">
                        Sign In
                    </Link>
                    &nbsp;
                </span>
                <span style={{ fontWeight: "800", fontFamily:"American Purpose", letterSpacing:"-1px"}}>₹ 0</span><img src="/bucket_cart_icon.svg" alt="bucket_cart_icon" style={{height:"50px"}}/>
                </div>
            </div>
        </nav>
        <Routes>
            <Route path="" element={<Home/>}></Route>
            <Route path="/TermsandConditions" element={<TermsandConditions/>}></Route>
            <Route path="/SignIn" element={<SignIn/>}></Route>
            <Route path="/findKfc" element={<FindKfc/>}></Route>
            <Route path="/ContactUs" element={<Contact/>}></Route>
            <Route path="drawer" element={<Drawer/>}>
                <Route path="DrawerList" element={<DrawerList/>}></Route>
            </Route>
            <Route path="/dealsAndOffera" element={<DealsAndOffers/>}></Route>
        </Routes>
        {/* To fix botton className="fixed-bottom" */}
        <footer>
            <FooterJsx/>
        </footer>
        </BrowserRouter>
        </>
    )
}