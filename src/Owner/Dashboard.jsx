import React from 'react'
import FixedLayout from './FixedLayout'
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
  
    <FixedLayout>
    <Outlet></Outlet>
    </FixedLayout>
  )
}

export default Dashboard