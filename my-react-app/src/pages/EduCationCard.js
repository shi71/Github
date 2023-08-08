import React from 'react';
import MainLayout from '../layout/MainLayout';
import { CardTitle, Card, CardBody, List } from 'reactstrap';
const EduCation= (props) => {
    return (

      <>
<MainLayout>
      <div>
     
        <CardTitle tag="h2">Education</CardTitle>
        {/* Education paragraph goes here */}
          <Card>
        <CardBody> 
    <List type="list-unstyled">
        <li><h6 class="fw-bold">Bachelor of Management, University of Lethbridge, Alberta Feb 2019</h6>
        <p>Studied Elective Course: Information System and Management Advanced level: understanding principles and Architecture design of MIS, hardware (networking) & Software(data types, security, applications etc), e-commerce </p>
        </li>                 
        <li> <h6 class="fw-bold">PG Diploma in Computer Application, NIIT, India 1994</h6>
        <p> Studied COBOL, Lotes 123 & Notes, Dbase III-IV, Fortran, GWBasic, Unix and C and did various SME projects alongwith hardware installations, networking, troubleshooting & testing.</p>     
        </li>
        <li> <h6 class="fw-bold">Bachelor of Science, University of Calicut, Kerala, India 1992</h6>
        <p>    </p>
        </li>
    </List>
    </CardBody>
    </Card>
      </div>
      
      </MainLayout>
      </>
    );
  }
  export default EduCation;