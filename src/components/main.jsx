import React, { Suspense } from "react";
import Example from "./Example";

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
                <Example title='Uploading' />
                <Example title='Next Up' />
                <Example title='Completed' />
                <Example title='Incomplete Uploads' />
            </Suspense>
            <Suspense fallback={<div>loading...</div>}>
                <Product />
            </Suspense>

        </>
    );
};

export default Main;
