import React, { Component } from "react";
import style from "./MainStyles.module.css";

class CardShow extends Component{
    constructor(props){
        super(props);
    }

    render(){
        console.log(this.props.card);
        const drinkName = this.props.card.strDrink;
        const url = this.props.card.strDrinkThumb;
        const descr = this.props.card.strCategory
        const descr1 = this.props.card.strIngredient1
        return(
            <div className={style.shadow}>
                <div className="card" style={{width:"18rem",border:"1px solid black",marginRight:12,marginBottom:20}}>
                    <img src={url} className="card-img-top" alt={`${drinkName} CockTail`}></img>
                    <div className="card-body">
                        <h5 className={`card-title ${style.cardTitle}`}>{drinkName}</h5>
                        <p className={`card-text ${style.cardType}`}>{`${descr}`}</p>
                        <p className={`card-text ${style.cardType}`}>{`Main Ingredient: ${descr1}`}</p>
                        <a href="#" className="btn btn-info">Read More--></a>
                    </div>
                </div>

            </div>

        )
    }
}




export default CardShow;