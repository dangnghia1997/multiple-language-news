import React from 'react';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
    const {t, i18n} = useTranslation();

    return (
        <Container>
            <h1 className="text-center my-5">{t('home.title')}</h1>
        </Container>
    )
}

export default HomePage;