import { Link } from "react-router-dom";
import { FooterLinkWordsJson } from "./footerLinkWordsJson";


export default function FooterJsx(){
    const FooterLinkWordsCopy = FooterLinkWordsJson

    return(
        <>
        <div className="container-fluid" style={{backgroundColor:"#000000", height:"100%", paddingTop:"50px"}}>
            <div className="row">
                <div className="col-md-2" >
                <img className="fa-flip-rotate" src="/kfcFooterLogo.jpg" alt="img1" id="kfcImage" style={{height:'100px'}}/>
                </div>
                <div className="col-md-5" >
                <div className="row">
                {FooterLinkWordsCopy.map((words) =>{
                    return <>
                            {/* {console.log(words)} */}
                            <div className="col-md-3" style={{color:"white", fontSize:"14px"}}>
                                <Link 
                                    className="nav-link" 
                                    to={words.link}
                                >
                                {words.word}
                                </Link>
                            </div>
                        </>
                    })
                }
                </div>
                </div>
                <div className="col-md-5" >
                   <div className="row">
                        <div className="col-md-4">
                            <Link className="nav-link" to="/findKfc" style={{color:"white"}}>Find a KFC</Link>
                        </div>
                        <div className="col-md-4">
                            <Link className="nav-link" to="" style={{color:"white"}}>
                                <img src="/googlePlay.png" alt="googlePlay"/> 
                            </Link>
                        </div>
                        <div className="col-md-4">
                        <Link className="nav-link" to="" style={{color:"white"}}>
                                <img src="/appstore.png" alt="appStore"/> 
                            </Link>
                        </div>
                   </div>
                </div>
            </div>
        </div>
        </>
    )
}