import styled from "styled-components";

export const DetalhesContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        color: #7869BF;
    }

    span {
        height: 28px;
        background-color: #7869BF;
        color: #FFFFFF;
        font-size: 0.8125rem;
        border-radius: 16px;
        padding: 5px 12px;
        margin: 0 4px;
    }

    button {
        width: 357px;
        padding: 6px 16px;
        font-size: 0.875rem;
        font-weight: 500;
        line-height: 1.75;
        border-radius: 4px;
        letter-spacing: 0.02857em;
        text-transform: uppercase;
        border: 1px solid #7869BF;
        background-color: transparent;
        margin: 10px;
        cursor: pointer;
        transition: all 0.3s ease;

        :hover {
            border: 1px solid rgb(84, 73, 133);
            background-color: rgba(120, 105, 191, 0.04);
        }
    }

    button:nth-child(5) {
        color: #FFFFFF;
        background-color: #7869BF;
        border: 0;
        transition: all 0.3s ease;

        :hover {
            background-color: rgb(84, 73, 133);
        }
    }
`