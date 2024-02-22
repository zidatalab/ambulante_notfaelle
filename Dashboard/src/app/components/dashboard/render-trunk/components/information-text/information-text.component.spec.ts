import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationTextComponent } from './information-text.component';

describe('InformationTextComponent', () => {
  let component: InformationTextComponent;
  let fixture: ComponentFixture<InformationTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformationTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
