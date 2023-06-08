'use client'

import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext(null);

const ProductProvider = ({ children }) => {
    const [productsItems, setProductsItems] = useState([]);

    // Get cart from local storage and update state
    useEffect(() => {
        const productsItemsStorage = localStorage.getItem("products");

        if (productsItemsStorage) {
            setProductsItems(JSON.parse(productsItemsStorage));
        }
    }, []);

    // Save cart to local storage
    useEffect(() => {
        if (productsItems.length) {
            const productsItemsJson = JSON.stringify(productsItems);
            localStorage.setItem("products", productsItemsJson)
        }
    }, [productsItems]);

    const addToCart = (product) => {

        const existedProductIndex = productsItems.findIndex(el => el._id === product._id)
        if (existedProductIndex >= 0) {
            const combinedProduct = {
                ...product,
                quantity: Number(product.quantity) + Number(productsItems[existedProductIndex].quantity),
            }
            const newCartArr = [
                ...productsItems.slice(0, existedProductIndex),
                combinedProduct,
                ...productsItems.slice(existedProductIndex + 1),
            ];
            setProductsItems([...newCartArr]);
       
        } else {
            
            setProductsItems([...productsItems, product]);
        }
    }

    const removeFromCart = (id) => {
        if (productsItems.length > 1) {
            setProductsItems(productsItems.filter(item => item._id !== id))
        } else {
            clearWholeCart();
        }
    }


    const clearWholeCart = () => {
        setProductsItems([]);
        localStorage.removeItem("products");
    };

    const getAllProductsQuantity = () => {
        return productsItems.reduce((acc, currentValue) => {
            return acc + currentValue.quantity;
        }, 0);
    };

    const getTotalPrice = () => {
        return productsItems.reduce((acc, currentValue) => {
            return acc + currentValue.price * currentValue.quantity
        }, 0);
    }

    const getAllProductsPrice = () => {
        return productsItems.reduce((acc, currentValue) => {
            return acc + currentValue.quantity;
        }, 0);
    }

    const increaseQuantity = (id) => {
        setProductsItems(
            productsItems.map((item) => {
                if (item._id === id) {
                    item.quantity++;
                }
                return item;
            })
        );
    };

    const decreaseQuantity = (id) => {
        setProductsItems(
            productsItems.map((item) => {
                if (item._id === id) {
                    item.quantity--;
                }
                return item;
            })
        );
    };

    return (
        <ProductContext.Provider value={{
            addToCart,
            productsItems,
            setProductsItems,
            removeFromCart,
            getAllProductsQuantity,
            increaseQuantity,
            decreaseQuantity,
            getTotalPrice,
            clearWholeCart
        }}>
            {children}
        </ProductContext.Provider>
    )
}


export default ProductProvider;

// Export useCart function which returns cart context with all data and methods

export const useCart = () => useContext(ProductContext);