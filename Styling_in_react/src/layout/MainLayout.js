import React from 'react';
import logo2 from '../assets/images/unsplash.jpg';
import logo from '../assets/images/logo.svg';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {Link } from 'react-router-dom';

const MainLayout = (props) => {
    const { children } = props;

    return (
        <>
            <Header className='top-header' id='header' title='This is the header'>
                <div>
            <h1 class= "head">Identify and Solve Work & Life Balance🚵🏃🏃🚵📖🧘😴👪</h1>
                   
                        <p>
                            <Link to='/fun-fact'>Fun Fact</Link>
                            <span> | </span>
                            <Link to='/todo-list'>To Do List</Link>
                        </p>
               
                </div>
                <div class= "lp">
                <img src={logo2} width={55} height={55} className="App-logo" alt="pict" />
                <img src ={logo} width={55} height={55} className="App-logo1" alt= "pict2" />
                </div>
            </Header>                   
  <div class="card-body">
    {children} 
  </div>    
            <Footer />
        </>
    );
}

export default MainLayout;