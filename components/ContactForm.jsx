'use client'

import React, {useState, useEffect, useRef} from 'react';

import emailjs from '@emailjs/browser'

const ContactForm = () => {
    const [emailMesg, setEmailMesg] = useState('');
    const [emailColor, setEmailColor] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => {
            setEmailMesg('');
        }, 3000);

        return () => {
            clearTimeout(timer);
        };
    }, [emailMesg]);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_5qilufs', 'template_4z60hbw',
            form.current, '5FUOmk_rYhXnX_p8d')
            .then((result) => {
                setEmailMesg('Емейл відправленно')
                setEmailColor('green')
            }, (error) => {
                setEmailMesg('Емейл не був відправлений')
                setEmailColor('red')
            });
        e.target.reset();
    };

    return (
        <section className = "lg:pt-40 py-10 bg-contactForm bg-no-repeat xl:bg-contain" id='reservation'>
            <div className = "container mx-auto">
                <div className = "flex flex-col lg:flex-row lg:gap-x-20 bg-contact bg-no-repeat bg-cover min-h-[600px]">
                    <div className = "flex flex-1 flex-col justify-center pl-8 lg:pl-16 lg:mb-60">
                        <h2 className = "h2 mb-2 lg:mb-8 text-center xl:text-left">Заповнюй форму<span className='text-green'>,</span> <br/>Залишай заявку</h2>
                        <p className = "mb-7 lg:mb-0 text-center xl:text-left">
                            <span>Компанія S8 Logistics є вашим надійним партнером у сфері логістики. Ми спеціалізуємося на міжнародних перевезеннях та митному оформленні, надаючи професійні послуги з уважністю до деталей. Наша команда забезпечує ефективність і надійність у кожному етапі процесу, гарантуючи задоволення потреб наших клієнтів.</span>
                        </p>
                    </div>
                    <form
                        className = "flex flex-1 flex-col gap-y-5 bg-white shadow-primary rounded-[20px]
                p-5 lg:p-10 max-h-[600px] lg:-mt-20"
                        ref={form}
                        onSubmit={(e) => sendEmail(e)}>
                        <input
                            className = "text-green"
                            placeholder = "Ім'я/Компанія"
                            type = "text"
                            name = "_name"
                            required
                        />
                        <input
                            className = "text-green"
                            placeholder = "@Email"
                            type = "email"
                            name = "_email"
                            pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                            required
                        />
                        <input
                            className = "text-green"
                            placeholder = "Телефон"
                            type = "tel"
                            name= "_phone"
                            pattern="[\d{2}\s[\(]\d{3}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}"
                            minLength={10}
                            maxLength={13}
                            required
                        />
                        <input
                            className = "text-green placeholder-green"
                            placeholder = "Тема"
                            type = "text"
                            name= "_topic"
                        />
                        <textarea
                            className = "text-grey py-3 min-h-[180px] resize-none"
                            placeholder = "Текст повідомлення"
                            name = "_message"
                        />
                        <button className = "text-secondary rounded-full bg-body p-4 flex justify-center font-bold" type = "submit">Відправити</button>
                        <p className = "text-center" style={{color: emailColor}}>{emailMesg}</p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;