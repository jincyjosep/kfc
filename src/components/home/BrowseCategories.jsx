import { Link } from 'react-router-dom'

export default function BrowseCategories(){

    
    return(
        <div className="container">
                <div className="row" style={{paddingTop:"50px", paddingBottom:"50px"}}>
                    <div className='col-md-3' >
                        <h4 style={{fontSize: "25px",fontWeight:"bolder"}}>BROWSE CATEGORIES</h4>
                    </div>
                    <div className='col-md-9'>
                        <hr style={{color:'##E3E46B'}}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="card" >
                            <img src="Browseperiperi.png" className="card-img-top" alt="img5"/>
                            <div className="card-body">
                                <Link href="#" className="" style={{textDecoration:"none", color:"black", blockSize:"5em", fontWeight: "bolder"}}><b>PERI PERI CHICKEN</b></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card" >
                            <img src="Browsechickenbuckets.png" className="card-img-top" alt="img5"/>
                            <div className="card-body">
                                <Link href="#" className="" style={{textDecoration:"none", color:"black", blockSize:"5em", fontWeight: "bolder"}}><b>PERI PERI CHICKEN</b></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card" >
                            <img src="Browseburgers.png" className="card-img-top" alt="img5"/>
                            <div className="card-body">
                                <Link href="#" className="" style={{textDecoration:"none", color:"black", blockSize:"5em", fontWeight: "bolder"}}><b>PERI PERI CHICKEN</b></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card" >
                                <img src="Browseboxmeals.png" className="card-img-top" alt="img5"/>
                                <div className="card-body">
                                    <Link href="#" className="" style={{textDecoration:"none", color:"black", blockSize:"5em", fontWeight: "bolder"}}><b>PERI PERI CHICKEN</b></Link>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{paddingTop: '50px'}}>
                    <div className="col-md-3">
                        <div className="card" >
                            <img src="Browsechickenroll.png" style={{height:"319px"}} className="card-img-top" alt="img5"/>
                            <div className="card-body">
                                <Link href="#" className="" style={{textDecoration:"none", color:"black", blockSize:"5em", fontWeight: "bolder"}}><b>PERI PERI CHICKEN</b></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card" >
                            <img src="Browsesnackers.png" style={{height:"319px"}} className="card-img-top" alt="img5"/>
                            <div className="card-body">
                                <Link href="#" className="" style={{textDecoration:"none", color:"black", blockSize:"5em", fontWeight: "bolder"}}><b>PERI PERI CHICKEN</b></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card" >
                            <img src="Browsebiriyanibuckets.png" style={{height:"319px"}} className="card-img-top" alt="img5"/>
                            <div className="card-body">
                                <Link href="#" className="" style={{textDecoration:"none", color:"black", blockSize:"5em", fontWeight: "bolder"}}><b>PERI PERI CHICKEN</b></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card" >
                                <img src="Browseviewall.png" className="card-img-top" style={{height:"319px"}} alt="img5"/>
                                <div className="card-body">
                                    <Link href="#" className="" style={{textDecoration:"none", color:"black", blockSize:"5em", fontWeight: "bolder"}}><b>VIEW ALL</b></Link>
                                </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}