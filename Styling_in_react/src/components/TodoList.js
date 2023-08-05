import React from "react";
import Task from "./Task";
import { Container, Row, Col } from 'reactstrap';
import { Card, ListGroup} from 'reactstrap';

const TodoList = ({ tasks }) => {
  const tasksEl = [];

  // Don't change the state in the same scope as the return!!!
  //setTasks([...tasks, 'Task 4']);

  React.useEffect(() => {
    console.log('useEffect called');

    const resizeCallback = () => {
      console.log('resized');
    }; 

    // DONT DO THIS!
    //window.onresize = resizeCallback;

    // DO THIS!!!
    window.addEventListener('resize', resizeCallback);

    const timer = setInterval(() => {
      //alert('5 secs later');
    }, 5000);

    // Cleanup function
    // Not always needed
    return () => {
      console.log('unmounted');
      clearInterval(timer);
      window.removeEventListener('resize', resizeCallback);
    }
  }, [tasks]);

  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];

    const taskEl = <Task>{task}</Task>;

    tasksEl.push(taskEl);
  }

  return (
    // Grid System to Structure with single column and a row 
    // Card listing tasks 
    // Listgroup& Items
  
      <Card style={{ width: '80rem', margin: '0 auto' }}>
    
    <Container className="text-uppercase" style={{ color: 'blue' }}>
      <Row>
        <Col xs={12} md={6}>
  <ListGroup><ul>
    
    <h6 style={{color:'Brown', textAlign:'justify'}}>{"Number Task Added :" + tasks.length} </h6>{tasksEl }
   
    </ul></ListGroup>
        </Col>
      </Row>
    </Container>
 </Card>
    );
    ;
};

export default TodoList;
