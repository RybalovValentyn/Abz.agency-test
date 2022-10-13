import { useSelector, useDispatch } from 'react-redux';
import { useEffect} from "react";
import { Section } from "../Section/Section";
import s from './success.module.scss';
import successimg from '../../images/success-image.svg';
import {usersThunk} from '../../redux/asyncthunc';

export function SuccessComponent() {
const dispatch = useDispatch();
 const isAuth = useSelector(state => state.auth.isAuth);

    useEffect(()=>{
        console.log('reset');
        dispatch(usersThunk());
    }, [isAuth]);

return(
    <Section>
         <h2 className={s.header}>User successfully registered</h2>
<img
    src={successimg}
    alt="vector1"
    className={s.vector1}
    />
    </Section>
)
}
