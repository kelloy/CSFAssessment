import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeaddComponent } from './recipeadd.component';

describe('RecipeaddComponent', () => {
  let component: RecipeaddComponent;
  let fixture: ComponentFixture<RecipeaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeaddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
