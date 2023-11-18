import MyDiv from "../components/MyDiv";
import MyInput from "../components/MyInput";
import {faAt, faMessage, faUser} from "@fortawesome/free-solid-svg-icons";
import MyTextArea from "../components/MyTextArea";
import React, {useEffect, useState} from "react";
import PrimaryButton from "../components/PrimaryButton";
import Script from "next/script";
import {sendEmail} from "../service/email";

class ContactInformationItem extends React.Component {
    render() {
        return (
            <React.Fragment>
                <p className={`text-white font-bold text-left`}>{this.props.name}</p>
                <p className={`text-secondary-400 col-span-2 font-light self-end whitespace-nowrap text-right`}>{this.props.value}</p>
            </React.Fragment>
        );
    }
}

class ContactInformation extends React.Component {
    render() {
        return (
            <MyDiv className={`w-full lg:w-[31%] mt-8 lg:mt-0`}>
                <div className={`grid grid-cols-3 p-5`}>
                    {this.props.children}
                </div>
            </MyDiv>
        )
    }
}

const Contact = (props) => {
    const [nameError, setNameError] = useState(null);
    const [emailError, setEmailError] = useState(null);
    const [messageError, setMessageError] = useState(null);
    const [btnText, setBtnText] = useState('Send Message');

    const executeRecaptcha = (e) => {
        e.preventDefault()
        grecaptcha.ready(function () {
            grecaptcha.execute(props.siteKey, {action: 'submit'}).then(function (token) {
                // Add your logic to submit to your backend server here.
                verifyToken(e, token);
            });
        });
    }

    const verifyToken = (e, token) => {
        setBtnText('verifying');
        fetch(`api/verify-token?token=${token}`, {
            method: 'Post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(r => r.json())
            .then(r => {
                const {score, success} = r;
                if (score > 0.5 && success) {
                    startEmailing(e);
                } else {
                    alert("Couldn't recognize you as human, sorry!")
                }
            }).catch(err => {
            console.log('error', err)
        })
    }

    const startEmailing = (e) => {
        const name = e.target[0].value;
        const email = e.target[1].value;
        const message = e.target[2].value;
        if (!name)
            setNameError("Please, write your name here")
        else setNameError(null)

        if (!email)
            setEmailError("Please, write your email here")
        else setEmailError(null)

        if (!message)
            setMessageError("Please, write your message here")
        else setMessageError(null)

        if (!name || !email || !message)
            return;

        const data = {
            to: email,
            templateId: 'CONTACT_ME_EMAIL_TEMPLATE',
            dynamicTemplateData: {name},
        }
        setBtnText('Sending...')

        const text = `
        Name: ${name}
        Email: ${email}
        
        ${message}
        `
        const toMe = {
            to: "besmellah.ibrahimi@gmail.com",
            subject: "Message from My Site",
            text,
        }
        sendEmail(toMe).then(res => {
            sendEmail(data).then(res2 => {
                setBtnText('Sent successfully')
            }).catch(err => {
                console.log('error', err);
                setBtnText('Error')
            })
        }).catch(err => {
            sendEmail(data).then(res2 => {
                setBtnText('Sent successfully')
            }).catch(err => {
                console.log('error 2', err);
                setBtnText('Error')
            })
        })
    }

    useEffect(() => {
        window.onSubmit = (token) => {
            document.getElementById("messageForm").submit();
        }
    })

    return (
        <>
            <Script src={`https://www.google.com/recaptcha/api.js?render=${props.siteKey}`}></Script>
            <section className={` flex flex-col overlay`}>
                <div
                    className={`flex flex-col w-full lg:w-[calc(100vw-400px)] sm:px-8 px-5 py-5 flex-wrap justify-center sm:justify-between`}>
                    <h6>Contact Information</h6>
                    <div className={`flex flex-wrap justify-between md:mt-7 mt-5 mb-10`}>
                        <ContactInformation>
                            <ContactInformationItem name={'Country:'} value={'Iran'}/>
                            <ContactInformationItem name={'City:'} value={'Mashhad'}/>
                            <ContactInformationItem name={'Street:'} value={'Avini St.'}/>
                        </ContactInformation>

                        <ContactInformation>
                            <ContactInformationItem name={'Email:'} value={'besmillah@ibrahimi.info'}/>
                            <ContactInformationItem name={'Telegram:'} value={'@Besmillah_ibrahimi'}/>
                            <ContactInformationItem name={'Instagram:'} value={'@besmillahibrahimi'}/>
                        </ContactInformation>

                        <ContactInformation>
                            <ContactInformationItem name={'Mobile:'} value={'+98 935 595 8780'}/>
                            <ContactInformationItem name={'WhatsApp:'} value={'+93 77 551 5896'}/>
                        </ContactInformation>
                    </div>
                </div>

                <div className={`flex flex-col w-full h-full sm:px-8 px-5 py-5`}>
                    <h6>Get in touch</h6>
                    <form id={'messageForm'} className={`bg-secondary-800 p-8 md:mt-7 mt-5 flex flex-col space-y-8`}
                          onSubmit={executeRecaptcha}>
                        <MyInput name={'fullName'} type={'text'} error={nameError} icon={faUser} placeholder={'Name'}/>
                        <MyInput name={'email'} type={'email'} error={emailError} icon={faAt} placeholder={'Email'}/>
                        <MyTextArea name={'message'} error={messageError} icon={faMessage} placeholder={'Message'}/>
                        <div>
                            <PrimaryButton>{btnText}</PrimaryButton>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export async function getServerSideProps() {
    return {
        props: {
            siteKey: process.env.RE_CAPTCHA_SITE_KEY,
            googleAnalytics: process.env.GOOGLE_ANALYTICS
        }, // will be passed to the page component as props
    }
}

export default Contact;