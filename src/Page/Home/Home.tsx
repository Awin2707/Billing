import main from '../../Style/Register.module.css';
import config from '../../Config/Config.json';
import { useState } from 'react';
import { Bell, Settings, User } from 'lucide-react';
const Home = () => {

    const navbarDeatils = [
        { name: 'Dashboard' },
        { name: 'Incovice' },
        { name: 'Customers' },
        { name: 'Products' },
        { name: 'Reports' },
    ]

    const [tab, setTab] = useState<String>('Dashboard');
    const [bar, setbar] = useState<Number>(0);

    return (
        <div className={main.homemain}>
            <div className={main.navbar}>
                <div>
                    <img alt='x-ico' src={`${config.img}logo.png`} width={'52px'} height={'52px'} />
                    <label className={main.heading}>Smart Billing</label>
                </div>

                <div className={main.subbackground}>

                    {
                        navbarDeatils.length != 0 && navbarDeatils.map((val, key) => {
                            return (
                                <div key={key} className={val.name == tab ? `${main.nav_item} ${main.active}` : main.nav_item} onClick={() => { setTab(val.name); setbar(0); }}>
                                    {val.name}
                                </div>
                            )
                        })
                    }
                </div>

                <div className={main.top}>
                    <div className={main.subbackground}>
                        <div className={bar == 1 ? main.active_circle : main.nav_items} onClick={() => setbar(1)}>
                            <Bell size={20} stroke="#6366f1" strokeWidth={1.75} />
                        </div>
                        <div className={bar == 2 ? main.active_circle : main.nav_items} onClick={() => setbar(2)}>
                            <Settings size={20} stroke="#6366f1" strokeWidth={1.75} />
                        </div>
                    </div>
                    <div className={main.user_profile}>
                        <div className={main.avatar_wrapper}>
                            <User size={32} stroke='#303033' strokeWidth={1.75} />
                        </div>
                        <div className={main.lefts}>
                            <label className={main.user_name}>Naveen Vishnu Kumar</label>
                            <label className={main.user_email}>Naveenawin2708@gmail.com</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;