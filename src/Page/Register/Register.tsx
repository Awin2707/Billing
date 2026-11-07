import reg from '../../Style/Register.module.css';
import config from '../../Config/Config.json';
import { InputModal } from '../../Input/InputModal';
import { useState } from 'react';
import {register} from '../../Input/InputConfig.js'


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
            <form className={reg.form}>
                <label>Create your Account</label>
                {
                    register.map((val, id) => {
                        return(
                            <InputModal key={id} type={val.type} placeHolder={val.palceHolder} err={val.err} value={val.value} name={val.name} onChange={onChange} label={} />
                        )
                    })
                }
                <button>Submit</button>
            </form>
        </div>
    )
}
export default Register;