import { useEffect, useRef } from 'react'

export const useFocus = () => {
	const ref = useRef<HTMLInputElement>(null)

	useEffect(() => {
		if (!ref.current) return;
		ref.current.focus();
	}, [])

	return ref;
}