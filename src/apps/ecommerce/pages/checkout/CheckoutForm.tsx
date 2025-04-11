import React from 'react';
import { CheckoutPayload, submitCheckout } from '../../services/api';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useCart } from '../../components/cart-context';
import { useForm } from 'react-hook-form';
import { FormField } from './FormField';

interface CheckoutFormProps {
	submit?: (data: CheckoutPayload) => Promise<{ orderId: string | undefined, success?: boolean }>
}

const validationSchema = yup.object().shape({
	name: yup.string().required(),
	cardNumber: yup.string().required().matches(/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/, "Card should have xxxx xxxx xxxx xxxx format"),
	expDate: yup.date().required(),
	cvv: yup.string().required().matches(/^\d{3}$/, "CVV should contain three numbers")
});

interface PaymentFormData {
	name: string;
	cardNumber: string;
	expDate: Date; 
	cvv: string;
}

export const CheckoutForm: React.FC<CheckoutFormProps> = ({ submit = submitCheckout }) => {
	const { clearCart, products } = useCart();
	const { register, handleSubmit, formState: { errors } } = useForm<PaymentFormData>({
		mode: 'onBlur',
		resolver: yupResolver(validationSchema)
	})
	const onSubmit = handleSubmit(async (_: any) => {
		const { orderId } = await submit({
			products
		});
		clearCart();
		window.location.assign(`/order/?orderId=${orderId}`);
	})
	return (
		<form onSubmit={onSubmit}>
			<FormField
				placeholder='John Smith'
				type="text"
				label={"Cardholder's Name"}
				{...register('name')}
				errors={errors.name}
			/>
			<FormField
				placeholder="0000 0000 0000 0000"
				type="tel"
				inputMode='numeric'
				autoComplete='cc-number'
				label={"Card Number"}
				{...register('cardNumber')}
				normalize={value => (value.replace(/\s/g, "").match(/.{1,4}/g)?.join(" ").substr(0, 19) || "")}
				errors={errors.cardNumber}
			/>
			<FormField
				type="month"
				label={"Expiration Date"}
				{...register('expDate')}
				errors={errors.expDate}
			/>
			<FormField
				placeholder='000'
				type="number"
				label={"CVV"}
				{...register('cvv')}
				errors={errors.cvv}
        normalize={(value) => value.substr(0, 3)}
			/>
		</form>
	)
}