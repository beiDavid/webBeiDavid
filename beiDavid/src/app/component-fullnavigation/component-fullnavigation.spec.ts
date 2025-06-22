import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentFullnavigation } from './component-fullnavigation';

describe('ComponentFullnavigation', () => {
  let component: ComponentFullnavigation;
  let fixture: ComponentFixture<ComponentFullnavigation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentFullnavigation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentFullnavigation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
