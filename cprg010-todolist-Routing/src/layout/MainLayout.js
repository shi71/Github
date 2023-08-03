import React from 'react';
import logo from '../assets/images/unsplash.jpg'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const MainLayout = (props) => {
    const { children } = props;

    return (
        <>
            <Header className='top-header' id='header' title='This is the header'>
                <div>
            <h1>Identify and Solve Work & Life Balance🚵🏃🏃🚵📖🧘😴👪</h1>
                    <div>
                        <p>
                            <Link to='/fun-fact'>Fun Fact</Link>
                            <span> | </span>
                            <Link to='/todo-list'>To Do List</Link>
                        </p>
                    </div>
                </div>
                <img src={logo} width={55} height={55} className="App-logo"/>


            </Header>

            {children}

            <Footer />
        </>
    );
}

export default MainLayout;