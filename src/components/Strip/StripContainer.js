import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"
const PUBLIC_KEY = "pk_live_51HlcALK6ArazILAyFyFWzJz0amlxz7ZmsaHtP1YOs2ZLsfIiPAaEskRR3avkk7qcXlMIR7dXyXhnfcsA7bX1yVG400sgrxQk7O"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm  />
		</Elements>
	)
}