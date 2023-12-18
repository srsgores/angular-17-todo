import {ComponentFixture, TestBed} from "@angular/core/testing";
import {RouterTestingModule} from "@angular/router/testing";


import {NavigationComponent} from "./navigation.component";

describe("NavigationComponent", () => {
	let component: NavigationComponent;
	let fixture: ComponentFixture<NavigationComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [NavigationComponent, RouterTestingModule]
		}).compileComponents();

		fixture = TestBed.createComponent(NavigationComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});

	it ("renders links with routerLink for provided routes", () => {
		const compiled = fixture.nativeElement;
		const links = compiled.querySelectorAll(".nav-item-link");
		expect(links.length).toBe(component.navItems.length);
	});
});
