import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderTrunkComponent } from './render-trunk.component';

describe('RenderTrunkComponent', () => {
  let component: RenderTrunkComponent;
  let fixture: ComponentFixture<RenderTrunkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenderTrunkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenderTrunkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
