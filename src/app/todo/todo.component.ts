import {Component, Input, ViewChild, ElementRef} from "@angular/core";
import {DataService, Todo} from "../data.service";
import {FormsModule} from "@angular/forms";

@Component({
	selector: "todo",
	standalone: true,
	imports: [FormsModule],
	templateUrl: "./todo.component.html",
	styleUrl: "./todo.component.css"
})
export class TodoComponent {
	@Input({required: true}) todo: Todo = {createdDate: new Date(), name: "Hello", isComplete: false};
	@Input({required: true}) index: number = 0;
	constructor(protected dataService: DataService) {

	}
	updateTask(task: Todo) {
		this.todo = task;
	}
}
