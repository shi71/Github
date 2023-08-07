import React from 'react';

import { Navbar, Container, Row } from 'reactstrap';

//function Header({ children, className }) {
function Header(props) {
    const { children, ...extra } = props;

    // children is what's inside the <Header> tag
    // extra is a JSON object with { className: 'top-header', id: 'header', title: 'This is the header' }
    
    return (
        /*<header className={props.className} id={props.id}>
                {props.children}
        </header>*/
<Container className="fluid">
    <Row>  <Navbar sticky="top" bg="light" expand="lg" collapseOnSelect>
        <header {...extra} >
            {children}
        </header>
        </Navbar>
        
        </Row>
        </Container>
    );
}



export default Header;