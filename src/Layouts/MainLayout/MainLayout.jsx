import Navbar from '../../Pages/Shared/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Pages/Shared/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>

            
             {/* dynamic content */}
            <div className='min-h-[calc(100vh-232px)]'>
            <Outlet></Outlet>
            </div>
            
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;