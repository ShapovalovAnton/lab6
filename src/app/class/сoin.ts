import { Antiques } from "./Antiques";

export class Coin extends Antiques{
    override getType(): string {
        return 'Coin';
    }
}