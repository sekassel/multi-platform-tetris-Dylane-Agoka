import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Piece } from '../piece/piece.component';

describe('PieceComponent', () => {
  let component: Piece;
  let fixture: ComponentFixture<Piece>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Piece ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Piece);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
