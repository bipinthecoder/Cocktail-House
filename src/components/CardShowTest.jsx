import React, { Component } from "react";
import style from "./MainStyles.module.css";

class CardShowTest extends Component{
    constructor(props){
        super(props);
    }

    render(){
        console.log(this.props.card);
        const drinkName = this.props.card.strDrink;
        const url = this.props.card.strDrinkThumb;
        const descr = this.props.card.strCategory
        // const descr1 = this.props.card.strIngredient1
        const descr1 = this.props.card.strInstructions
        return(
            <>
              <div className={`card mb-3 ${style.shadow}`} style={{maxWidth:"600px"}}>
                    <div className="row no-gutters">
                        <div className="col-md-4">
                        <img src={url} className={`card-img h-100 ${style.imgAnime}`} alt="..."></img>
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h5 className={`card-title ${style.cardTitle}`}>{drinkName}</h5>
                            <p className={`card-text ${style.cardType}`}>{`(${descr})`}</p>
                            <p className="card-text"><small className="text-muted">{`"${descr1}"`}</small></p>
                        </div>
                        </div>
                    </div>
                </div>
                

            </>

        )
    }
}




export default CardShowTest;