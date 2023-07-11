import React, { useState} from 'react';
import styles from './FormParticipants.module.sass';
import formattedPhoneNumber from "@/lib/maskFone";
import {useDispatch} from "react-redux";
import {closeModal, ModalType} from "@/store/reducer/modalSlice";

const FormSubscribe = () => {
    const [response, setResponse] =useState(false)
    const [responseBody, setResponseBody] = useState<
        any | null>(null)

    const [formState, setFormState] = useState({
        company_name: '',
        kind_of_activity: '',
        place: 0,
        contact_name: '',
        tel: '',
        email: '',
        social: ''
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
                    company_name: '',
                    kind_of_activity: '',
                    place: 0,
                    contact_name: '',
                    tel: '',
                    email: '',
                    social: ''
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
                <h2>Участникам</h2>
                <p>Оставьте свои данные и мы свяжемся с вами в ближайшее время!</p>
                <form className={styles.formInfoForm}>
                    <label>
                        <span>Назавние компании</span>
                        <input
                            required
                            name={'company_name'}
                            type="text"
                            onChange={changeForm}
                            value={formState.company_name}
                        />
                    </label>
                    <label>
                        <span>Вид деятельности</span>
                        <input
                            required
                            name={'kind_of_activity'}
                            type="text"
                            onChange={changeForm}
                            value={formState.kind_of_activity}
                        />
                    </label>
                    <label>
                        <span>Требуемая площадь</span>
                        <input
                            required
                            name={'place'}
                            type="number"
                            onChange={changeForm}
                            value={formState.place}
                        />
                    </label>
                    <label>
                        <span>Контактное лицо</span>
                        <input
                            required
                            name={'contact_name'}
                            type="text"
                            onChange={changeForm}
                            value={formState.contact_name}
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
                    <label>
                        <span>Сайт/Группа в соцсетях*</span>
                        <input
                            required
                            name={'social'}
                            type="text"
                            onChange={changeForm}
                            value={formState.social}
                        />
                    </label>
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