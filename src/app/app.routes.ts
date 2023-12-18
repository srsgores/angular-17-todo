import {Routes} from "@angular/router";
import {AboutComponent} from "./about/about.component";
import {TodosManagerComponent} from "./todos-manager/todos-manager.component";
import {NotFoundComponent} from "./not-found/not-found.component";

export const routes: Routes = [
	{path: "todos", component: TodosManagerComponent, title: "Todos"},
	{path: "", redirectTo: "/todos", pathMatch: "full"},
	{path: "**", component: NotFoundComponent, title: "Page Not Found"}
];
