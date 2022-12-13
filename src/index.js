import React from 'react';
import ReactDOM from 'react-dom/client';
// class Muestra{
//     constructor(number){
//         this.number=number
//     }
//     powNumber(){
//         return Math.pow(this.number,3)
//     }
// }
// const muestra= new Muestra(4)
function Ejecutor(){
    let myClass='bg-warning text-center'
    const palabra=<div className={myClass}>Estoy probando React</div>
    return palabra
}
const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <Ejecutor/>
    </div>
)