import config from '../Config/Config.json';
export const register =[ 
    {name: 'email', type : 'email', Placeholder : 'Enter your email id', icon: config.img + 'email.svg', show_pass: false, label: 'Email Id',value : '', err: ''},
    {name: 'name', type : 'text', Placeholder : 'Enter your Name', icon: config.img + 'name.svg', show_pass: false, label: 'Your Name', value : '', err: ''},
    {name: 'password', type : 'password', Placeholder : 'Create your password', icon: config.img + 'pass.svg', show_pass: true, label: 'Password', value : '',  err: ''},
    {name: 'cpassword', type : 'password', Placeholder : 'ReEnter your password', icon: config.img + 'pass.svg', show_pass: true, label: 'ReEneter Password', value : '', err: ''}
]