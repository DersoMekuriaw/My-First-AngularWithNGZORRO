import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineTreeViewComponent } from './line-tree-view.component';

describe('LineTreeViewComponent', () => {
  let component: LineTreeViewComponent;
  let fixture: ComponentFixture<LineTreeViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LineTreeViewComponent]
    });
    fixture = TestBed.createComponent(LineTreeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
