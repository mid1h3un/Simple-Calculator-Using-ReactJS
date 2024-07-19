import React, {useState} from "react"
function Calc(){
    const [String,setValue]=useState("")
    const onHandle=(e)=>{
        if(String!="Error"&&String!="Infinity"){
            setValue(String.concat(e.target.value))}
        }
    const Cancel=()=>{
        setValue("")
    }
    const Backspace=(e)=>{
        if(String!="Error"&&String!="Infinity"){
        setValue(String.slice(0,String.length-Number(e.target.value)))}
    }
    const Calculate=()=>{
        if(String!="Error"&&String!="Infinity"){
        try {
            setValue(eval(String).toString())
        } catch (err) {
            setValue("Error")
        }}
    }
      return(
        <>
        <div className="con1">
            <div className="con2">
        <form>
        <input type="text" value={String}/>
        </form>
        <div className="keypad">
        <button onClick={Cancel} className="cancel">AC</button><button value="1" onClick={Backspace} className="C">C</button><button value="+" onClick={onHandle} className="operators">+</button>
        <button value="1" onClick={onHandle}>1</button><button value="2" onClick={onHandle}>2</button><button value="3" onClick={onHandle}>3</button><button value="-" onClick={onHandle} className="operators">&ndash;</button>
        <button value="4" onClick={onHandle}>4</button><button value="5" onClick={onHandle}>5</button><button value="6" onClick={onHandle}>6</button><button value="*" onClick={onHandle} className="operators">&times;</button>
        <button value="7" onClick={onHandle}>7</button><button value="8" onClick={onHandle}>8</button><button value="9" onClick={onHandle}>9</button><button value="/" onClick={onHandle} className="operators">&divide;</button>
        <button value="0" onClick={onHandle}>0</button> <button value="." onClick={onHandle} className="dot">.</button><button value="=" onClick={Calculate} className="equal">=</button>
        </div>
            </div>
        </div>
        </>
      )

}
export default Calc