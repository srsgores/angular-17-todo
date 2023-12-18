import {Component} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterOutlet} from "@angular/router";
import {NavigationComponent} from "./navigation/navigation.component";
import {TodosManagerComponent} from "./todos-manager/todos-manager.component";
import "the-new-css-reset/css/reset.css";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [CommonModule, RouterOutlet, NavigationComponent, TodosManagerComponent],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.css"
})
export class AppComponent {}
