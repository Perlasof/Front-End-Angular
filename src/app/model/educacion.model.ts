export class educacion{
    id?: number;
    titulo: string;
    institucion: string;
    fechaInic: string;
    fechaFin: string;
    img: string;

    constructor(titulo: string, institucion: string, fechaInic:string,
        fechaFin:string, img: string){
        this.titulo = titulo;
        this.institucion = institucion;
        this.fechaInic = fechaInic;
        this.fechaFin = fechaFin;
        this.img = img;
    }
    
}