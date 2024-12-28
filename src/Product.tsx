import { products } from "./data"
import { Iproduct } from "./Datamodels"


interface ProdeuctProps{
    product:Iproduct
}

export function Product(props:ProdeuctProps){

 return(
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignSelf:"center"}} >
            <img style={{width:100,alignSelf:"center"}} src={props.product.image} alt={props.product.title} />
            <p style={{alignSelf:"center"}}> {props.product.title}</p>
            <span style={{alignSelf:"center"}}>{props.product.description}</span>
        </div>
    )
}