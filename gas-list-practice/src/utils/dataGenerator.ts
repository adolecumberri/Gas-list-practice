import { IProduct } from "../interface/products";
import { DATA_TEMPLATE } from "./data";

const generateProducts: (x: number) => IProduct[] = (number) => {
    let solution: IProduct[] = [];

    for (let i = 0; i < number; i++) {
        let newProduct: any = {};
        let keys = Object.keys(DATA_TEMPLATE);
        // itero por keys, añadiendo valores IProduct a newProduct
        console.log(DATA_TEMPLATE);
        keys.forEach((key) => {
            newProduct[key] = DATA_TEMPLATE[key as keyof typeof DATA_TEMPLATE]();
        });

        solution.push(newProduct as IProduct);
    }

    return solution;
}


export { generateProducts };