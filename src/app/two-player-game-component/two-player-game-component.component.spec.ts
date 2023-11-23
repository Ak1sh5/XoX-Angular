import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoPlayerGameComponentComponent } from './two-player-game-component.component';

describe('TwoPlayerGameComponentComponent', () => {
  let component: TwoPlayerGameComponentComponent;
  let fixture: ComponentFixture<TwoPlayerGameComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TwoPlayerGameComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TwoPlayerGameComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
