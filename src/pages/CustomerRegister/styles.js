import styled from 'styled-components';
import {Button} from 'antd';

export const Container = styled.div`
    font-size: 16px;
    max-width: 100vw;
    color: black;  
    padding-left: 100px;
    padding-right: 80px;
    padding-top: 30px;
    background: #9ea7aa;
    height: 100vh;
`;

export const Title = styled.div`
    color: #232323;
    font-family: 'Ubuntu';
    font-size: 24px;
    display: flex;
    align-items: center;
`;

export const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: #eceff1;
    border-radius: 12px;
    padding: 20px;
    height: 70%;

    span {
        font-size: 20px;
        color: #232323;
    }
`;

export const InputsGroup = styled.div`
    margin-top: 16px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
`;

export const AntdButton = styled(Button)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    border-radius: 8px;
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex: 1;
    align-items: flex-end;
    justify-content: flex-end;
`;