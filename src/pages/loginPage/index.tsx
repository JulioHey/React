import React, { useState, useCallback } from 'react';
import { Section, SideSection, FormLogin, Title, ButtonEye , EyeImage } from './styles'

import PageSide  from '../../components/PageSide'
import InputFloatingLabel from '../../components/InputFloat'

import visible from '../../assets/images/icons/eye-icon.svg';
import notVisible from '../../assets/images/icons/eye-close-icon.svg';



interface InputStateType {
    currentValue: string;
    isFocus: boolean
}

const LoginPage: React.FC = () => {
    const [ name, setName ] = useState<InputStateType>({currentValue: '', isFocus: false});
    const [ password, setPassword ] = useState<InputStateType>({currentValue: '', isFocus: false});

    const [ isPasswordVisible, setIsPasswordVisible ] = useState(false)

    const handlePasswordVisible = useCallback(()=> {
        setIsPasswordVisible(!isPasswordVisible)
    }, [isPasswordVisible])

    return (
        <Section id="login-page">
            <PageSide />
            <SideSection>
                <FormLogin>
                    <Title>Fazer login</Title>
                    <InputFloatingLabel 
                        label='Nome' 
                        position='start' 
                        name='name'
                        className={ name.currentValue || name.isFocus ? "" : "floating-label"}
                        value={name.currentValue}

                        onFocus={(e) => setName({currentValue: name.currentValue, isFocus: true})}
                        onBlur={(e) => setName({currentValue: name.currentValue, isFocus: false})}
                        onChange={(e: any) => setName({currentValue: e.target.value, isFocus: name.isFocus})}
                    />
                    <InputFloatingLabel 
                        label='Senha' 
                        position='finish' 
                        name='password'
                        className={ password.currentValue || password.isFocus ? "" : "floating-label"}
                        value={password.currentValue}
                        type={isPasswordVisible ? "text" : "password"}
                        
                        onFocus={(e) => setPassword({currentValue: password.currentValue, isFocus: true})}
                        onBlur={(e) => setPassword({currentValue: password.currentValue, isFocus: false})}
                        onChange={(e: any) => setPassword({currentValue: e.target.value, isFocus: password.isFocus})}
                    >
                        <ButtonEye type='button' onClick={handlePasswordVisible} className="eye">
                            {isPasswordVisible ?
                            <EyeImage src={notVisible} alt='notVisible'/>
                            : <EyeImage src={visible} alt='visible'/>}
                        </ButtonEye>
                        
                    </InputFloatingLabel>
                </FormLogin>

            </SideSection>
        </Section>
    )
}

export default LoginPage;