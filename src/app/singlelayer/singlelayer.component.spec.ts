import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglelayerComponent } from './singlelayer.component';

describe('SinglelayerComponent', () => {
  let component: SinglelayerComponent;
  let fixture: ComponentFixture<SinglelayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglelayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglelayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
