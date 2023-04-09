import React, {MouseEventHandler, useState} from 'react';
import styles from './FormSubscribe.module.sass';
import formattedPhoneNumber from "@/lib/maskFone";
import {useDispatch, useSelector} from "react-redux";
import {changeModal, ModalState} from "@/store/reducer/modalSlice";

const FormSubscribe = () => {
    const [formState, setFormState] = useState({
        name: '',
        telephone: '',
        email: '',
        role: '1'
    })
    const changeForm = (e: React.ChangeEvent<HTMLInputElement>)=>{
        if(e.target.name==='tel'){
            setFormState(prevState=>({...prevState, telephone: formattedPhoneNumber( e.target.value)}))
            return;
        }
        setFormState(prevState => ({...prevState, [e.target.name]:e.target.value}))
    }

    const dispatch = useDispatch()

    const sendForm = (event: React.MouseEvent<HTMLButtonElement>)=>{
        event.preventDefault()
        dispatch(changeModal(false))
    }
    return (
        <div className={styles.formInfo}>
            <h2>Принять участие</h2>
            <p>Оставьте свои данные и мы свяжемся с вами в ближайшее время!</p>
            <form className={styles.formInfoForm}>
                <label>
                    <span>Имя</span>
                    <input
                        name={'name'}
                        type="text"
                        onChange={changeForm}
                        value={formState.name}
                    />
                </label>
                <label>
                    <span>Телефон для связи</span>
                    <input
                        name={'tel'}
                        type="text"
                        onChange={changeForm}
                        value={formState.telephone}
                    />
                </label>
                <label>
                    <span>email</span>
                    <input
                        name={'email'}
                        type="text"
                        onChange={changeForm}
                        value={formState.email}
                    />
                </label>
                <div className={styles.formInfoFormRadio}>
                    <span>Укажите ваш статус</span>
                    <label>
                        <span>Участник</span>
                        <input
                            name="role"
                            type="radio"
                            value={'1'}
                            checked={formState.role==='1'}
                            onChange={changeForm}
                        />
                    </label>
                    <label>
                        <span>Посетитель</span>
                        <input
                            name="role"
                            type="radio"
                            value={'2'}
                            checked={formState.role==='2'}
                            onChange={changeForm}
                        />
                    </label>
                </div>
                <button
                    onClick={sendForm}
                >
                    Учавствовать
                </button>
            </form>
        </div>
    );
};

export default FormSubscribe;