import { Product } from "./Product";
import {products} from './data'
export function MainSayt(){
    return(
        <section>
            <Product product={products[0]}/>
            <Product product={products[1]}/>
            <Product product={products[2]}/>
        </section>
    )
}