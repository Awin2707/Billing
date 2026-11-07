import reg from '../../Style/Register.module.css';
import config from '../../Config/Config.json';
import { InputModal } from '../../Input/InputModal';
import { useState } from 'react';
import { Login_data, Register_data } from '../../Input/InputConfig';
import {UserPlus, ArrowRight} from 'lucide-react'


interface userData {
    email: string,
    pass: string
}

const Register = () => {


    const [userdata, setData] = useState<userData>({ email: '', pass: '' })
    const [activeTab, setActive] = useState<boolean>(true);

    const onChange = (name: string, value: string) => {
        setData((prev) => ({ ...prev, [name]: value }));
        console.log(userdata);
    }

    return (
        <div className={reg.main}>
            <form className={reg.card}>
                <img alt='x-ico' src={config.img + 'logo.png'} width={64} height={64} />
                <label className={reg.heading}>Smart Billing</label>
                <label className={reg.subheading}>Next Generation Financial Management</label>
                <div className={`${reg.box} mt-4`}>
                    <div className='rounded w-100 d-flex align-items-center p-1 bg-secondary bg-opacity-10 position-relative'>
                        <div
                            className={`w-50 text-center py-2 rounded fw-semibold cursor-pointer transition-all ${activeTab === true
                                ? 'bg-white text-dark shadow-sm'
                                : 'text-secondary bg-transparent'
                                }`}
                            onClick={() => setActive(true)}
                            style={{ fontSize: '14px', cursor: 'pointer', fontWeight: 600 }}
                        >
                            Sign In
                        </div>

                        <div
                            className={`w-50 text-center py-2 rounded fw-semibold cursor-pointer transition-all ${activeTab === false
                                ? 'bg-white text-dark shadow-sm'
                                : 'text-secondary bg-transparent'
                                }`}
                            style={{ fontSize: '14px', cursor: 'pointer', fontWeight: 600 }}
                            onClick={() => setActive(false)}
                        >
                            Create Account
                        </div>
                    </div>
                    <div className='mt-3'></div>
                    { activeTab === false ?
                        Register_data.map((val, id) => {
                            return (
                                <InputModal key={id} type={val.type} placeHolder={val.Placeholder} err={val.err} value={val.value} name={val.name} onChange={onChange} label={val.label} />
                            )
                        })
                    
                    :
                        Login_data.map((val, id) => {
                            return (
                                <InputModal key={id} type={val.type} placeHolder={val.Placeholder} err={val.err} value={val.value} name={val.name} onChange={onChange} label={val.label} />
                            )
                        })
                    }
                    <div className={reg.btn}>
                        {activeTab === false ? 'Create Account ' : 'Sign In'}
                        {activeTab === false ? <UserPlus size={16}/> : <ArrowRight size={16}/> }
                    </div>
                </div>

            </form>
        </div>
    )
}
export default Register;