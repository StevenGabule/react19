import { createContext, PropsWithChildren, RefObject, useContext, useRef } from 'react';

export const CanvasContext = createContext<RefObject<HTMLCanvasElement | null>>({} as RefObject<HTMLCanvasElement | null>);

export const CanvasProvider = ({ children }: PropsWithChildren<{}>) => {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);

	return (
		<CanvasContext.Provider value={canvasRef}>
			{children}
		</CanvasContext.Provider>
	)
}

export const useCanvas = () => useContext(CanvasContext);