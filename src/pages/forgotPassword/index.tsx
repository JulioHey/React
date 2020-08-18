import React, { useState, useMemo, useCallback } from 'react';

import PageSide from '../../components/PageSide';
import InputFloatingLabel from '../../components/InputFloat';
import Forms from '../../components/Forms';
import FormSent from '../../components/FormSent';

import back from '../../assets/images/icons/back.svg';

import { Section, SideSection, StyledLink, BackImage } from './styles'

interface InputStateType {
    currentValue: string;
    isFocus: boolean
}

const ForgotPassword: React.FC = () => {
    const [ email, setEmail ] = useState<InputStateType>({currentValue: '', isFocus: false});
    const [isFormSent, setFormSent ] =useState(false);

    const handleFormSent = useCallback(() => {
        setFormSent(true)
    }, []);

    const EmailInput = useMemo(() => {
        return (
            <InputFloatingLabel 
                label= 'E-mail' 
                position= 'only'
                name= 'email'
                className=  {email.currentValue || email.isFocus ? "" : "floating-label"}
                value= {email.currentValue}

                onFocus= {(e: any) => setEmail({currentValue: email.currentValue, isFocus: true})}
                onBlur= {(e: any) => setEmail({currentValue: email.currentValue, isFocus: false})}
                onChange= {(e: any) => setEmail({currentValue: e.target.value, isFocus: email.isFocus})}
            />
        )
    }, [email])


    return (
        <Section>
            {isFormSent ? 
            <FormSent 
                title="Redefinição enviada!"
                text="Boa, agora é só checar o e-mail que foi enviado para você redefinir sua senha e aproveitar os estudos."
                buttonText="Voltar ao login"
                link="/"
            /> :
            <Section>
                <SideSection>
                    <StyledLink to="/">
                        <BackImage src={back}/>
                    </StyledLink>
                    <Forms 
                        title="Eita esqueceu sua senha?"
                        subtitle="Não esquenta, vamos dar um jeito nisso."
                        children={EmailInput}
                        submitButton="Enviar"
                        onSubmitFunction={() => handleFormSent()}
                    />
                </SideSection>
                <PageSide />
            </Section>}
        </Section>
    )
}

export default ForgotPassword;
