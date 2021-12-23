

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

const supplierList = ["British Ash", "LEON", "Scottish Bower", "ED-EFF"];

const randomNames = ["winter prices", "black friday prices", "winter prices", "special prices", "brexit prices", "normal", "spring prices", "normal prices", "standard prices", "spring prices", "winter prices", "easter prices", "spring prices", "that guy", "the another one", "my uncle", "your cousin", "name A", "name B", "name C", "name D", "name E", "Maybe I stop here"];

const rand = (max: number, min: number = 0) => Math.random() * (max - min) + min;

const contractLength = [12, 24, 36, 48, 60, 72, 84, 96, 108, 120];

const status = ["live", "pending", "expired"];

let DATA_TEMPLATE = {
    id: () => Math.floor(rand(Math.floor(rand(1) * Date.now()))),
    supplier: () => (supplierList[Math.floor(rand(4))]),
    name: () => (randomNames.splice(
        Math.floor(rand(randomNames.length - 1)),
        1
    )[0]),
    rate: () => Math.floor(rand(1) * 100) / 100, //forced 2 decimals
    dailystandingcharge: () => Math.floor(rand(1) * 100) / 100, //forced 2 decimals
    contractlength: () => contractLength[Math.floor(rand(contractLength.length))],
    renewable: () => Math.floor(rand(100, 1)),
    status: () => status[Math.floor(rand(status.length))],
}


export { DATA_TEMPLATE, randomNames };