import {TestBed} from "@angular/core/testing";
import {Router} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";


import {AppComponent} from "./app.component";

describe("AppComponent", () => {
	let router: Router;
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				AppComponent,
				RouterTestingModule,
			]
		}).compileComponents();
		router = TestBed.inject(Router);
	});

	it("should create the app", () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		expect(app).toBeTruthy();
	});

	it("should render the navigation", () => {
		const fixture = TestBed.createComponent(AppComponent);
		fixture.detectChanges();
		const compiled = fixture.nativeElement as HTMLElement;
		expect(compiled.querySelector("app-navigation")?.textContent).toBeDefined();
	});
});
