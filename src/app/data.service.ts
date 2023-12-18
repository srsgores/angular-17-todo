import {Injectable, inject} from "@angular/core";
import {BrowserStorageService} from "./storage.service";
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
	storage = inject(BrowserStorageService);
	todos: Todo[] = DEFAULT_TODOS;

	toggleComplete(todo: Todo) {
		todo.isComplete = !todo.isComplete;
	}

	private saveTodos() {
		this.storage.set("todos", JSON.stringify(this.todos));
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
		this.saveTodos();
	}
	removeTodo(index: number) {
		this.todos.splice(index, 1);
		return this.saveTodos();
	}

	constructor() {
		const savedTodos: string | null = this.storage.get("todos");
		if (savedTodos?.length) {
			const serializedTodos: Todo[] = JSON.parse(savedTodos);
			this.todos = serializedTodos;
		}
	}
}
