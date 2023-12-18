import {Routes} from "@angular/router";
import {TodosManagerComponent} from "./todos-manager/todos-manager.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {AboutComponent} from "./about/about.component";

export const routes: Routes = [
	{path: "todos", component: TodosManagerComponent, title: "Todos"},
	{path: "", redirectTo: "/todos", pathMatch: "full"},
	{path: "about", component: AboutComponent, title: "About"},
	{path: "**", component: NotFoundComponent, title: "Page Not Found"}
];
