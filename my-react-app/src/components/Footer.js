import React from 'react';
import{Card,CardFooter} from 'reactstrap'

function Footer(props) {
    return (
        <>
       <Card>
        <CardFooter>
            <footer> 
            <h6 class="fw-bold">© 2023 SAIT RM:NK201 Continuing Education Class</h6>
            </footer>
            </CardFooter>
            </Card>
        </>
    );
}

export default Footer;