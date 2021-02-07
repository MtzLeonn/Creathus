import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import NavbarComponent from '../../components/NavbarComponent'
import Button from 'react-bootstrap/Button';

export default function Home() {

    const [apiData, setapiData] = useState({});
    const [isBtnClicked, setisBtnClicked] = useState(false);

    useEffect(() => {

        handleApiData();

    }, []);

    async function handleApiData() {
        const response = await api.post('/post');
        setapiData(response.data)
    }

    async function handleClick() {
        console.log(apiData);
        setisBtnClicked(true);
    }

    return (
        <>
            <NavbarComponent />

            <div className="container">
                <div className="row mt-5 d-flex col-md-12 justify-content-center">
                    <p>Clique no botão ao lado para ver os dados da API!</p>
                    <Button
                        className="ml-5" 
                        variant="dark"
                        onClick={handleClick}
                        >Exibir
                    </Button>
                </div>

                <div className="row mt-5">
                    <pre>
                        <code>
                            {isBtnClicked === true ? <div>{JSON.stringify(apiData, null, 2)}</div> : null}
                        </code>
                    </pre>
                </div>
            </div>
        </>

        
    );
}