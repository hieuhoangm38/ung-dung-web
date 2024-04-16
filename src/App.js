import { Container, Row } from 'react-bootstrap';
import './App.scss'
import Header from './Components/Header';
import TableUsers from './Components/TableUsers';


import { ToastContainer, toast } from 'react-toastify';

function App() {



  return (

    <>
      <div className='app-container'>

        <Header />
        <Container>

          <TableUsers />
        </Container>



      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
    </>
  );
}

export default App;
