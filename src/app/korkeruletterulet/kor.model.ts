export class KorModel {
    private sugar: number = 0;

    // A sugár beállítása
    setSugar(sugar:number): void {
        this.sugar = sugar;
    }

    // A kör kerületének kiszámítása (K=2*r*PI)
    keruletSzamol(): number {
        return 2 * Math.PI * this.sugar;
    }

    // A kör területének kiszámítása (T=r2*PI)
    teruletSzamol(): number {
        return Math.PI * Math.pow(this.sugar, 2);
    }
}