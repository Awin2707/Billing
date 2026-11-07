import config from '../Config/Config.json';

interface RegisterField {
    name: string;
    type: string;
    Placeholder: string;
    icon: string;
    show_pass: boolean;
    label: string;
    value: string;
    err: string;
}


export const Register_data:RegisterField[] =[ 
    {name: 'email', type : 'email', Placeholder : 'Alex', icon: config.img + 'email.svg', show_pass: false, label: 'Email Id',value : '', err: ''},
    {name: 'name', type : 'text', Placeholder : 'xyz@gmail.com', icon: config.img + 'name.svg', show_pass: false, label: 'Your Name', value : '', err: ''},
    {name: 'password', type : 'password', Placeholder : 'At leasr 8 Character', icon: config.img + 'pass.svg', show_pass: true, label: 'Create Password', value : '',  err: ''},
    {name: 'cpassword', type : 'password', Placeholder : 'Re-enter Password', icon: config.img + 'pass.svg', show_pass: true, label: 'ReEnter Password', value : '', err: ''}
]