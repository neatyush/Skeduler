import { Link, NavLink } from 'react-router'

const Error = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
    <div>Seems Like you are Lost</div>
    <div className='text-2xl'>404</div>
    <div className='text-2xl'>Page Not Found</div>
    <div className='text-2xl'>Please go back to the main page</div>
    <NavLink to="/dashboard" className='text-2xl text-blue-500'>Go Back</NavLink>
    
    </div>
  )
}

export default Error