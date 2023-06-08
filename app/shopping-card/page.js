'use client'

import { useState } from "react"
import Bought from "../components/Bought"
import UserForm from "../components/UserForm"


const ShoppingCardPage = () => {
    const [isBought, setIsBought] = useState(false);

    return (
        <>
            {
                isBought ? <Bought />
                :
                <UserForm setIsBought={setIsBought} />
            }
        </>
    )
}

export default ShoppingCardPage;