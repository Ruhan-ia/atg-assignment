import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './App.css';
import pic1 from './assets/images/whole.png'
import { Form } from 'react-bootstrap';
import Modals from './Modals';

function App() {

  return (
    <>
      <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
           
          <span>
          <img src={pic1} alt="banner" />

          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search for your favorite groups in ATG"
              className="me-2"
              aria-label="Search"
            />
            
          </Form>
          <Navbar.Text>
            Create account: <Modals></Modals>
             
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>

    
    </Navbar>

  {/* banner section */}

  <section>
        <div className='bg '>
        <div className='nm w-auto h-auto mx-auto  my-auto'>
        <h1 className='text'>Computer Engineering</h1>
          <p className='text2'>142,765 Computer Engineers follow this</p>
        </div>
        </div>
      </section>

      {/* cards section */}

      <section className='mt-5 d-flex'>
        
     <div>
     <Tabs
      defaultActiveKey="All posts(32)"
      transition={false}
      id="noanim-tab-example"
      className="mb-3"
    >
      <Tab eventKey="All posts(32)" title="All posts">
        Tab content for Home
      </Tab>
      <Tab eventKey="Article" title="Article" disabled>
        Tab content for Profile
      </Tab>
      <Tab eventKey="Event" title="Event" disabled>
        Tab content for Contact
      </Tab>
      <Tab eventKey="Education" title="Education" disabled>
        Tab content for Contact
      </Tab>
      <Tab eventKey="job" title="job" disabled>
        Tab content for Contact
      </Tab>
    </Tabs>
     </div>

     <div>

     </div>
      </section>
   
    </>
  )
}

export default App
