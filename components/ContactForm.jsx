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

        emailjs.sendForm('service_9kre3ur', 'template_87l8sk6',
            form.current, 'ZQx1FI4l3teXxInzT')
            .then((result) => {
                setEmailMesg('Your email was successfully sent')
                setEmailColor('green')
            }, (error) => {
                setEmailMesg('Your email wasn`t sent')
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
                            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque commodi consequuntur corporis cupiditate, deserunt dicta ducimus eos est exercitationem iure numquam officia possimus praesentium quibusdam rerum sapiente sunt suscipit, voluptate?</span>
                        </p>
                    </div>
                    <form
                        className = "flex flex-1 flex-col gap-y-5 bg-white shadow-primary rounded-[20px]
                p-5 lg:p-10 max-h-[600px] lg:-mt-20"
                        ref={form}
                        onSubmit={(e) => sendEmail(e)}>
                        <input
                            className = "form-control"
                            placeholder = "Ім'я/Компанія"
                            type = "text"
                            name = "_firstname"
                            required
                        />
                        <input
                            className = "form-control"
                            placeholder = "@Email"
                            type = "email"
                            name = "_email"
                            required
                        />
                        <input
                            className = "form-control"
                            placeholder = "Телефон"
                            type = "text"
                            name= "_lastname"
                            required
                        />
                        <input
                            className = "form-control"
                            placeholder = "Тема"
                            type = "text"
                            name= "_topic"
                        />
                        <textarea
                            className = "form-control py-3 min-h-[180px] resize-none"
                            placeholder = "Текст повідомлення"
                            name = "_message"
                        />
                        <button className = "btn btn-lg btn-orange" type = "submit">Відправити</button>
                        <p className = "text-center" style={{color: emailColor}}>{emailMesg}</p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;