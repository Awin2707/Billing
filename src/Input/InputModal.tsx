import inps from '../Style/Register.module.css';

export interface InputTypes{
    type: string,
    placeHolder: string,
    value: string,
    err: string,
    name: string,
    label: string
    onChange: (name: string, value: string) => void
}
export const InputModal = (props : InputTypes) => {

    return( 
        <div className={inps.div_name}>
            <label className={inps.div_label}>{props?.label}</label>
            <input className={`${inps.div_input} ${props.err ? inps.input_error : ''}`} type={props.type} placeholder={props.placeHolder} name={props.name} onChange={(e) => props.onChange(props.name, e.target.value)} />
            {props.err && (<label className={inps.error_text}>{props.err}</label>)}
        </div>
    )
}