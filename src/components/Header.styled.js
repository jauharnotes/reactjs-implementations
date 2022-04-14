import styled from "styled-components";

export const Headers = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;

    button {
        border: none;
        padding: 8px 30px;
        background-color: #00AFD7;
        border-radius: 3px;
        color: #ffff;
        font-size: 1.3rem;
        cursor: pointer;
    }

    button:hover {
        background-color: #047B96;
    }
`;

export const Logo = styled.div`
    font-size: 20px;
`;

export const List = styled.div`
    display: flex;
    gap: 30px;

    a {
        text-decoration: none;
        color: black;
        font-size: 1.3rem;
    }
`;