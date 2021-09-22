import { Switch } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { bankOperations } from './redux/bank';
import Banks from './views/Banks'
import Calculator from './views/Calculator';
import style from './App.module.css';


function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(bankOperations.getBank())
}, [dispatch])
  return (
    <>
      <div className={style.header}>
        <div className={style.container}>
        <Link className="waves-effect waves-light btn" to='/'>Banks</Link>
        <Link className="waves-effect waves-light btn" to='/calculator'>Calculator</Link>
        </div>
      </div>
    <div className={style.wrapper}>
      <div className={style.container}>
        <Switch> 
          <Calculator path='/calculator' />
          <Banks path='/' />
        </Switch>
      </div>
    </div>
    </>
  );
}

export default App;
