import React, { Suspense } from "react";

const Navbar = React.lazy(() => import("./navbar"));
const Category = React.lazy(() => import("./category"));
const Product = React.lazy(() => import("./Product"));

const Main = () => {
    return (
        <>
            <Suspense fallback={<div>loading...</div>}>
                <Navbar />
            </Suspense>
            <Suspense fallback={<div>loading...</div>}>
                <Category />
            </Suspense>
            <Suspense fallback={<div>loading...</div>}>
                <Product />
            </Suspense>

        </>
    );
};

export default Main;
