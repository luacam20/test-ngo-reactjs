import React, { useCallback, useState } from 'react';
import {Input, Divider} from 'antd';
import {Container, Title, InputsContainer, InputsGroup, ButtonContainer, AntdButton} from './styles';

import axios from 'axios';
const CustomerRegister = () => {
    const [customers, setCustomers] = useState([]);

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [cep, setCep] = useState('');
    const [street, setStreet] = useState('');
    const [number, setNumber] = useState('');
    const [neighborhood, setNeighborhood] = useState(''); 

    const handleChangeName = useCallback((value)=>{
        setName(value);
    }, []);
    
    const handleChangePhone = useCallback((value)=>{
        setPhone(value);
    }, []);

    const handleChangeCep = useCallback((value)=>{
        setCep(value);
    }, []);

    const handleChangeStreet = useCallback((value)=>{
        setStreet(value);
    }, []);

    const handleChangeNumber = useCallback((value)=>{
        setNumber(value);
    }, []);

    const handleChangeNeighborhood = useCallback((value)=>{
        setNeighborhood(value);
    }, []);

    const preenchimentoCampos = useCallback(async () => {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json`);

        const rua = response.data.logradouro;
        const bairro = response.data.bairro; 

        setStreet(rua);
        setNeighborhood(bairro);
    }, [cep]);

    const handleButtonClick = useCallback(() => {
        console.log(customers)

       if(name == "" || phone == "" || street == "" || number == "" || cep == "" || neighborhood == ""){
            alert("Infrome corretamente os dados.");
            
            return;
       }
        
       if (customers.find(customer => customer.phone === phone)) {
            alert("Esse telefone ja foi registrado em nome de outro cliente.");

            return;
        }

        const newCustomer = {name, phone, street, number, cep, neighborhood};

        setCustomers([...customers, newCustomer]);

        localStorage.setItem('customersData', JSON.stringify(customers));

        setName('');
        setPhone('');
        setCep('');
        setStreet('');
        setNumber('');
        setNeighborhood('');
    }, [name, cep, phone, street, number, neighborhood, customers]);

    return (
        <Container> 
            <Title>Cadastro de clientes</Title>
            <InputsContainer>
                <span>Dados do usuário:</span>
                <Divider style={{marginTop: '2px', marginBottom: '0', background: "#9ea7aa"}} />

                <InputsGroup>
                    <Input style={{width: '49%'}} value={name} onChange={(e) => handleChangeName(e.target.value)} placeholder="Digite seu nome"/>
                    <Input style={{width: '49%'}} value={phone} onChange={(e) => handleChangePhone(e.target.value)} placeholder="Telefone"/>
                </InputsGroup>

                <span>Endereço completo:</span>
                <Divider style={{marginTop: '2px', marginBottom: '0', background: "#9ea7aa"}} />

                <InputsGroup>
                    <Input style={{width: '23.5%'}} onBlur={preenchimentoCampos} value={cep} onChange={(e) => handleChangeCep(e.target.value)} placeholder="Cep"/>
                    <Input style={{width: '23.5%'}} value={street} onChange={(e) => handleChangeStreet(e.target.value)} placeholder="Rua"/>
                    <Input style={{width: '23.5%'}} value={number} onChange={(e) => handleChangeNumber(e.target.value)} placeholder="Número"/>
                    <Input style={{width: '23.5%'}} value={neighborhood} onChange={(e) => handleChangeNeighborhood(e.target.value)} placeholder="Bairro"/>
                </InputsGroup>

                {customers.map(customer => (
                    <p key={customer.phone}>{"Nome: " + customer.name + " | " + " Telefone: " + customer.phone + " | " + " Rua: " + customer.street + " | " + " n°: " + customer.number + " | " + " CEP: " + customer.cep + " | " + " Bairro: " + customer.neighborhood}</p>
                ))}

                <ButtonContainer>
                    <AntdButton onClick={handleButtonClick} type="primary" >Salvar</AntdButton>
                </ButtonContainer>
            </InputsContainer>
        </Container>

    )
}

export default CustomerRegister;