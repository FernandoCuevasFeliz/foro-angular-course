import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllTopicComponent } from './list-all-topic.component';

describe('ListAllTopicComponent', () => {
  let component: ListAllTopicComponent;
  let fixture: ComponentFixture<ListAllTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAllTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
