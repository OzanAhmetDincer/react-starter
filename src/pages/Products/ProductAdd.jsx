import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductAdd = () => {
    const [product, setProduct] = useState({
        title: '',
        price: '',
    });

    const handleProductChange = (e) => {
        const { title, value } = e.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            [title]: value,
        }));
    };

    const navigate = useNavigate();
    const handleAddProduct = () => {
        axios.post('https://dummyjson.com/products/add', {
            title: product.title,
            price: product.price,
        })
            .then(response => console.log(response.data))
            .catch(error => console.error('Error:', error));
        console.log('Yeni ürün eklendi:', product);
        navigate('/products');
    };

    return (

        <div className="container mt-5">
            <div className="row justify-content-center" >
                <div className="col-md-6">
                    <h2>Yeni Ürün Ekle</h2>
                    <form>
                        <div className="form-group mt-1">
                            <label for="title">Ürün Adı:</label>
                            <input type="text" name='title' className="form-control" title="title" value={product.title} onChange={handleProductChange} />
                        </div>

                        <div className="form-group mt-1">
                            <label for="price">Ürün Fiyatı:</label>
                            <input type="text" name='price' className="form-control" title="price" value={product.price} onChange={handleProductChange} />
                        </div>

                        <button onClick={handleAddProduct} type="submit" className="btn btn-primary mt-2">Kaydet</button>
                    </form>

                </div>

            </div>
        </div>

    );
};

export default ProductAdd;