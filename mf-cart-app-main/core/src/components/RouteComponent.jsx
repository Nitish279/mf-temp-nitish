import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
// import Header from "./Header";
import Spinner from "react-bootstrap/Spinner";
const HeaderPage = lazy(() => import("header/HeaderPage"));
const ProductPage = lazy(() => import("product/ProductPage"));

const PaymentPage = React.lazy(() => import("payment/PaymentPage"));

function RouteComponent() {
  return (
    <>
      <HeaderPage />
      <Routes>
        <Route index element={<Homepage />} />
        <Route
          path="product"
          element={
            <Suspense fallback={<Spinner animation="border" variant="dark" />}>
              <ProductPage />
            </Suspense>
          }
        />
        <Route
          path="payment"
          element={
            <Suspense fallback={<Spinner animation="border" variant="dark" />}>
              <PaymentPage />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default RouteComponent;
