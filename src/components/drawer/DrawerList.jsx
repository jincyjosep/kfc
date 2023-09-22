import React,{ useState } from 'react';
import { BrowserRouter,Routes,Link, Route,Outlet } from 'react-router-dom';
import { DrawerListJson, DrawerLists1 } from './DrawerListJson';

export default function DrawerList(){
    const [state, setState] = useState( DrawerLists1)
    const categories = ["PERI PERI CHICKEN", "VALUE SNACKERS", "CHICKEN ROLLS", "BOX MEALS", "BEVERAGES"];

    const onAddToCart = (e,detail,details) => {
        console.log("onAddToCart",details)
    }

    const getDataForCategory = (state, category) => {
        const categoryData = state.find(item => item.category === category);
        // const categoryDataTitle = state.find(item => {return item.category});
        if (categoryData) {
        //   Mapping from category to display the cards
          return categoryData.details.map((detail) => {
            return <>
                    <div className='col-md-6 px-0' key={detail} style={{paddingTop:"50px"}}>
                        <div className="card" style={{width: "18rem",marginLeft:"50px"}}>
                            <img src={detail.pic} className="card-img-top" alt="pic" style={{height:"250px"}}/>
                            <div className="card-body">
                                <h6 className="card-title">{detail?.cardTitle}</h6>
                                <span style={{fontSize:"12px"}}><img src="/nonVegIcon.png" alt=''style={{height:"10px"}}/>&nbsp;&nbsp; {detail.food} &#x2022; {detail.serve}</span>
                                <h5 className="card-title">{detail.price}</h5>
                                <p className="card-text" style={{fontSize:"14px", height:"100px"}}>{detail.text}</p>
                                <button type="button" value={detail} value2={detail.price} class="btn btn-danger" onClick={(e)=>onAddToCart(e,detail.price,detail.cardTitle)}>Add to Cart<i class="bi bi-basket3-fill"></i></button>
                            </div>
                        </div>
                    </div>
                    </>
                }
            );
        } else {
          return [];
        }
    };

    const getCardForCategories = (state, category) => {
        const categoriesDataForCard = state.find(item => item.category === category);
        // To get print the heading of the category
            return <>
                    <h3 id={`${categoriesDataForCard.id}`} key={categoriesDataForCard.category} style={{paddingTop:"30px", marginLeft:"50px"}}>{categoriesDataForCard.category}</h3>
                    {console.log(`DrawerList#${categoriesDataForCard.id}`)}
                    {getDataForCategory(state, category)}
                </>
    }
    
    return(
        <>
            <div className="container" style={{backgroundColor:"#F8F7F5", fill:"Background"}}>
                <div className="row" >
                    {categories.map((category) => {
                    return getCardForCategories(state, category);
                    })}
                </div>   
            </div>
        </>
    )
}