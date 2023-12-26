import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductAdd = () => {
    const [product, setProduct] = useState({
        title: '',
        price: '',
        description:'Ürün ile ilgili bilgileri giriniz...',
        stock:'',
        brand:'',
        thumbnail:null
    });

    const handleProductChange = (e) => {
        const { title, value } = e.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            [title]: value,
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setProduct((prevProduct) => ({ ...prevProduct, thumbnail: file }));
      };

    const navigate = useNavigate();
    const handleAddProduct = () => {
        axios.post('https://dummyjson.com/products/add', {
            title: product.title,
            price: product.price,
            description:product.description,
            stock:product.stock,
            brand:product.brand,
            thumbnail:product.thumbnail
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
                            <label for="description">Ürün Açıklaması:</label>
                            <textarea style={{height:"150px"}} type="text" name='description' className="form-control" title="description" value={product.description} onChange={handleProductChange} />
                        </div>

                        <div className="form-group mt-1">
                            <label for="brand">Ürün Markası:</label>
                            <input type="text" name='brand' className="form-control" title="brand" value={product.brand} onChange={handleProductChange} />
                        </div>

                        <div className="form-group mt-1">
                            <label for="price">Ürün Fiyatı:</label>
                            <input type="text" name='price' className="form-control" title="price" value={product.price} onChange={handleProductChange} />
                        </div>

                        <div className="form-group mt-1">
                            <label for="stock">Ürün Stok Bilgisi:</label>
                            <input type="number" name='stock' className="form-control" title="stock" value={product.stock} onChange={handleProductChange} />
                        </div>

                        <div className="form-group mt-1">
                            <label className='my-1' for="thumbnail">Resim</label><br/>
                            <input type="file" name='thumbnail' title='thumbnail' accept="image/*" className="form-control-file" onChange={handleImageChange}/>                                          
                        </div>

                        <button onClick={handleAddProduct} type="submit" className="btn btn-primary mt-2">Kaydet</button>
                    </form>

                </div>

            </div>
        </div>

    );
};

export default ProductAdd;