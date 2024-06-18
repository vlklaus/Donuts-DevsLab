import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamousPersonItemComponent } from './famous-person-item.component';

describe('FamousPersonItemComponent', () => {
  let component: FamousPersonItemComponent;
  let fixture: ComponentFixture<FamousPersonItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FamousPersonItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamousPersonItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
