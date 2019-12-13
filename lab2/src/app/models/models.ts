export interface ITv {
    addTime: string;
    brand: string;
    contrast: string;
    format: string;
    image: string;
    resolution: number;
    type: string;
}



export interface ITvs {
    id: string;
    details: ITv;
}
