import React from 'react'
import ReactPaginate from 'react-paginate';

type propsPagination={
  selectCurrentPage: number
  setselectCurrentPage:(i:number)=>void
}


const Pagination:React.FC<propsPagination>=({ selectCurrentPage, setselectCurrentPage })=> {

  return (
    <div className="paginateWrapper">
    <ReactPaginate
     className='paginate'
       
        nextLabel="Вперед >"
        onPageChange={(event)=>{setselectCurrentPage(event.selected+1)}}
        pageRangeDisplayed={3}
        pageCount={3}
        forcePage={selectCurrentPage-1}
        previousLabel="< Назад"
        
      />
      </div>
  )
}
export default  Pagination