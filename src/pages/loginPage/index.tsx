import React, { useState, useCallback, useMemo, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import PageSide  from '../../components/PageSide'
import InputFloatingLabel from '../../components/InputFloat'
import Forms from '../../components/Forms'

import visible from '../../assets/images/icons/eye-icon.svg';
import notVisible from '../../assets/images/icons/eye-close-icon.svg';
import checked from '../../assets/images/icons/check-icon.png';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';


import { Section, SideSection, EyeButton , EyeImage, CheckButton, CheckImage, Span, StyledLink, HeartImage, ColumnSection, StyledLinkRegister, StyledH4, FormSection } from './styles'

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

const LoginPage: React.FC = () => {
    const [ name, setName ] = useState<InputStateType>({currentValue: '', isFocus: false});
    const [ password, setPassword ] = useState<InputStateType>({currentValue: '', isFocus: false});

    const [ isPasswordVisible, setIsPasswordVisible ] = useState(false);
    const [ rememberUser, setRememberUser ] = useState(false);

    const history = useHistory();

    const handleFormSent = useCallback((e: FormEvent) => {
        e.preventDefault();

        if (name.currentValue && password.currentValue) {
            history.push("/landing")
        }
    }, [name, password])

    const handlePasswordVisible = useCallback(()=> {
        setIsPasswordVisible(!isPasswordVisible)
    }, [isPasswordVisible])

    const handleRememberUser = useCallback(() => {
        setRememberUser(!rememberUser)
    }, [rememberUser])

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

    const FormsChidrens = useMemo(() => {
        return (
            <FormSection>
                {LoginInput}
                {PasswordInput}
                <Section className="userPref">
                    <CheckButton onClick={handleRememberUser} type="button">
                        { rememberUser ? <CheckImage src={checked}/> : ""}
                    </CheckButton>
                    <Span>Lembrar-me</Span>
                    <StyledLink to="/recover">Esqueci minha senha</StyledLink>
                </Section>
            </FormSection>
        )
    }, [LoginInput, PasswordInput, rememberUser, handleRememberUser])

    return (
        <Section id="login-page">
            <PageSide/>
            <SideSection>
                <Forms 
                    title="Fazer login"
                    children={FormsChidrens}
                    submitButton="Entrar"
                    onSubmitFunction={(e: FormEvent) => handleFormSent(e)}
                />
                <Section className="newUser">

                    <ColumnSection>
                        <StyledH4>Não tem conta?</StyledH4>
                        <StyledLinkRegister to="/register">Cadastra-se</StyledLinkRegister>
                    </ColumnSection>

                    <Span className="free">
                        É de graça
                        <HeartImage src={purpleHeartIcon}/>
                    </Span>
                </Section> 
            </SideSection>
        </Section>
    )
}

export default LoginPage;