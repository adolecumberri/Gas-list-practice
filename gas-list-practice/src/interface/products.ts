
export type ISupliers = "British Ash" | "LEON" | "Scottish Bower" | "ED-EFF";

export type IcontractLength = 12 | 24 | 36 | 48 | 60 | 72 | 84 | 96 | 108 | 120;

export type IProductStatus = "live" | "pending" | "expired";

export interface IProduct {
    id: number,
    supplier: ISupliers,
    name: string,
    rate: number, // £
    dailystandingcharge: number, // £
    contractlength: IcontractLength, // months
    renewable: number, // %
    status: IProductStatus
};

