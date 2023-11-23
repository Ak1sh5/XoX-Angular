import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePlayerGameComponentComponent } from './single-player-game-component.component';

describe('SinglePlayerGameComponentComponent', () => {
  let component: SinglePlayerGameComponentComponent;
  let fixture: ComponentFixture<SinglePlayerGameComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SinglePlayerGameComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SinglePlayerGameComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
