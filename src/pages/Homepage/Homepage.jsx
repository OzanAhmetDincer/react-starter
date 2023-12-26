import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div>
      <Link to={"/products"}>Ürünler Sayfası</Link>
    </div>
  );
}
