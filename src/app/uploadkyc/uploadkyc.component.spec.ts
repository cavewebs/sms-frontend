import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadkycComponent } from './uploadkyc.component';

describe('UploadkycComponent', () => {
  let component: UploadkycComponent;
  let fixture: ComponentFixture<UploadkycComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadkycComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadkycComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
