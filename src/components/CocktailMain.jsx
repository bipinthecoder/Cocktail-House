import React, { Component } from "react";
import axios from "axios";
import style from "./MainStyles.module.css";
// import CardShow from "./CardShow.jsx"
import Pagination from "./Pagination.jsx";
import CardShowTest from "./CardShowTest.jsx";
import { v4 as uuidv4 } from 'uuid';
import Select from "./Select.jsx";
import Footer from "./Footer.jsx";



class CocktailMain extends Component{
    constructor(props){
        super(props)
        this.state = {
            value:0,
            data:[],
            currentId:null,
            activePage:1,
            query:"",
            categoryArray :[],
            concentrationArray: [],
            glassArray: [],
            IngredientArray: [],
            Concentration:"",
            Ingredients:"",
            Category:"",
            Glasses:"",
            select:""
        }
    }

    componentDidMount(){
        axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=g")
        .then(res => res.data.drinks)
        .then(res =>
            this.setState({
                data:res
        }));


        // axios.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list")
        // .then(res=>res.data.drinks)
        // .then(res =>{
        //     res.forEach((item)=> this.state.concentrationArray.push(item.strAlcoholic))
        // })


        // axios.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
        // .then(res=>res.data.drinks)
        // .then(res =>{
        //     res.forEach((item)=> this.state.categoryArray.push(item.strCategory))
        // })


        // axios.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list")
        // .then(res=>res.data.drinks)
        // .then(res =>{
        //     res.forEach((item)=> this.state.glassArray.push(item.strGlass))
        // })


        // axios.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list")
        // .then(res=>res.data.drinks)
        // .then(res =>{
        //     res.forEach((item)=> this.state.IngredientArray.push(item.strIngredient1))
        // })

        this.getCategoryList();
        this.getConcentrationList();
        this.getGlassList();
        this.getIngredientList();
    }

    getData = async(query)=>{
        console.log(`Inside`);
        await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.state.query}`)
        .then(res => res===null ? this.state.data :res.data.drinks)
        .then(res=>
            this.setState({
                data:res
            }))
        .catch(err=>alert("Not Found"));

        
       
    };

    getCategoryList = async()=>{
        await axios.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
        .then(res=>res.data.drinks)
        .then(res =>{
            res.forEach((item)=> this.state.categoryArray.push(item.strCategory))
        })
    }
    getConcentrationList = async()=>{
        await axios.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list")
        .then(res=>res.data.drinks)
        .then(res =>{
            res.forEach((item)=> this.state.concentrationArray.push(item.strAlcoholic))
        })
    }
    getGlassList = async()=>{
        await axios.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list")
        .then(res=>res.data.drinks)
        .then(res =>{
            res.forEach((item)=> this.state.glassArray.push(item.strGlass))
        })
    }
    getIngredientList = async()=>{
        await axios.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list")
        .then(res=>res.data.drinks)
        .then(res =>{
            res.forEach((item)=> this.state.IngredientArray.push(item.strIngredient1))
        })
    }



   paginate = (number)=>{
        this.setState({
            activePage:number
        })
   }

   submitAction=()=>{
       console.log("inside submit");
       this.getData(this.state.query);
   }

   handleInput = (e)=>{
       this.setState({
           query:e.target.value
       })
   }

   handleSelect = (e,string)=>{
       this.setState({
           [e.target.name]:e.target.value,
           [string]:e.target.value
       })
       console.log("string is",e.target.value);
   }

    render(){
        console.log("this.state is",this.state)
        let {data,categoryArray,concentrationArray,glassArray,IngredientArray} = this.state;
        // console.log(data);
        let perPage = 8;
        let activePage = this.state.activePage;
        const totalPosts = data != null? data.length:0

        return(
            <>  
                
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="#index.html">
                            <img src="https://static.thenounproject.com/png/1299503-200.png" width="30" height="30"
                                className="d-inline-block align-top" alt=""></img>
                            <span className="navbar-brand mb-0 h1">Cocktail House</span>
                        </a>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#index.html">ABOUT <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#index.html">CONTACT</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link" href="#index.html">PRESS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#index.html"  aria-disabled="true">RECIPES</a>
                            </li>
                            </ul>
                        </div>
                        
                    </nav>

                </div>
                <div className = {`${style.center}`}>
                    <p className={`display-4 ${style.quickSand}`}>Welcome to <br /> Cocktail House</p>
                    <small>(The ultimate place for your perfect Cocktail!!!)</small>
                </div>
                <hr></hr>

                <div className = {`container-fluid`}>
                    <div className="row">
                        <div className={`col-2 ${style.center} ${style.sideBar}`}>
                            <img src="https://www.thecocktaildb.com/images/ingredients/gin-Small.png" alt="plyMouth"></img>
                        </div>

                        <div className={`col-8 ${style.center}`}>
                            <div className={`text-center ${style.adobe}`}>"Enjoy our exquisite luxurious Cocktails while experiencing a breathtaking sunset over the Barnegat Bay. We take pride in our exceptional service, world-class views, and fresh and local fare prepared by our chefs and owner."</div>
                            <div className={`row ${style.searchDiv} mt-5`}>
                                <div className="col-2"></div>
                                <div className="col-8">
                                    <input className="form-control mr-sm-2 mt-5 text-center" type="search" placeholder="Anything you want" aria-label="Search"  style={{borderRadius:"50px"}} value={this.state.query} onChange={this.handleInput}></input>
                                    <p></p>
                                    <button className="btn btn-info my-2 my-sm-0" type="submit" onClick={this.submitAction}>Submit</button>
                                    <p></p>
                                
                                </div>
                                <div className="col-2"></div>
                                <div className="col-1"></div>
                                <div className={`${style.flexRow} text-center mx-auto col-10`}>
                                        <Select array={IngredientArray} selected="Ingredients" handler={this.handleSelect} val={this.state}/>
                                        <Select array ={concentrationArray} selected="Concentration" handler={this.handleSelect} val={this.state}/>
                                        <Select array={categoryArray} selected="Category" handler={this.handleSelect} val={this.state}/>
                                        <Select array={glassArray} selected="Glasses" handler={this.handleSelect} val={this.state}/>
                                </div>
                                <div className="col-1"></div>
                            </div>
                            <p></p>
                            <hr></hr>
                            <div>
                                <p className={style.quote}>" If you don't remember, it didn't happen - Vodka "</p>
                                <div className={`row ${style.resultsDiv} mt-5`} id="resultsDiv">
                                    <div className="col-1"></div>
                                    <div className="col-10">
                                   {   
                                       data !== null? 
                                       data.filter((item3,index)=>
                                           this.state.Glasses === "" || this.state.Glasses === "Glasses" ? item3 : item3.strGlass === this.state.Glasses
                                       )
                                       .filter((item4,index)=>
                                           this.state.Category === "" || this.state.Category === "Category" ? item4 : item4.strCategory === this.state.Category
                                       )
                                       .filter((item5,index)=>
                                           this.state.Concentration === "" || this.state.Concentration === "Concentration" ? item5 : item5.strAlcoholic === this.state.Concentration
                                       )
                                       .filter((item2,index)=>
                                           this.state.Ingredients === "" || this.state.Ingredients === "Ingredients" ? item2 : item2.strIngredient1 === this.state.Ingredients
                                       )
                                       .filter((item,index)=>
                                           index >= (activePage - 1)*perPage && index < activePage * perPage
                                       )
                                        .map(item=>(
                                            <>
                                            <CardShowTest card={item} key={uuidv4()}/>
                                            <hr/>
                                            </>
                                        ))
                                        : "No Results Found"
                                    }
                                    <div style={{padding:10}}>
                                        <Pagination perPage={perPage} totalPosts = {totalPosts} paginate={this.paginate} className="mx-auto"/>
                                    </div>

                                    </div>
                                    <div className="col-1"></div>
                                </div>
                            </div>

                        </div>
                            <hr/>                           
                        <div className={`col-2 ${style.center} ${style.sideBar}`}></div>     
                     </div>

                   


                </div>
                <p>{" "}</p>
                <hr/>
                <Footer/>
                    
            </>

        )
    }
}




export default CocktailMain;