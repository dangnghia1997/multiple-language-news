import React, { useEffect, useState } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { LinkContainer } from 'react-router-bootstrap';
import { useLocation } from 'react-router-dom';


const NavigationBar = (props) => {
    const {t, i18n} = useTranslation();
    let [lang, setLang] = useState(t('language.en.title'));
    const query = new URLSearchParams(useLocation().search);
    let code = query.get('language');

    useEffect(() => {
        let languages = {
            en: 'language.en.title',
            vi: 'language.vi.title'
        };
        if (languages.hasOwnProperty(code)) {
            i18n.changeLanguage(code).then(() => setLang(t(languages[code])));
        }
    }, [code])

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">4WEEKS</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/">
                            <Nav.Link href="/">{t('home.title')}</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/posts">
                            <Nav.Link href="/posts">{t('blog.title')}</Nav.Link>
                        </LinkContainer>
                        <NavDropdown title={lang} id="basic-nav-dropdown">
                            <LinkContainer to="?language=vi">
                                <NavDropdown.Item href="?language=vi">{t('language.vi.title')}</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="?language=en">
                                <NavDropdown.Item href="?language=en">{t('language.en.title')}</NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar;