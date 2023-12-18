import {Component} from "@angular/core";
import {RouterLink, RouterLinkActive} from "@angular/router";

export interface NavItem {
	title: string;
	url: string;
};

@Component({
	selector: "app-navigation",
	standalone: true,
	imports: [RouterLink, RouterLinkActive],
	templateUrl: "./navigation.component.html",
	styleUrl: "./navigation.component.css"
})
export class NavigationComponent {
	navItems: NavItem[] = [
		{title: "Home", url: "/"},
		{title: "Todos", url: "/todos"},
	]
}
