import { GeneralTC } from "./LegalPageData";
import { LegalPageDataJson } from "./LegalPageDataJson";

export default function TermsandConditions(){
    return (
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 px-0" style={{backgroundColor:"#202124", height:"60px", color:"white", textAlign:"center", fontSize:"15px", fontWeight:"bolder", paddingTop:"15px",}}>
                LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN <button type="button" class="btn btn-danger" style={{borderRadius:"50px"}}>Start Order</button>
                </div>
            </div>
            <div className="container" style={{paddingTop:"30px"}}>
            <div className="row">
                <div className="col-md-3" st>
                    <h3 >TERMS & CONDITIONS</h3>
                    <p style={{color:"#7F7F7F", paddingTop:"30px"}}>
                    PLEASE READ THESE TERMS AND CONDITIONS OF USE CAREFULLY. 
                    BY ACCESSING THIS WEBSITE/M-SITE AND ANY PAGES THEREOF OR THE APP, 
                    YOU AGREE TO BE BOUND BY THE TERMS AND CONDITIONS OF USE BELOW AND/OR 
                    ANY SUCH TERMS AND CONDITIONS OF USE AS ARE COMMUNICATED ON THE PAGES 
                    THEREOF. YOU AGREE TO BE BOUND BY THESE TERMS DISCLOSED AND DESCRIBED 
                    HEREIN AND ALL TERMS INCORPORATED BY REFERENCE. IF YOU DO NOT AGREE TO 
                    ALL THESE TERMS, DO NOT USE THIS WEBSITE/M-SITE/MOBILE APP 
                    (HEREINAFTER KNOWN AS THE “SITE”).
                    </p>
                </div>
                <div className="col-md-3"></div>
                <div className="col-md-6">
                {LegalPageDataJson.map((tc)=>{
                    const tcId= tc.id;
                    console.log(tcId);
                    return <>
                    <div class="accordion accordion-flush" id="accordionFlushExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingOne">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${tcId}`} aria-expanded="false" aria-controls="flush-collapseOne">
                        {tc.tc}
                        </button>
                        </h2>
                        <div id={`collapse${tcId}`} class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        {/* <div class="accordion-body">{tc.text}</div> */}
                        <iframe 
                                src={tc.text}
                                width="750" 
                                height="450" 
                                style={{border:"0"}} 
                                allowfullscreen="" 
                                loading="lazy" 
                                referrerpolicy="no-referrer-when-downgrade"
                                title="kfcMap"
                            >
                            </iframe>
                        </div>
                    </div>
                    </div>
                    {/* <hr/>
                    <p class="d-inline-flex gap-1">
                    <a data-bs-toggle="collapse" href="#sayiwant" role="button" aria-expanded="false" aria-controls="collapseExample" style={{textDecoration:"none", color:"black", paddingTop:"30px"}}>
                    {tc.tc}
                    </a>
                    </p>
                    <div class="collapse" id="sayiwant">
                    <p style={{fontSize:"16px",lineHeight:"24px", color: "#494949", fontWeight: "400", fontStyle: "Droid Sans", fontFamily: "Droid Sans"}}> 
                    {tc.text}
                    </p>
                    </div> */}
                    </>
                })}
                </div>
            </div>
            </div>
        </div>
        </>
    )
}