import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KorkeruletteruletComponent } from './korkeruletterulet.component';

describe('KorkeruletteruletComponent', () => {
  let component: KorkeruletteruletComponent;
  let fixture: ComponentFixture<KorkeruletteruletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KorkeruletteruletComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KorkeruletteruletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
