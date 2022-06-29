import React from 'react'

function Pagination(props) {
    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(props.totalPost / props.postPerPage); i++) {
        pageNumber.push(i)
    }
    return (
        <>{pageNumber.map((data) => (<button onClick={() => props.paginate(data)}>{data}</button>))}
        </>
    )
}

export default Pagination