import React, { useEffect } from 'react';

interface TodosProp {
	id: number;
	title: string;
	completed: boolean;
}

export default function TodoList() {
	const inputRef = React.useRef<HTMLInputElement>(null);
	const [newTodo, setNewTodo] = React.useState('');
	const [todos, setTodos] = React.useState<TodosProp[]>([
		{ id: 1, title: 'Todo 1', completed: false },
		{ id: 2, title: 'Todo 2', completed: true }
	]);
	
	const [prevTodos, setPrevTodos] = React.useState<TodosProp[]>([]);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const updateTodos = [...todos, { id: todos.length + 1, title: newTodo, completed: false }];
		setTodos(updateTodos);
		setNewTodo('');
		inputRef.current?.focus();
		setPrevTodos(updateTodos);
	}

	const handleClick = (id: number) => {
		setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
	}

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		const search = e.target.value;
		if (search) {
			setTodos(todos.filter(todo => todo.title.toLowerCase().includes(search.toLowerCase())));
		} else {
			setTodos(prevTodos);
		}
	}

	useEffect(() => {
		setPrevTodos(todos);
	}, []);

	return (
		<>
			<h3>Todo Lists</h3>
			
			<input type="text" name="search" placeholder="Search" onChange={handleSearch} />
			
			<p>Pending ({todos.filter(todo => !todo.completed).length})</p>
			{todos.filter(todo => !todo.completed).map((todo: TodosProp) => <li key={todo.id} onClick={() => handleClick(todo.id)} style={{ cursor: 'pointer'}}>{todo.title}</li>)}

			<p>Completed  ({todos.filter(todo => todo.completed).length})</p>
			{todos.filter(todo => todo.completed).map((todo: TodosProp) => <li key={todo.id} onClick={() => handleClick(todo.id)} style={{ textDecoration: 'line-through', cursor: 'pointer' }}>{todo.title}</li>)}
			
			<br />

			<form onSubmit={handleSubmit}>
				<input ref={inputRef} type="text" name="todo" placeholder="Add a todo" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
				<button type="submit">Add</button>
			</form>
		</>
	)
}