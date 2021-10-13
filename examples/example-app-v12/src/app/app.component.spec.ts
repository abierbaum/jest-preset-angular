import { Component, Input } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';



@Component({
   selector: 'test-comp',
   template: `
      <div>Testing</div>
   `,
})
export class JestInlineSnapBugComponent {
   @Input() value1: string = 'val1';
}



describe('AppComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
    expect(fixture).toMatchInlineSnapshot();
  });

  it(`should have as title 'example-app-v12'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('example-app-v12');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('example-app-v12 app is running!');
  });
});
