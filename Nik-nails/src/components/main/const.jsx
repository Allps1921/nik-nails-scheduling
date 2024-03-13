import React { useState } from 'react'; 

const TotalPriceForm = () => {
    return (
        const [individualPrice, setIndividualPrice] = useState (0);
        const [amount, setAmount] = useState (0);
        const [totalPrice, setTotalPrice] = useState (0);

        const individualPriceChange = (e) => {
            setIndividualPrice(parseFloat (e.target.value));
        }

        const handleAmountChange = (e) => {
            setAmount(parseFloat (e.target.value));
        }

        const calculateTotalPrice = (e) => {
            setTotalPrice(individualPrice * amount);
        }
    )
};

export default CalculateTotalPrice;