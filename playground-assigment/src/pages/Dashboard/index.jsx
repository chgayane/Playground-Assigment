import styles from './Dashboard.module.css';
import SideBar from './Sidebar';
import dashboard_logo from '../../assets/images/dashboard_logo.png';
import Button from '@mui/material/Button';

const Dashboard = () => {
    const {dashbpoard_container, dashboard_logo_container, edit_profile_button, logout_button} = styles
    return(
        <div className={dashbpoard_container}>
            <SideBar />
            <div className={dashboard_logo_container}>
                <img src={dashboard_logo} alt='dashboard log' />
                <h2>Coming soon</h2>
                <div className={edit_profile_button}>
                    <Button variant="contained">EDIT MY PROFILE AND MY WORKLOAD</Button>
                </div>
                <div className={logout_button}>
                    <Button variant="text">LOGOUT</Button>
                </div>

            </div>
        </div>
    );
};


export default Dashboard;