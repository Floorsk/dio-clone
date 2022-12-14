import React from 'react'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Wrapper } from '../../components/Header/styles'
import { MdLock, MdEmail, MdPersonOutline} from 'react-icons/md'
import { useForm } from "react-hook-form";
import { Button } from '../../components/Button'
import {
    Container,
    Column,
    Title,
    TitleLogin,
    SubtitleLogin,
} from './styles'

const Register = () => {

    const { control, handleSubmit, formState: { errors } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    return (
        <>
            <Header />
            <Container>
                <Column>
                    <Title>
                        A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                    </Title>
                </Column>

                <Column>
                    <TitleLogin>Comece agora grátis</TitleLogin>
                    <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
                    <form /* onSubmit={handleSubmit(onSubmit)} */>
                        <Input placeholder="Nome Completo" leftIcon={<MdPersonOutline/>}/>
                        <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email" control={control} />
                        {errors.email && <span>E-mail é obrigatório</span>}
                        <Input type="password" placeholder="Senha" leftIcon={<MdLock />} name="senha" control={control} />
                        {errors.senha && <span>Senha é obrigatório</span>}
                        <Button title="Entrar" variant="secondary" type="submit" />
                    </form>
                </Column>
            </Container>
        </>
    )
}

export { Register }