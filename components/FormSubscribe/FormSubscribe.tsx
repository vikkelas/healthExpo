import React, { useState} from 'react';
import styles from './FormSubscribe.module.sass';
import formattedPhoneNumber from "@/lib/maskFone";
import {useDispatch, } from "react-redux";
import {closeModal, ModalType} from "@/store/reducer/modalSlice";

const FormSubscribe = () => {
    const [response, setResponse] =useState(false)
    const [responseBody, setResponseBody] = useState<
        any | null>(null)

    const [formState, setFormState] = useState({
        name: '',
        telephone: '',
        email: '',
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
            const response = await fetch(`/api/send-mail?type=${ModalType.PARTICIPANTS}`, {
                method: "POST",
                body: JSON.stringify(formState)
            })
            if(response.ok){
                const data = await response.json()
                setFormState({
                    name: '',
                    telephone: '',
                    email: '',
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
                <h2>Приглашаем посетить</h2>
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
                    <button
                        onClick={sendForm}
                    >
                        Получить приглашение
                    </button>
                </form>
            </div>}
            {response&&responseBody!==null&&
                <div className={styles.response}>
                    <p>{responseBody.message}</p>
                    <button
                        onClick={(event)=>{
                            event.preventDefault()
                            dispatch(closeModal())
                            setResponse(false)
                        }}
                    >ок</button>
                </div>
            }
        </>

    );
};

export default FormSubscribe;