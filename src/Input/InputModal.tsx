export interface InputTypes{
    type: string,
    placeHolder: string,
    value: string,
    err: string,
    name: string,
    onChange: (name: string, value: string) => void
}
export const InputModal = (props : InputTypes) => {

    return( 
        <div>
            <input type={props.type} placeholder={props.placeHolder} name={props.name} onChange={(e) => props.onChange(props.name, e.target.value)} />
            {props.err && (<label>{props.err}</label>)}
        </div>
    )
}