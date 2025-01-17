import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LienContactComponent } from './lien-contact.component';

describe('LienContactComponent', () => {
  let component: LienContactComponent;
  let fixture: ComponentFixture<LienContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LienContactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LienContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
