import { useEffect, useState  } from "react"
import axios from "axios"

export default function DealsAndOffers(){
    //we need to initialize the variable with array before fetching the data from api
    //otherwise it will be throwing an error
    const [ dummyState, setDummyState] = useState([]) 
    const [ dummyStatePerPage, setDummyStatePerPage] = useState(10) 
    //initial value would be 1 because it would be defaultly showing
    const [ currentPage, setCurrentPage ] = useState(1)
    const numberArray =  [2, 3, 4, 3, 3, 2, 4, 9, 1, 2, 5, 5]
    const newNumberArray = 

    useEffect(() => {
        // https://reqres.in/api/users?page=1
        // https://dummyjson.com/users hey
        // https://jsonplaceholder.typicode.com/todos
        axios.get("https://reqres.in/api/users?page=1")
        .then((res)=>{
            console.log(res.data.data);
            setDummyState(res.data.data)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])

    const onChangeHandler = (page) => {
        setCurrentPage(page)
    }
    
    // We need to know total number of pages
    // No need to hardcode (dummyState.length / 10) so create a state dummyStatePerPage
    const totalNumberOfPages = Math.ceil(dummyState?.length / dummyStatePerPage)

    // We need to create an array for the number to be displayed for pagination
    // To get the index for creating pagination
    const pages = [...Array(totalNumberOfPages + 1).keys()].slice(1)

    //index of last dummydata per page
    const indexOfLastDummyState = currentPage * dummyStatePerPage
    const indexOfFirstDummyState = indexOfLastDummyState - dummyStatePerPage

    const vissibleDummyState = dummyState.slice(indexOfFirstDummyState, indexOfLastDummyState)

    return(
        <div style={{marginTop:"150px"}}>
            {newNumberArray}
        {/* PAGINATION
        <button>DUMMY DATA</button> */}
        {/* <table class="table table-striped">
            <thead>
                <th>ID</th>
                <th>NAME</th>
                <th>LASTNAME</th>
                <th>PHONE</th>
                <th>ACTIONS</th>
            </thead>
            <tbody>
                {vissibleDummyState?.map((user) =>{
                    return <>
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.phone}</td>
                            <td>
                                <button>
                                <i className="bi bi-trash3"></i>
                                </button>
                            </td>
                        </tr>
                       </>
                })}
            </tbody>
        </table> */}
        <table class="table table-striped">
            <thead>
                <th>First Name</th>
                <th>Second Name</th>
                <th>Email</th>
            </thead>
            <tbody>
                
                {dummyState.map((data) => { 
                return <>
                        <tr>
                            <td>{data.first_name}</td>
                            <td>{data.last_name}</td>
                            <td>{data.email}</td>
                        </tr>
                    </>
                })}
            </tbody>
        </table>
        <div style={{marginBottom:"200px"}}>
        <span>prev</span>
        <p>{pages.map((page)=> (<span key={page} onClick={()=>onChangeHandler(page)}>{`${page} | `}</span>))}</p>
        <span>next</span>
        </div>
        </div>
    )
}