import React, { useMemo, useCallback, useState, FormEvent } from 'react';

import PageSide from '../../components/PageSide';
import InputFloatingLabel from '../../components/InputFloat';
import Forms from '../../components/Forms';
import FormSent from '../../components/FormSent';

import back from '../../assets/images/icons/back.svg';
import visible from '../../assets/images/icons/eye-icon.svg';
import notVisible from '../../assets/images/icons/eye-close-icon.svg';

import { Section, SideSection, StyledLink, BackImage, EyeImage, EyeButton, FormSection } from './styles'

interface InputStateType {
    currentValue: string;
    isFocus: boolean
}

interface InputTypes {
    name: string;
    label: string;
    position: string;
    className: string;
    type?: string;
    value: string;
    onChangeFunction: any;
    onFocusFunction: any;
    onBlurFunction: any;
    children?: any; 
}

const RegisterPage: React.FC = () => {
    const [ name, setName ] = useState<InputStateType>({currentValue: '', isFocus: false});
    const [ lastName, setLastName ] = useState<InputStateType>({currentValue: '', isFocus: false});
    const [ email, setEmail ] = useState<InputStateType>({currentValue: '', isFocus: false});
    const [ password, setPassword ] = useState<InputStateType>({currentValue: '', isFocus: false});

    const [ isPasswordVisible, setIsPasswordVisible ] = useState(false);
    const [isFormSent, setIsFormSent ] =useState(false);

    const handleFormSent = useCallback((e: FormEvent) => {
        e.preventDefault();

        if (name.currentValue && lastName.currentValue && email.currentValue && password.currentValue) {
            setIsFormSent(true)
        }
    }, [name, lastName, email, password]);

    const handlePasswordVisible = useCallback(()=> {
        setIsPasswordVisible(!isPasswordVisible)
    }, [isPasswordVisible])


    const constructInput = useCallback((inputType: InputTypes) => {
        return (
        <InputFloatingLabel
            name={inputType.name}
            label={inputType.label}
            position={inputType.position}
            className={inputType.className}
            type={inputType.type}
            value={inputType.value}
            onChange={inputType.onChangeFunction}
            onFocus={inputType.onFocusFunction}
            onBlur={inputType.onBlurFunction}
        >
            {inputType.children}
        </InputFloatingLabel>
        )
    }, []);

    const LoginInput = useMemo(() => {
        return (
            constructInput({
                label: 'Nome', 
                position: 'start',
                name: 'name',
                className:  name.currentValue || name.isFocus ? "" : "floating-label",
                value: name.currentValue,

                onFocusFunction: (e: any) => setName({currentValue: name.currentValue, isFocus: true}),
                onBlurFunction: (e: any) => setName({currentValue: name.currentValue, isFocus: false}),
                onChangeFunction: (e: any) => setName({currentValue: e.target.value, isFocus: name.isFocus}),
            })
        )
    }, [name, constructInput])

    const LastNameInput = useMemo(() => {
        return (
            constructInput({
                label: 'Sobrenome', 
                position: 'middle',
                name: 'lastName',
                className:  lastName.currentValue || lastName.isFocus ? "" : "floating-label",
                value: lastName.currentValue,

                onFocusFunction: (e: any) => setLastName({currentValue: lastName.currentValue, isFocus: true}),
                onBlurFunction: (e: any) => setLastName({currentValue: lastName.currentValue, isFocus: false}),
                onChangeFunction: (e: any) => setLastName({currentValue: e.target.value, isFocus: lastName.isFocus}),
            })
        )
    }, [lastName, constructInput])

    const EmailInput = useMemo(() => {
        return (
            constructInput({
                label: 'E-mail', 
                position: 'middle',
                name: 'email',
                className:  email.currentValue || email.isFocus ? "" : "floating-label",
                value: email.currentValue,

                onFocusFunction: (e: any) => setEmail({currentValue: email.currentValue, isFocus: true}),
                onBlurFunction: (e: any) => setEmail({currentValue: email.currentValue, isFocus: false}),
                onChangeFunction: (e: any) => setEmail({currentValue: e.target.value, isFocus: email.isFocus}),
            })
        )  
    }, [email, constructInput])

    const PasswordInput = useMemo(() => {
        return (
            constructInput({
                label: 'Senha', 
                position: 'finish', 
                name: 'password',
                className: password.currentValue || password.isFocus ? "" : "floating-label",
                value: password.currentValue,
                type: isPasswordVisible ? "text" : "password",
                
                onFocusFunction: (e: any) => setPassword({currentValue: password.currentValue, isFocus: true}),
                onBlurFunction: (e: any) => setPassword({currentValue: password.currentValue, isFocus: false}),
                onChangeFunction: (e: any) => setPassword({currentValue: e.target.value, isFocus: password.isFocus}),
                children: (                   
                    <EyeButton type='button' onClick={handlePasswordVisible} className="eye">
                        {isPasswordVisible ?
                        <EyeImage src={notVisible} alt='notVisible'/>
                        : <EyeImage src={visible} alt='visible'/>}
                    </EyeButton>),
            })
        )
    }, [password, isPasswordVisible, constructInput, handlePasswordVisible])

    const FormsChildrens = useMemo(() => {
        return (
            <FormSection >
                {LoginInput}
                {LastNameInput}
                {EmailInput}
                {PasswordInput}
            </FormSection>
        )
    }, [LoginInput, LastNameInput, EmailInput, PasswordInput])

    return (
        <Section>
            { isFormSent ? 
            <FormSent 
                title="Cadastro concluído"
                text="Agora você faz parte da plataforma da Proffy. Tenha uma ótima experiência."
                buttonText="Fazer login"
                link="/"
            /> :
            <Section>
                <SideSection>
                    <StyledLink to="/">
                        <BackImage src={back}/>
                    </StyledLink>
                    <Forms
                        title="Cadastro" 
                        subtitle="Preencha os dados abaixo paracomeçar."
                        submitButton="Concluir cadastro"
                        children={FormsChildrens}
                        onSubmitFunction={(e: FormEvent) => handleFormSent(e)}
                    />
                </SideSection>
                <PageSide/>
            </Section>}
        </Section>
    )
}

export default RegisterPage;
