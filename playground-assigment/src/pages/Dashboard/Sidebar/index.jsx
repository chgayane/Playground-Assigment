import styles from './Sidebar.module.css';
import menu from '../../../assets/menu.svg';
import schedule from '../../../assets/schedule.svg';
import patient from '../../../assets/patient.svg'

const SideBar = () => {

    const {sidebar_container, menu_icon, schedule_icon, patient_icon} = styles 
    return (
        <div className={sidebar_container}>
            <div className={menu_icon}>
                <img src={menu} alt='menu'/>
            </div>
            <div className={schedule_icon}>
                <img src={schedule} alt='schedule'/>  
            </div>
            <div className={patient_icon}>
            <img src={patient} alt='patient' />
            </div>
        </div>
    );
}

 export default SideBar;