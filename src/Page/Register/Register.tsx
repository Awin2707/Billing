import reg from '../../Style/Register.module.css';
import config from '../../Config/Config.json';
import { InputModal } from '../../Input/InputModal';
import { useState } from 'react';


interface userData {
    email: string,
    pass: string
}

const Register = () => {

    const data = [
        {type: "email", palceHolder: 'Enter the Email id', value: '', err: '', name: 'email'},
        {type: "password", palceHolder: 'create your password', value: '', err: '', name: 'password'},
    ]

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
                    data.map((val, id) => {
                        return(
                            <InputModal key={id} type={val.type} placeHolder={val.palceHolder} err={val.err} value={val.value} name={val.name} onChange={onChange} />
                        )
                    })
                }
                <button>Submit</button>
            </form>
        </div>
    )
}
export default Register;