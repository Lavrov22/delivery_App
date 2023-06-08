'use client'

import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string } from 'yup';
import styled from "../page.module.css"
import ProductList from "../components/ProductList";
import {useCart} from "../hooks/useCart";


const userForm = object().shape({
    name: string()
        .min(3, 'Name must be at least 7 characters')
        .max(32, 'Name must be at most 32 characters')
        .required('Name is required'),
    email: string()
        .email('Invalid email address')
        .required('Email is required'),
    phone: string()
        .min(10, 'Phone must be at least 10 characters')
        .max(13, 'Phone must be at most 13 characters')
        .required('Phone is required'),
    address: string()
        .min(10, 'Address must be at least 7 characters')
        .max(30, 'Address must be at most 32 characters')
        .required('Phone is required'),
})

const UserForm = ({setIsBought}) => {
    const { productsItems, getAllProductsQuantity, getTotalPrice, clearWholeCart } = useCart();
    const productsInCard = getAllProductsQuantity();


    const initialValues = {
    name: '',
    email: '',
    phone: '',
    address: '',
    products: [],
    }
   

    const handleSubmit = (values, actions) => {
        const obj = {
            ...values,
            products: productsItems
        }
        setIsBought(true)
        clearWholeCart()
        actions.resetForm()
    }

    return (
        <>
            {productsInCard ? (<Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form autoComplete="off">
                    <div className={styled.main_shoppingCard}>
                        <div className={styled.section_shop}>
                            <div className={styled.wrapperCenter}>
                                <h1 className={styled.title}>User information</h1>
                                <label className={styled.label} >
                                    Name:
                                    <Field className={styled.input} type='text' name='name'/>
                                    <ErrorMessage name="name" component="div" />
                                </label>
                                <label className={styled.label}>
                                    Email:
                                    <Field className={styled.input} type='text' name='email' />
                                    <ErrorMessage name="email" component="div" />
                                </label>
                                <label className={styled.label}>
                                    Phone:
                                    <Field className={styled.input} type='text' name='phone' />
                                    <ErrorMessage name="phone" component="div" />
                                </label>
                                <label className={styled.label}>
                                    Address:
                                    <Field className={styled.input} type='text' name='address' />
                                    <ErrorMessage name="address" component="div" />
                                </label>
                            </div>
                        </div>
                        <div className={styled.section_shoppingCard_scroll}>
                            {productsItems.length && <ProductList filtrProducts={productsItems} />}
                        </div>
                    </div>
                    <h3 className={styled.form_price}>Total Price: {getTotalPrice()}</h3>
                    <button className={styled.form_button} type="submit">Submit</button>
                </Form>
            </Formik >) : (<h3 className={styled.card_withoutProducts}>Sorry, this card is empty. Try to buy something :)</h3>)}
        </>
        
      
    )
}


export default UserForm;