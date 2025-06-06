import axios from 'axios'
import {ActionType} from '../action-types'
import { Action } from '../actions'
import { Dispatch } from 'redux'

export const searchRepositories = (term: string) => {
	return async(dispatch: Dispatch<Action>) => {
		dispatch({ type: ActionType.SEARCH_REPOSITORIES })
		
		try {
			const {data} = await axios.get('https://registry.npmjs.org/-/v1/search', { params: { text: term } });

			// @ts-expect-error data
			const names = data.objects.map((result: any) => {
				return result.package.name
			})
			dispatch({
				type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
				payload: names
			})
		} catch (err: any) {
			dispatch({
				type: ActionType.SEARCH_REPOSITORIES_ERROR,
				payload: err.message
			})
		}
	}
}