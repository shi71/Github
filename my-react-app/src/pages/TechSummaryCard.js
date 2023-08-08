import React from 'react';
import MainLayout from '../layout/MainLayout';
import { CardTitle, Card, CardBody, List } from 'reactstrap';


const TechSummary = (props) => {
    return (

    <>
    <MainLayout>
    
    <div>
     <CardTitle tag="h2">Technology Summary</CardTitle>

        {/* Technology Summary paragraph goes here */}
       <Card>
        <CardBody>
        <List type="list-unstyled">
        
        <li><h6 class="fw-bold"> Technical Skills:</h6></li>
            <li>Languages: JavaScript, HTML, CSS, SQL</li>
            <li>Front-End: React, Redux, CSS frameworks (Bootstrap, Materialize)</li>
             <li>Back-End: Node.js</li>
             <li>Tools: Git, Visual Studio Code, Command Line</li>
             <li>Other Software/ Tools: Agile methodologies, UI/UX principles</li>
             <li>Python, COBOL, R-Studio, Lotus Notes, Lotes 123, Dbase III-IV</li> 
             <li>Sun Solaris Admin IMS Project, MS Office, Visio</li>
              <li>MS SharePoint, Accounting Sage50 QuickBooks, MS access, Data Analytics Tableau</li>
       
            <li><h6 class="fw-bold"> Web Developement Program / SAIT Student Sept 2023</h6>
            <p><p>Projects: Developed a fully responsive e-commerce website collaborating with teams using HTML, CSS, and JavaScript, resulting in a 20% increase in user interface engagements. Designed and implemented a API for a task management application using Node.js streamlining task tracking and improving team productivity. Collaborated with a team to create a dynamic trucking platform using React, achieving a seamless user experience and reducing order processing time by 30%.</p></p>
            </li>
                                              
            <li><h6 class="fw-bold"> A Work journey incorporating technical Summary</h6>
            <p>A dynamic professional stands here with a wide range of skills and an unwavering commitment to excellence. Expertise in team leadership is complemented by clear and concise communication skills, both in verbal and written forms. Noted for punctuality and detail-oriented nature, self-motivation and excellent time management abilities come naturally, helping in performing multiple tasks efficiently and effectively. Strong problem-solving abilities, particularly in conflict resolution, play a key role in building and leading effective cross-functional teams.</p>
  
            <p>The professional journey so far has been a balance between work and personal life, with a deep enjoyment found in the customer relationship management field. Understanding and managing tasks in diverse cultural environments have become an integral part of the journey. Beyond professional pursuits, there's a passion for coaching and customer service, reinforced by a tenacious work ethic. Interests span traveling, food, volunteering, community involvement, global current affairs, walking, and biking.</p>
  
            <p>Several certifications validate this professional journey, including a IBM Data Analytics Course Certification, and Sun Solaris System Admin level I Certification. Recognition as a Hewlett Packard Solution Sales Professional and Ricoh Document Management Solution Sales Professional, along with a post graduation diploma in computer application from NIIT adds weight to the professional credentials.</p>

            <p>Technical skills cover a wide spectrum, including proficiency in MS Project, MS Office, Visio, Accounting Sage50, QuickBooks, MS SharePoint, MS Access, Data Analytics (Basic Python), CoboL, Lotus 123, Dbase III & IV, Unix, R-Studio, Tableau, Sun Solaris Admin I, and MS Project. With this diverse portfolio of skills, interests, and certifications, readiness to make significant contributions in any role is unquestionable.</p>
        </li>
        </List>
        </CardBody>
        </Card>
        </div>
        </MainLayout>
    
    </>
    );
  }
  export default TechSummary;