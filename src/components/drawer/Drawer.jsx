import React,{ useState } from 'react';
import { BrowserRouter,Routes,Link, Route,Outlet } from 'react-router-dom';
import { DrawerListJson, DrawerLists1 } from './DrawerListJson';

export default function Drawer(){
    const [state, setState] = useState( DrawerLists1)
    const categories = ["PERI PERI CHICKEN", "VALUE SNACKERS", "CHICKEN ROLLS", "BOX MEALS", "BEVERAGES"];

    const getDrawerVariables = (state, category) => {
        const categoriesDataForCard = state.find(item => item.category === category);
        // To get print the heading of the category
            return <React.Fragment>
                {/* FOR JUMPING TO SECTIONS LINK WILL NOT WORK FOR UI " YOU HAVE TO USE <a></a>" */}
                    <a
                        className="nav-link" 
                        style={{color:"black", fontSize:"20px"}} 
                        href={`#${categoriesDataForCard.id}`}
                    >
                           {categoriesDataForCard.category}
                    </a>
                </React.Fragment>
    }

    return(
        <>
        <div className="container" >
            <div className="row">
                <div className="col-md-4">
                    <div className="row">
                            <div className="col-md-3" style={{position:"fixed"}}>
                                {/* I think we can render like this too instead of outlet following commented is the example */}
                                {/* <div className="list-group" id="list-tab" role="tablist">
                                <a className="list-group-item list-group-item-action" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home">Home</a>
                                <a className="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile">Profile</a>
                                <a className="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" href="#list-messages" role="tab" aria-controls="list-messages">Messages</a>
                                <a className="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href="#list-settings" role="tab" aria-controls="list-settings">Settings</a>
                                <a className="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile">Profile</a>
                                <a className="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" href="#list-messages" role="tab" aria-controls="list-messages">Messages</a>
                                <a className="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href="#list-settings" role="tab" aria-controls="list-settings">Settings</a>
                                <a className="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile">Profile</a>
                                <a className="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" href="#list-messages" role="tab" aria-controls="list-messages">Messages</a>
                                <a className="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href="#list-settings" role="tab" aria-controls="list-settings">Settings</a>
                                </div> */}
                                <nav className="nav flex-column">
                                <Link
                                    className="nav-link" 
                                    style={{color:"black", fontSize:"30px", fontWeight:"bolder"}} 
                                    to=""
                                >
                                        KFC MENU
                                </Link>
                                {categories.map((category) => {
                                return getDrawerVariables(state, category)})}
                                {/* <Link 
                                    className="nav-link alink" 
                                    id="list-peri-peri-chicken" 
                                    to="/drawer/DrawerList" 
                                    style={{color:"black"}}
                                >
                                    PERI PERI CHICKEN
                                </Link>
                                <Link 
                                    className="nav-link" 
                                    id="list-value-snackers" 
                                    data-bs-toggle="list" 
                                    to="/list-profile" 
                                    role="tab" 
                                    aria-controls="list-profile" 
                                    style={{color:"black"}}
                                >
                                    VALUE SNACKERS
                                </Link>
                                <Link 
                                    className="nav-link" 
                                    id="list-chicken-roll" 
                                    data-bs-toggle="list" 
                                    to="/list-messages" 
                                    role="tab" 
                                    aria-controls="list-messages" 
                                    style={{color:"black"}}
                                >
                                    CHICKEN ROLLS
                                </Link>
                                <Link 
                                    className="nav-link" 
                                    id="list-chiken-buckets" 
                                    data-bs-toggle="list" 
                                    to="/list-settings" 
                                    role="tab" 
                                    aria-controls="list-settings" 
                                    style={{color:"black"}}
                                >
                                    CHICKEN BUCKETS
                                </Link>
                                <Link 
                                    className="nav-link" 
                                    id="list-biriyani-buckets" 
                                    data-bs-toggle="list" 
                                    to="/list-biriyani" 
                                    role="tab" 
                                    aria-controls="list-buckets" 
                                    style={{color:"black"}}
                                >
                                    BIRYANI BUCKETS
                                </Link>
                                <Link 
                                    className="nav-link" 
                                    id="list-box-meals" 
                                    data-bs-toggle="list" 
                                    to="/list-box" 
                                    role="tab" 
                                    aria-controls="list-meals" 
                                    style={{color:"black"}}
                                >
                                    BOX MEALS
                                </Link> */}
                                </nav>
                            </div>
                            {/* <div className="col-md-9"></div> */}
                    </div>
                </div>
                <div className="col-md-8">
                    <Outlet/>
                </div>
                {/* I think we can render like this too instead of outlet following commented is the example */}
                {/* <div className="col-md-8">
                    <div className="tab-content" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-peri-peri-chicken">
                                Some placeholder content in a paragraph relating to "Home". And some more content, used here just to pad out 
                                and fill this tab panel. In production, you would obviously have more real content here. And not just text. 
                                It could be anything, really. Text, images, forms.
                            </div>
                            <div className="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-value-snackers">
                                Now is the winter of our discontent
                                Made glorious summer by this sun of York;
                                And all the clouds that lour'd upon our house
                                In the deep bosom of the ocean buried.
                                Now are our brows bound with victorious wreaths;
                                Our bruised arms hung up for monuments;
                                Our stern alarums changed to merry meetings,
                                Our dreadful marches to delightful measures.
                                Grim-visaged war hath smooth'd his wrinkled front;
                                And now, instead of mounting barded steeds
                                To fright the souls of fearful adversaries,
                                He capers nimbly in a lady's chamber
                                To the lascivious pleasing of a lute.
                                But I, that am not shaped for sportive tricks,
                                Nor made to court an amorous looking-glass;
                                I, that am rudely stamp'd, and want love's majesty
                                To strut before a wanton ambling nymph;
                                I, that am curtail'd of this fair proportion,
                            </div>
                            <div className="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-chicken-roll">
                                e lascivious pleasing of fearful adversaries,
                                Now is that am rudely stamp'd, and want love's majesty
                                To the clouds the ocean buried.
                                Now is that am curtail'd of the deep bosom of fearful adversaries,
                                Now is the souls of the souls of our discontent
                                Made to merry meeting of our house
                                In the clouds that am not shaped for sportive tricks,
                                He capers nimbly in a lady's chamber
                                To the winter of mountings,
                                He capers nimbly in a lady's chamber
                                To the ocean buried.
                                Now is the clouds that love's majesty
                                To strut before a want lour'd upon our brows bound war hath smooth'd his sun of this sun of th
                            </div>
                            <div className="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-chiken-buckets">
                                Hello there
                            </div>
                            <div className="tab-pane fade" id="list-biriyani" role="tabpanel" aria-labelledby="list-biriyani-buckets">
                                Hello i'm not here
                            </div>
                            <div className="tab-pane fade" id="list-box" role="tabpanel" aria-labelledby="list-box-meals">
                                Hello i will be here
                            </div>
                    </div>
                </div> */}
            </div>
        </div>
        </>
    )
}