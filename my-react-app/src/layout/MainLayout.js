import React from 'react';
import logo from '../assets/images/Shiju.jpg'
import logo1 from '../assets/images/unsplash.jpg'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Container, Row, Col, ListInlineItem, List, ListGroup } from 'reactstrap';
import { ThemeContext } from '../components/ThemeContext';
import FunFact from '../components/FunFacts.js';



const MainLayout = (props) => {
    const { children } = props;

    const { theme } = React.useContext(ThemeContext);

    const styles = {
      backgroundColor: theme === 'light' ? 'white' : 'black'
    }
  


    return (
        <>

        <Container fluid className="mt-2" style={styles}>
            <Header className='top-header' id='header' title='This is the header'>
           
                <Row>
                <Col xs={3} lg={2} className='text-left'>
                <img src={logo} width={75} height={75} className="Ipp-logo" alt= "m71@gmail.com" />
                </Col>
                          <ListGroup>
                        <h1 class="Name">Shiju Puthiyoth</h1>
                        <p class="lead">Software development student at SAIT (Southern Alberta Institute of Technology).</p>
                        <List type="inline">             
        <ListInlineItem>
        <span className="bi bi-envelope pe-1">
        <FaEnvelope /><a href="mailto:shijunam71@gmail.com">Email</a> 
        </span> 
        </ListInlineItem>
        <ListInlineItem><span className="bi bi-linkedin pe-1">
        <FaLinkedin /><a href="https://linkedin.com/in/shijunam1">LinkedIn</a>
        </span> 
        </ListInlineItem>
        <ListInlineItem><span className="bi bi-github  pe-1"><FaGithub /><a href="https://github.com/shi71/Github">Github</a>
        </span> 
        </ListInlineItem>  

        <ListInlineItem><Link to='/work-Experience'className="link">Work Experience</Link> <span> | </span> </ListInlineItem> 
        <ListInlineItem><Link to='/tech-Summary'className="link">Technology Summary</Link><span> | </span></ListInlineItem> 
        <ListInlineItem> <Link to='/Education'className="link">Education</Link></ListInlineItem>
                          </List>      
                        </ListGroup>
                    </Row>
            
            </Header>

       
        <Row className='mt-3'>
            <Col className= 'md'>
             
            {children}
           
            </Col>
            </Row>

            </Container>
            <Footer />
           <FunFact/>
            <img src={logo1} width={30} height={30} className="App-logo" alt= "71@gmail.com" /> 
            
        </>
    );
}

export default MainLayout;

