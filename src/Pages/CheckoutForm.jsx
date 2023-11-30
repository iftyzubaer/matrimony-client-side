import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const price = 500
    // const [clientSecret, setClientSecret] = useState('')

    useEffect(() => {
        axios.post('http://localhost:5000/create-payment-intent',  price )
            .then((res) => {
                console.log(res.data.clientSecret);
                // setClientSecret(res.data.clientSecret)
                toast("Biodata Updated Successfully!")
            })
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="bg-black text-white p-3 w-full rounded-lg mt-4 hover:bg-gray-800" type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default CheckoutForm;