import styled from "styled-components";

export const Nav = () => {
    return (
        <Header>
            <div>
                <h1>buildbox</h1>
                <p>WEB CHALLENGE</p>
            </div>
        </Header>
    );
};

const Header = styled.div`
    width: 1366px;
    height: 93px;
    padding: 24px 631px 24px 632px;
    background-color: #2b2b2b;
    div{
      width: 200px;
    }
    h1 {
        
         
        font-size: 24px;
        font-weight: 900;
        font-stretch: normal;
        font-style: normal;
        line-height: 29px;
        letter-spacing: normal;
        text-align: left;
        color: #71bb00;
         

    }
    p {
        font-size: 12px;
        font-weight: 300;
        font-stretch: normal;
        font-style: normal;
        line-height: 14px;
        letter-spacing: 0.29px;
        text-align: left;
        color: #707070;
    }
`;
