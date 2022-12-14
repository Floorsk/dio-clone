import React from 'react'
import logo from '../../assets/logo.svg'
import {
    Container,
    Row,
    Column,
    Wrapper,
    SearchInputContainer,
    Menu,
    MenuRight,
    UserPicture,
    Input
} from './styles'

import { Button } from '../Button'
import { useNavigate } from 'react-router-dom'

const Header = () => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate('./Register')
    }

  return (
    <Wrapper>
        <Container>

            <Row>
                <img src={logo} alt="Logo da dio" width={"100px"}/>
                <SearchInputContainer >
                    <Input placeholder='Buscar'/>
                </SearchInputContainer>
                <Menu>Live code</Menu>
                <Menu></Menu>
            </Row>

            <Row>
                <MenuRight href='#'>Home</MenuRight>
                <Button title="Entrar"/>
                <Button title="Cadastrar" onClick={() => {handleClick()}}/>
            </Row>

        </Container>
    </Wrapper>
  )
}

export { Header }
