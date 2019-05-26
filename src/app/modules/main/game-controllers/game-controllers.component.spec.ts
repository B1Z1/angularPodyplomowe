import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameControllersComponent } from './game-controllers.component';

describe('GameControllersComponent', () => {
  let component: GameControllersComponent;
  let fixture: ComponentFixture<GameControllersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameControllersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameControllersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
