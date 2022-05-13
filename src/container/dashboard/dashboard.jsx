import React, { useState } from 'react';
import Details from '../../component/details';
import Sidebar from '../../component/sidebar';
import TopBar from '../../component/top-bar';
import './style.css';
function Dashboard() {
  const [option, setOption] = useState();
  const optionHandler = (option) => {
    setOption(option);
  }
  return (
    <div>
        <TopBar />
        <div className='app-body'>
        <Sidebar onClickOption={optionHandler}/>
        <Details data={option} />
        </div>
    </div>
  )
}

export default Dashboard;