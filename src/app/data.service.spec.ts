import {TestBed} from "@angular/core/testing";

import {DataService, Todo, DEFAULT_TODOS} from "./data.service";

describe("DataService", () => {
	let dataService: DataService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		dataService = TestBed.inject(DataService);
	});

	it("should be created", () => {
		expect(dataService).toBeTruthy();
	});
	it("should toggle completed on todo", () => {
		const todo: Todo = {
			createdDate: new Date(),
			updatedDate: new Date(),
			name: "test",
			isComplete: false
		};
		dataService.toggleComplete(todo);
		expect(todo.isComplete).toBeTrue();
	});
	it("should add todo", () => {
		const todo: Todo = {
			createdDate: new Date(),
			updatedDate: new Date(),
			name: "test",
			isComplete: false
		};
		dataService.createTodo(todo);
		dataService.createTodo(todo);
		expect(dataService.todos.length).toBe(DEFAULT_TODOS.length);
	});

	it("pre-populates todos with sample data", () => {
		expect(dataService.todos.length).toBe(DEFAULT_TODOS.length);
	});
});
