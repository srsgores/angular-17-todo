import {Injectable} from "@angular/core";
export interface Todo {
	createdDate: Date,
	updatedDate?: Date,
	isComplete: boolean,
	name: string
}
export const DEFAULT_TODO_TITLE = "New Task";
export const DEFAULT_TODO: Todo = {
	createdDate: new Date(),
	updatedDate: new Date(),
	name: DEFAULT_TODO_TITLE,
	isComplete: false
}
export const DEFAULT_TODOS: Todo[] = [
	DEFAULT_TODO
];

@Injectable({
	providedIn: "root"
})
export class DataService {
	todos: Todo[] = DEFAULT_TODOS;

	toggleComplete(todo: Todo) {
		todo.isComplete = !todo.isComplete;
	}

	createTodo(todo: Todo = DEFAULT_TODO) {
		let createdTodo: Todo = todo;
		if (!createdTodo.name) {
			createdTodo.name = DEFAULT_TODO_TITLE;
		}
		if (!createdTodo.createdDate) {
			createdTodo.createdDate = new Date();
		}
		this.todos.push(createdTodo);
	}
	removeTodo(index: number) {
		this.todos.splice(index, 1);
		return this.todos;
	}
}
