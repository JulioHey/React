import React from 'react'

import PageHeader from '../../components/PageHeader';
import ProfileForm from '../../components/ProfileForm';

import { Section } from './styles';

const ProfilePage: React.FC = () => {
    return (
        <Section>
            <PageHeader 
                pagetitle="Meu perfil"
                profile="true"
            />
            <ProfileForm />
        </Section>
    )
}

export default ProfilePage;