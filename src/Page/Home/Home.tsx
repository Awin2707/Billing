import main from '../../Style/Register.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import config from '../../Config/Config.json';
const Home = () => {
    return(
        <div className={main.homemain}>
            <div className='w-100 h-auto bg-success'>
                <img alt='x-ico' src={`${config.img}logo.png`} width={'32px'} height={'32px'}/>
            </div>
        </div>
    )
}
export default Home;