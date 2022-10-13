import style from './App.module.scss';
import { AppBar } from './Components/AppBar/AppBar';
import {Hero} from './Components/Hero/Hero';
import {WorkGet} from './Components/WorkGet/WorkGet';
import {WorkPost} from './Components/WorkPost/WorkPost';
import { useSelector} from 'react-redux';
import {SuccessComponent} from './Components/Success/Success';

function App() {
  const isAuth = useSelector(state => state.auth.isAuth); 
 return (
    <div className={style.App}>
<AppBar/>
<Hero/>
<WorkGet/>
{!isAuth && <WorkPost/>}
{isAuth && <SuccessComponent/>}
    </div>
  );
}

export default App;
