import { Animal } from "./Animal.js";
import { CachorroProps } from "../interface/AnimalProps.js";

export class Cachorro extends Animal<CachorroProps> {

    getPorte(): string {
        return this.props.porte;
    }

    getPrecisaTosa(): boolean {
        return this.props.precisaTosa;
    }
}