import Navbar from '../../Pages/Shared/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Pages/Shared/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='mt-16'>

            </div>
            <Outlet></Outlet>
            
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;