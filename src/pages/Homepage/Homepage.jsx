import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div>
      <button className="btn btn-primary m-2">
        <Link style={{ color: "white" }} className="text-decoration-none" to={"/products"}>
          Ürünler Sayfası
        </Link>
      </button>
    </div>
  );
}
