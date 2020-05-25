import React from "react";

const Pagination = ({perPage,totalPosts,paginate})=>{

    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalPosts/perPage);i ++){
        pageNumbers.push(i);
    }
    console.log("Inside Pagination");

    return(
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number =>(
                    <li key={number} className="page-item">
                        <a onClick={()=>paginate(number)} href="#resultsDiv" className="page-link bg-info" style={{color:"white"}}>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}


export default Pagination;