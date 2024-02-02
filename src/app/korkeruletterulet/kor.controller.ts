import { KorModel } from "./kor.model";

export class KorController {
    private model: KorModel;

    // A vezérlő inicializálása a modellel
    constructor(model: KorModel) {
        this.model = model;
    }

    // A sugár beállítása
    setSugar(sugar: number): void {
        this.model.setSugar(sugar);
    }

    // A kör tulajdonságainak kiszámítása
    korTulajdonsagaiSzamol(): {kerulet: number; terulet: number} {
        const kerulet = this.model.keruletSzamol();
        const terulet = this.model.teruletSzamol();

        return { kerulet, terulet };
    }
}