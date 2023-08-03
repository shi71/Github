import React from 'react';
import MainLayout from '../layout/MainLayout';
import TodoCategory from '../components/TodoCategory';

const TodoListPage = (props) => {
    return (
        <>
            <MainLayout>
    <div class="App1">
    <TodoCategory title= "Professional Task" />
    <TodoCategory title= "Personal Task" />
    <TodoCategory  title= "Health & Fitness" /> 
    <TodoCategory title= "Learning and Growth" />
    <TodoCategory title= 'Social & Family' />
    </div>
            </MainLayout>
        </>
    );
}

export default TodoListPage;