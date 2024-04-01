import React, { useState } from "react";
import { Nav } from "../components/Nav";
import styled from "styled-components";

interface Feed {
    id: number;
    text: string;
    author: string;
}

export const Home: React.FC = () => {
    const [nome, setNome] = useState<string>("");
    const [mensagem, setMensagem] = useState<string>("");
    const [feeds, setFeeds] = useState<Feed[]>([]);

    const handleNomeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNome(event.target.value);
    };

    const handleMensagemChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setMensagem(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const newFeed: Feed = {
            id: feeds.length + 1,
            text: mensagem,
            author: nome,
        };

        setFeeds([...feeds, newFeed]);

        setNome("");
        setMensagem("");
    };

    return (
        <HomeContainer>
            <Nav />
            <ContainerCentral>
                <ContainerMain onSubmit={handleSubmit}>
                    <div className="img"></div>
                    <Inputs
                        type="text"
                        placeholder="Digite seu nome"
                        value={nome}
                        onChange={handleNomeChange}
                    />
                    <InputMensagens
                        type="text"
                        placeholder="Mensagem"
                        value={mensagem}
                        onChange={handleMensagemChange}
                    />
                    <div className="buttons">
                        <a
                            onClick={() => {
                                setNome("");
                                setMensagem("");
                            }}
                        >
                            Descartar
                        </a>
                        <button type="submit">Enviar</button>
                    </div>
                </ContainerMain>

                <ContainersFeeds>
                    <div className="feeds">
                        <p  >Feeds</p>
                    </div>
                    {feeds.map((feed) => (
                        <ContainerFeed key={feed.id}>
                            <div className="feed">
                                <div className="img"></div>
                                <div>
                                    <p className="text">{feed.text}</p>
                                    <p className="title">Enviado por</p>
                                    <p className="name">{feed.author}</p>
                                </div>
                                <DeleteIconWrapper>x</DeleteIconWrapper>
                            </div>
                        </ContainerFeed>
                    ))}
                </ContainersFeeds>
            </ContainerCentral>
        </HomeContainer>
    );
};

const HomeContainer = styled.div`
    width: 1366px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 0 170px;
    background: #343434;
`;
const ContainersFeeds = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    flex-direction: column;
`;
const ContainerCentral = styled.div`
    width: 516px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .feeds {
        width: 100%;
        display: flex;
        margin-bottom: -35px;
        font-family: Roboto;
        font-size: 14px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.29;
        letter-spacing: normal;
        text-align: left;
        color: #7a7a7a;
    }
`;
const ContainerMain = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 516px;
    height: 353px;
    margin: 40px 425px 56px;
    padding: 24px;
    border-radius: 3px;
    border: solid 1px #3b3b3b;
    background-color: #313131;
    .buttons {
        display: flex;
        width: 100%;
        align-items: end;
        margin-top: 10px;
        justify-content: end;
    }

    .img {
        width: 88px;
        height: 88px;

        padding: 32px;
        object-fit: contain;
        border-radius: 36px;
        border: solid 1px #4b4b4b;
        background-color: #4b4b4b;
    }
    button {
        width: 98px;
        height: 41px;
        margin: 0 0 0 24px;
        padding: 12px 24px;
        border-radius: 8px;
        background-color: #71bb00;
        border: none;
        cursor: pointer;
        color: #fff;
    }

    a {
        margin: 12px 24px 12px 0;
        font-family: Roboto;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 18px;
        letter-spacing: normal;
        text-align: center;
        color: #5f5f5f;
        cursor: pointer;
    }
`;
const Inputs = styled.input`
    width: 468px;
    height: 40px;
    margin: 16px 0 8px;
    padding: 12px 351px 11px 16px;
    border-radius: 8px;
    background-color: #494949;
    border: none;
    color: #9f9f9f;
`;
const InputMensagens = styled(Inputs)`
    height: 80px;
    padding: 1px 351px 35px 16px;
`;
const ContainerFeed = styled(ContainerMain)`
    height: 100%;
    margin: 37px 425px -30px;

    .feed {
        display: flex;
        align-items: top;

        padding: 20px;
    }
    .text {
        width: 348px;
        height: 80px;
        margin: 0 12px 24px 32px;
        font-family: Roboto;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.25;
        letter-spacing: normal;
        text-align: left;
        color: #9f9f9f;
    }
    .title {
        margin: 16px 274px 2px 32px;
        font-family: Roboto;
        font-size: 12px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.33;
        letter-spacing: 0.29px;
        text-align: left;
        color: #5f5f5f;
    }
    .name {
        margin: 2px 237px 0 32px;
        font-family: Roboto;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.29;
        letter-spacing: normal;
        text-align: left;
        color: #7a7a7a;
    }
`;
const DeleteIconWrapper = styled.div`
    position: relative;
    top: -22px;
    right: 1px;
    cursor: pointer;
    color: #fff;
`;
