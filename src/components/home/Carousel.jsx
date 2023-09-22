import { Link } from 'react-router-dom'
import BrowseCategories from './BrowseCategories'

export default function Carousel(){
    return (
        <>
        <div className='container-fluid'>
        <div className="row">
            <div className="col-md-12 px-0">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="Screenshot from 2023-08-22 13-08-27.png" style={{width:'100%'}} className="d-block w-100" alt="img2"/>
                    </div>
                    <div className="carousel-item">
                    <img src="Screenshot from 2023-08-22 13-09-40.png" style={{width:'100%'}} className="d-block w-100" alt="img3"/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            </div>
        </div>
        <div className="row">
        <div className="col-md-12 px-0">
            <div style={{backgroundImage:'url("Browsewelcomkfc.png")', height:"6rem",}} alt="img4"/>
        </div>
        </div>
            <BrowseCategories/>
        </div>
        </>
    )
}