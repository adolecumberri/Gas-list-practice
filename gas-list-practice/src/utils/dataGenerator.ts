import { IProduct } from "../interface/products";
import { DATA_TEMPLATE } from "./data";

const generateProducts: (x: number) => IProduct[] = (number) => {
    let solution: IProduct[] = [];

    let newProduct: any;
    
    for (let i = 0; i < number; i++) {

        let keys = Object.keys(DATA_TEMPLATE);
        // itero por keys, añadiendo valores IProduct a newProduct
        keys.forEach((key) => {
            newProduct[key] = DATA_TEMPLATE[key];
        });

        solution.push(newProduct as IProduct);
    }

    return solution;
}


export { generateProducts };