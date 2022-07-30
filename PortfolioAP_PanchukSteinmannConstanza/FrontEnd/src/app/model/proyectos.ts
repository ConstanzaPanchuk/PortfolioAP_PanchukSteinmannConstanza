export class Proyectos {
    id? : number;
    nombreP : string;
    descripcionP : string;
    imgP : string;
    direccionP : string;

    constructor(nombreP: string, descripcionP: string, imgP: string, direccionP: string) {
        this.nombreP = nombreP;
        this.descripcionP = descripcionP;
        this.imgP = imgP;
        this.direccionP = direccionP;
    }
}
