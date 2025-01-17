import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LienAvisComponent } from './lien-avis.component';

describe('LienAvisComponent', () => {
  let component: LienAvisComponent;
  let fixture: ComponentFixture<LienAvisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LienAvisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LienAvisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
