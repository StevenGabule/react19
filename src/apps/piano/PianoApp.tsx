import { Footer } from './components/footer'
import { Logo } from './components/Logo'
import { Main } from './components/main'
import './App.css'

export const PianoApp = () => {
	return (
		<div className="app">
			<Logo />
			<main className='app-content'>
				<Main />
			</main>
			<Footer />
		</div>
	)
}