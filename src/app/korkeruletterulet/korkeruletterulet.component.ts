import { Component } from '@angular/core';
import { KorController } from './kor.controller';
import { KorModel } from './kor.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-korkeruletterulet',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './korkeruletterulet.component.html',
  styleUrls: ['./korkeruletterulet.component.css']
})
export class KorkeruletteruletComponent {
  private controller: KorController = new KorController(new KorModel());
  sugar: number = 0;
  kerulet: number | null = null;
  terulet: number | null = null;

  // A kör tulajdonságainak kiszámítása
  korTulajdonsagaiSzamol(): void {
    this.controller.setSugar(this.sugar);
    const { kerulet, terulet } = this.controller.korTulajdonsagaiSzamol();
    this.kerulet = kerulet;
    this.terulet = terulet;
  }
}
