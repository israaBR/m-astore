import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParfumPageComponent } from './parfum-page.component';

describe('ParfumPageComponent', () => {
  let component: ParfumPageComponent;
  let fixture: ComponentFixture<ParfumPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParfumPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParfumPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
