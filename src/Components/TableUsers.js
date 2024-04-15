
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { fetchAllUser } from '../Services/UserServices';
import ReactPaginate from 'react-paginate';

const TableUsers = (props) => {
    const [listUsers, setListUsers] = useState([]);
    const [totalUsers, setTotalUsers] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    useEffect(()=>{
        //call apis
        //dry
        getUsers(1);
    },[])

    const getUsers = async (page) => {
        let res = await fetchAllUser(page);
        console.log("check new res: ", res);

        if(res && res.data){
          console.log(res);
          setTotalUsers(res.total);
          setListUsers(res.data);
          setTotalPages(res.total_pages);
        }
        console.log(">>> check response: ", res)
    }

        console.log(listUsers);

      const handlePageClick = (event) =>{
         console.log("event lib: ", event); 
         //dấu + trước event không biết đưuọc thg event này là string hay số trong trường hợp là string thì convert sang số
         getUsers(+event.selected + 1);
      }

    return (<>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Email</th>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
      <tbody>
        {
          listUsers && listUsers.length > 0 && 
          listUsers.map((item,index) => {
            return (        
            <tr key={`users-${index}`}>
              <td>{item.id}</td>
              <td>{item.email}</td>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
            </tr>)
          })
        }
      </tbody>
    </Table>
    <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={totalPages}
        previousLabel="< previous"
        
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
      />
    </>)
}

export default TableUsers;