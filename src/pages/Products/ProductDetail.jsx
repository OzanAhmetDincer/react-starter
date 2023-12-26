import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

function ProductDetail(props, { images }) {
  const [productDetail, setProductDetail] = useState({});
  let { id } = useParams();

  useEffect(() => {
    axiosGet();
  }, []);

  const axiosGet = async () => {
    let response = await axios.get("https://dummyjson.com/products/" + id);
    setProductDetail(response.data);
    //console.log(response.data);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="card">
            {productDetail && (
              <>
                <div className="container">
                  <Carousel>
                    {productDetail &&
                      productDetail.images &&
                      productDetail.images.map((image, index) => (
                        <Carousel.Item key={index}>
                          <img className="d-block w-100" src={image} />
                        </Carousel.Item>
                      ))}
                  </Carousel>
                </div>

                <div className="card-body">
                  <h1 className="card-title">{productDetail.title}</h1>
                  <h5 className="card-text">{productDetail.description}</h5>
                  <h5 className="card-text">{productDetail.price}₺</h5>
                  {/* Diğer detayları buraya ekleyebilirsiniz */}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
