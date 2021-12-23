

// {
//     id: number,
//     supplier: ISupliers,
//     name: string,
//     rate: number, // £
//     dailystandingcharge: number, // £
//     contractlength: IcontractLength, // months
//     renewable: number, // %
//     status: IProductStatus
// }

import { IcontractLength, IProduct, IProductStatus, ISuppliers } from "../interface/products";

let supplierList = ["British Ash", "LEON", "Scottish Bower", "ED-EFF"];

let randomNames = ["winter prices", "black friday prices", "winter prices", "special prices", "brexit prices", "normal", "spring prices", "normal prices", "standard prices", "spring prices", "winter prices", "easter prices", "spring prices", "that guy", "the another one", "my uncle", "your cousin", "name A", "name B", "name C", "name D", "name E", "Maybe I stop here"];

let rand = (max: number, min: number = 0) => Math.round(Math.random() * (max - min) + min);

let contractLength = [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

let status = ["live" ,"pending" , "expired"]

let DATA_TEMPLATE: IProduct = {
    id: (() => Math.floor( rand( Math.floor( rand(1, 0) * Date.now() ) ) ))(),
    supplier: (() => (supplierList[Math.floor(rand(4))]))() as ISuppliers,
    name: (() => (randomNames.splice(
        Math.floor(rand(randomNames.length - 1)),
        1
    )[0]))(),
    rate: Math.floor(rand(1, 0) * 100) / 100, //forced 2 decimals
    dailystandingcharge: Math.floor(rand(1, 0) * 100) / 100, //forced 2 decimals
    contractlength: contractLength[Math.floor(rand(contractLength.length))] as IcontractLength,
    renewable: Math.floor(rand(100, 1)),
    status: status[Math.floor(rand(status.length))] as IProductStatus ,
}


export { DATA_TEMPLATE, randomNames };