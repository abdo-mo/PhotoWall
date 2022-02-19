import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

const Header = () => {
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    return (
        <header className="header">
            <h1>Photo Wall</h1>
            {/* <h4>counter {counter}</h4>
            <button onClick = {() => dispatch(increment())} >+</button>
            <button onClick={() => dispatch(decrement())} >-</button> */}
            
        </header>
    );
}
 
export default Header;