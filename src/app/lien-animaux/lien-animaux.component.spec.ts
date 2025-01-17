import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LienAnimauxComponent } from './lien-animaux.component';

describe('LienAnimauxComponent', () => {
  let component: LienAnimauxComponent;
  let fixture: ComponentFixture<LienAnimauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LienAnimauxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LienAnimauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
