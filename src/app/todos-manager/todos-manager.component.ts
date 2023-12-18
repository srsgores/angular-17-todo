import {Component, inject} from "@angular/core";
import {TodoComponent} from "../todo/todo.component";
import {DataService} from "../data.service";
import generateUniqueId from "../utils/generate-unique-id";

@Component({
	selector: "app-todos-manager",
	standalone: true,
	imports: [TodoComponent],
	providers: [DataService],
	templateUrl: "./todos-manager.component.html",
	styleUrl: "./todos-manager.component.css"
})
export class TodosManagerComponent {
	componentId = generateUniqueId();
	dataService = inject(DataService);
}
