import React from 'react'
import { Helper } from '../helpers/helpers'
import TimerActionButton from './TimerActionButton'

interface TimerProp {
	id: string, 
  title: string, 
  project: string, 
  elapsed: number, 
  runningSince: string, 
  onEditClick: () => void, 
  onStartClick: (id: string) => void, 
  onStopClick: (id: string) => void, 
  onTrashClick: (id: string) => void
}

const Timer: React.FC<TimerProp> = (props) => {
  // Add a local state to force re-renders
  const [, setForceUpdate] = React.useState(0);
	
  // Get the elapsed string whenever the component renders
	const elapsedString = Helper.renderElapsedString(props.elapsed, props.runningSince)
	
	React.useEffect(() => {
		if(props.runningSince) {
			const forceUpdateInterval = setInterval(() => {
				setForceUpdate(prev => prev + 1);
			}, 50)

			return () => clearInterval(forceUpdateInterval);
		}

	}, [props.runningSince])

	const handleStartClick = () => {
		props.onStartClick(props.id)
	}

	const handleStopClick = () => {
		props.onStopClick(props.id)
	}

	const handleTrashClick = () => {
		props.onTrashClick(props.id)
	}

	return (
		<div className='ui centered card'>
			<div className="content">
				<div className="header">
					{props.title}
				</div>
				<div className="meta">
					{props.project}
				</div>
				<div className="center aligned description">
					<h2>{elapsedString}</h2>
				</div>
				<div className="extra content">
					<span className="right floated edit icon" onClick={props.onEditClick}>
						<i className="edit icon"></i>
					</span>
					<span className="right floated trash icon" onClick={handleTrashClick}>
						<i className="trash icon"></i>
					</span>
				</div>
			</div>
			<TimerActionButton 
				timerIsRunning={!!props.runningSince} 
				onStartClick={handleStartClick}
				onStopClick={handleStopClick}
			/>
		</div>
	)
}

export default Timer