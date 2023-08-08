import React from 'react';
import MainLayout from '../layout/MainLayout';
import { CardTitle, Card, CardBody, List } from 'reactstrap';


const WorkExperience = (props) => {
  
  return (
    
    <>
    <MainLayout>
    
    <CardTitle tag="h2">Work Experience</CardTitle>
    
    <Card>
        <CardBody>
      {/* Work Experience paragraph goes here */}
      
        <List type="list-unstyled">
        <li><h6 class="fw-bold">Web Development Program (Student-Cont. Education) / Southern Alberta Institute of Technology  June 2023- Present</h6>
        <p>Completed an intensive web development program covering both front-end and back-end technologies, including HTML, CSS, JavaScript, React, Node.js, and databases (Microsoft SQL), back-end architechture RAD, .Net</p>
        <p>Designed and developed responsive web interfaces, demonstrating proficiency in creating visually appealing and user-friendly designs.</p>
        <p>Implemented interactive features using JavaScript to enhance user engagement and overall functionality.</p>
        <p>Gained hands-on experience in building APIs, handling data manipulation, and ensuring data security.</p>
        <p>Collaborated with fellow students on group projects, fostering teamwork and effective project management skills.</p>
        
        </li>
        
        <li> <h6 class="fw-bold">Administrative Support II  & Covid Vaccine Assistance Team - Southport Tower / Alberta Health Services March 2021-2023</h6>
        <p>   Communicated vaccine information to the general public and healthcare professionals in a fast paced, high-volume environment, coordinated in vaccine appointment system following updated criteria and guidelines, streamlined the process and saved an estimated 200+ hours per week.  </p>
        <p>   Followed processes and maintained confidentiality, consistency and accuracy of client information when entering in the system, kept up to date with eLearning information and communications to provided accurate information.  </p>
        <p>   Directed callers to other provincial services based on their needs and program as necessary, managed and resolved client's complaints, Identified and escalated complex issues to supervisors.  </p>
        </li>
        
        <li><h6 class="fw-bold">Medical Device Reprocessing Technician- Foothills Medical Center / Alberta Health Services July 2012- April 2021</h6>
        <p>   Effective communication with OR to coordinate multiple priorities and tasks for Patient Care (OR requisition), assembled Surgical instruments for surgical procedures.</p>
        <p>  Successfully worked within defined deadlines for emergency picklists & booked surgical cases aligning with effective CRM results in a diverse collaborative team.  </p>
        <p>   Function tested surgical instruments, operating industry standard high-end sterilization machines to achieve objective goals for effective patient care.  </p>
        </li>

        <li><h6 class="fw-bold">Technical Service: (Geek Squad Double Agent Squared) / Digital Supervisor / BestBuy Canada  Nov 2008- Jan 2012</h6>
        <p>   Responsible for all aspect of the Information Technology technical support and retail sales in accordance with Best Buy Canada Region's policies, procedures, and mission statement. </p>
        <p>   Performed software evaluation with installation, tested, troubleshooted for client requirements, and maintained long-term customer relationships, kept abreast of the latest evolving technology.  </p>
        <p>   Prepared and presented technical briefs, developed reports, and made strategic recommendations — assisted business teams with continuous improvement initiatives. </p>
        <p>  “Hands-on” management style through the completion of duty shifts and provided service assistance to cross departments for better customer service experience.  </p>
        <p>   High levels of visitor satisfaction, product & service quality and safety standards maintained by conducting regular inspections. Handled complaints and initiated corrective action. </p>
        </li>
                        
        </List>
        </CardBody>
      </Card>
    
    </MainLayout>
    
   </>
  );
}

export default WorkExperience;