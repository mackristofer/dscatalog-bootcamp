import React, { useState } from 'react';
import BaseForm from '../../BaseForm';
import './styles.scss';

const Form = () => {

    const [name, setName] = useState('');

    const handleOnChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }

    const [price, setPrice] = useState('');

    const handleOnChangePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPrice(event.target.value);
    }

    const [category, setCategory] = useState('');

    const handleOnChangeCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCategory(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const payload = {
            name,
            price,

        }
        console.log(payload);
    }

    return (
        <form onSubmit={handleSubmit}>
            <BaseForm title="CADASTRAR UM PRODUTO">
                <div className="row">
                    <div className="col-6">
                        <input
                            value={name}
                            type="text"
                            className="form-control mb-5 mt-5"
                            onChange={handleOnChangeName}
                            placeholder="Nome do produto"
                        />
                        <select value={category} className="form-control mb-5" onChange={handleOnChangeCategory}>
                            <option value={"book"}>Book</option>
                            <option value={"eletronics"}>Eletronics</option>
                            <option value={"computers"}>Computers</option>
                            <option value={"ebook"}>e-Book</option>
                        </select>

                        <input
                            value={price}
                            type="text"
                            className="form-control"
                            onChange={handleOnChangePrice}
                            placeholder="Preço"
                        />
                    </div>
                </div>
            </BaseForm>
        </form>
    )
}

export default Form;