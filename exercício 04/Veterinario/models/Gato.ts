import { Animal } from "./Animal.js";
import { GatoProps } from "../interface/AnimalProps.js";

export class Gato extends Animal<GatoProps> {

    getFivFelvTestado(): boolean {
        return this.props.fivFelvTestado;
    }

    getIsIndoor(): boolean {
        return this.props.isIndoor;
    }
}