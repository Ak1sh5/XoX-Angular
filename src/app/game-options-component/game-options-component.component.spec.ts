import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameOptionsComponentComponent } from './game-options-component.component';

describe('GameOptionsComponentComponent', () => {
  let component: GameOptionsComponentComponent;
  let fixture: ComponentFixture<GameOptionsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameOptionsComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GameOptionsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
