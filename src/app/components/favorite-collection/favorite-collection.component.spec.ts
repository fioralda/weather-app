import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteCollectionComponent } from './favorite-collection.component';

describe('FavoriteCollectionComponent', () => {
  let component: FavoriteCollectionComponent;
  let fixture: ComponentFixture<FavoriteCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
