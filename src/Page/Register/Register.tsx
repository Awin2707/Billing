import reg from '../../Style/Register.module.css';
import config from '../../Config/Config.json';
import { InputModal } from '../../Input/InputModal';
import { useState } from 'react';
import { Register_data } from '../../Input/InputConfig';


interface userData {
    email: string,
    pass: string
}

const Register = () => {


    const [userdata, setData] = useState<userData>({email: '', pass: ''})

    const onChange = (name: string, value: string) => {
        setData((prev) => ({...prev, [name] : value}));
        console.log(userdata);
    }

    return(
        <div className={reg.main} style={{backgroundImage: `url("${config.img}background.svg")`}}>
            <form className={reg.card}>
                <div className={reg.heading}>
                    <img alt='x-ico' src={config.img+'logo.png'} width={36} height={36} />
                    Smart Billing
                </div>
                <h1>Create your Account</h1>
                {
                    Register_data.map((val, id) => {
                        return(
                            <InputModal key={id} type={val.type} placeHolder={val.Placeholder} err={val.err} value={val.value} name={val.name} onChange={onChange} label={val.label} />
                        )
                    })
                }
                <button>Submit</button>
            </form>
        </div>
    )
}
export default Register;