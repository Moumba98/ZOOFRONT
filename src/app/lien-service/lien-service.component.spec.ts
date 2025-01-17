import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LienServiceComponent } from './lien-service.component';

describe('LienServiceComponent', () => {
  let component: LienServiceComponent;
  let fixture: ComponentFixture<LienServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LienServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LienServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
