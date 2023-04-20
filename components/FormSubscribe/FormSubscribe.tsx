import React, {MouseEventHandler, useState} from 'react';
import styles from './FormSubscribe.module.sass';
import formattedPhoneNumber from "@/lib/maskFone";
import {useDispatch, useSelector} from "react-redux";
import {changeModal, ModalState} from "@/store/reducer/modalSlice";

const FormSubscribe = () => {
    const [response, setResponse] =useState(false)
    const [responseBody, setResponseBody] = useState<
        any | null>(null)

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

    const sendForm = async (event: React.MouseEvent<HTMLButtonElement>)=>{
        event.preventDefault()
        try {
            const response = await fetch('/api/send-mail', {
                method: "POST",
                body: JSON.stringify(formState)
            })
            if(response.ok){
                const data = await response.json()
                setFormState({
                    name: '',
                    telephone: '',
                    email: '',
                    role: '1'
                })
                setResponseBody(data)
                setResponse(true)
            }
        } catch (err){
            console.log(err)
        }

        // dispatch(changeModal(false))
    }
    return (
        <>
            {!response&&<div className={styles.formInfo}>
                <h2>Принять участие</h2>
                <p>Оставьте свои данные и мы свяжемся с вами в ближайшее время!</p>
                <form className={styles.formInfoForm}>
                    <label>
                        <span>Имя</span>
                        <input
                            required
                            name={'name'}
                            type="text"
                            onChange={changeForm}
                            value={formState.name}
                        />
                    </label>
                    <label>
                        <span>Телефон для связи</span>
                        <input
                            required
                            name={'tel'}
                            type="text"
                            onChange={changeForm}
                            value={formState.telephone}
                        />
                    </label>
                    <label>
                        <span>email</span>
                        <input
                            required
                            name={'email'}
                            type="email"
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
            </div>}
            {response&&responseBody!==null&&
                <div className={styles.response}>
                    <p>{responseBody.message}</p>
                    <button
                        onClick={(event)=>{
                            event.preventDefault()
                            dispatch(changeModal(false))
                            setResponse(false)
                        }}
                    >ок</button>
                </div>
            }
        </>

    );
};

export default FormSubscribe;