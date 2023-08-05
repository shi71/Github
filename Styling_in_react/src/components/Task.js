import React from 'react';
import {Badge, Alert } from 'reactstrap';

const Task = (props) => {
    const { children } = props;

    const [completed, setCompleted] = React.useState(false);

    const onCompletedChanged = (event) => {
        //console.log(event);

        const isChecked = event.target.checked;

        setCompleted(isChecked);
    };

    console.log(completed);

    const taskStyle = {
        textDecoration: completed ? 'line-through' : 'none'
    }

    return (
        <>

            <li>
                <span style={taskStyle}>{children}</span>
             <Badge color="primary">
                <input type='checkbox' name='completed' onChange={onCompletedChanged} />
                <Alert className="custom-alert" variant="sucess"style={{ color: 'orange', padding: '5px ',fontSize: '12px', width: '100px', height: '10px'}}>
                    <h6 className="alert-heading"></h6>
                          Added Task 👍!
                         
                  </Alert>
                
                </Badge>
            </li> 
        </>
    );
}

export default Task;
