
export type ISuppliers = "British Ash" | "LEON" | "Scottish Bower" | "ED-EFF";

export type IcontractLength = 12 | 24 | 36 | 48 | 60 | 72 | 84 | 96 | 108 | 120;

export type IProductStatus = "live" | "pending" | "expired";

export interface IProduct {
    id: number,
    supplier: ISuppliers,
    name: string,
    rate: number, // £
    dailystandingcharge: number, // £
    contractlength: IcontractLength, // months
    renewable: number, // %
    status: IProductStatus,
    [x:string]: any, //Generico para poder iterar sin problemas
};

