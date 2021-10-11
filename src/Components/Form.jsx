import React from 'react';
import styled from 'styled-components';
import { jsPDF } from "jspdf";
import 'jspdf-autotable'
import logo from '../logoCanet.png';
import logoBlanco from '../logoCanetBlanco.png';
export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
            cliente: '',
            item: '',
            unidades: '',
            valor: '',
            totalUnidades: 0,
            totalPresupuesto: 0,
            items: []
        }
        this.pdfGenerateor = this.pdfGenerateor.bind(this);
        this.agregarItem = this.agregarItem.bind(this);
        this.controlarPosicionFooter = this.controlarPosicionFooter.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    componentDidMount() {
       /*
        let aux = [];
        for (let i = 0; i < 5; i++) {
            aux.push({
                nombre: 'Item de madera laqueada n3' + i,
                unidades: 100,
                valor: 10
            });
        }
        this.setState({ items: [...aux],totalPresupuesto: 5000,totalUnidades:500});
*/
    }

    deleteItem(event) {
        event.preventDefault();
        
        let itemToDeleteName = event.target.itemName.value;
        let actualItems = [...this.state.items];
        let indiceAeliminar;
        let unidadesARestar = 0;
        for (var i = 0; i < actualItems.length; i++) {          
            if (actualItems[i].nombre === itemToDeleteName) {
                console.log('Item found!');
                console.log(actualItems[i]);
                indiceAeliminar = i;
                unidadesARestar = actualItems[i].unidades;

            }
        }
        console.log('Deleting index : ' + indiceAeliminar);
        actualItems.splice(indiceAeliminar, 1);
      
        let nuevaCantidadDeUnidades = parseInt(this.state.totalUnidades) - parseInt(unidadesARestar);
          console.log('Nueva unidades : '+nuevaCantidadDeUnidades);
        this.setState({ items: [...actualItems], totalUnidades: nuevaCantidadDeUnidades });
        
    }

    pdfGenerateor() {

        var doc = new jsPDF('landscape');
        var positionYTotal = 70;
        var today = new Date();
        let newBody = [];
        let montoTotal = 0;
        var img = new Image();
        img.src = logoBlanco;
       

        var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
        doc.text(20, 20, 'Mauro Canet realizaciones : 2234-261271');
        doc.text(20, 30, 'E-mail : mcrealizaciones@gmail.com');

        doc.text(20, 40, 'Dirigido a : ' + this.state.cliente);
        doc.text(160, 20, date);
        doc.text(160, 30, 'Mar del plata');
        doc.autoTable({ html: '#my-table' })
        doc.addImage(img, 'png', 220, 10, 60, 35)
        this.state.items.map((item) => {

            let itemTabla = [item.nombre, item.unidades, '$'+item.valor];
            newBody.push(itemTabla);
            montoTotal = montoTotal + (item.unidades * item.valor);
            positionYTotal += 8;

            return null;
        });
        //let footer = ['TOTAL','200','$25000'];
        //newBody.push(footer);

        doc.autoTable({
            headerStyles: { fontStyle: 'bold', textColor: 20, fillColor: [255, 248, 83] },
            startY: 50,
            head: [['Item', 'Cantidad', 'Valor']],
            body: [...newBody]//[['David', 'david@example.com', 'Sweden'],['Castille', 'castille@example.com', 'Spain'],],

        })

        this.controlarPosicionFooter(doc, montoTotal, positionYTotal);


        doc.save('Presupuesto ' + this.state.cliente + '.pdf');
    }

    controlarPosicionFooter(doc, montoTotal, positionYTotal) {
        let rowsInSecondPage = this.state.items.length - 12;
        let footerMsg = 'Presupuesto válido por 7 días, para la realización del trabajo es necesaria una seña del 50% del presupuesto.';
        if (this.state.items.length < 17) {
            doc.text(15, positionYTotal, 'Total : $' + montoTotal);
            doc.text(15, positionYTotal + 10, footerMsg);
        }
        if (this.state.items.length === 17) {
            console.log('In condition 2');
            doc.text(15, positionYTotal - 8, 'Total : $' + montoTotal);
            doc.text(15, positionYTotal + 2, footerMsg);

        }
        if (this.state.items.length === 18) {
            console.log('In condition 2');
            doc.text(15, positionYTotal - 12, 'Total : $' + montoTotal);
            doc.addPage();
            doc.setPage(2);
            doc.text(15, rowsInSecondPage + 2, footerMsg);

        }

        if (this.state.items.length >= 19) {
            console.log('In condition 1');

            doc.setPage(2);
            doc.text(15, rowsInSecondPage * 7, 'Total : $' + montoTotal);
            doc.text(15, (rowsInSecondPage * 7) + 10, footerMsg);

        }


    }

    agregarItem() {
        if (this.state.item) {
            let item = {
                nombre: this.state.item,
                unidades: this.state.unidades,
                valor: this.state.valor
            }
            let totalUnidades = parseInt(this.state.totalUnidades) + parseInt(item.unidades);
            let totalPresupuesto = parseFloat(this.state.totalPresupuesto) + (parseFloat(item.valor) * parseInt(item.unidades));
            let newItems = [...this.state.items];
            newItems.push(item);

            this.setState({
                items : [...newItems],
                totalPresupuesto: totalPresupuesto,
                totalUnidades: totalUnidades,
                item: '',
                valor: '',
                unidades: ''
            })
            /*
            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(item),
                    totalPresupuesto: totalPresupuesto,
                    totalUnidades: totalUnidades,
                    item: '',
                    valor: '',
                    unidades: ''

                };
            });*/
        }
    }

    getTotalPresupuesto(){
        let montoTotal = 0;
        this.state.items.map((item) => {           
            montoTotal = montoTotal + (item.unidades * item.valor);
            return null;
        });

        return montoTotal;
    }
    render() {
        let totalP = this.getTotalPresupuesto();
        return (
            <MyForm>
                <img className="img" src={logo} alt="logo" />
                <div className="container">

                    <h1 className="label">Cotizador</h1>
                    <table className="dataTable">
                        <tbody>
                            <tr>
                                <th>Cliente : </th>
                                <th><input type="text" value={this.state.cliente} onChange={(event) => { this.setState({ cliente: event.target.value }) }} ></input></th>
                            </tr>
                            <tr>
                                <th>Item : </th>
                                <th><input type="text" value={this.state.item} onChange={(event) => { this.setState({ item: event.target.value }) }} ></input></th>
                            </tr>
                            <tr>
                                <th>Unidades : </th>
                                <th><input type="number" value={this.state.unidades} onChange={(event) => { this.setState({ unidades: event.target.value }) }} ></input></th>
                            </tr>
                            <tr>
                                <th>Valor : </th>
                                <th><input type="number" value={this.state.valor} onChange={(event) => { this.setState({ valor: event.target.value }) }} ></input></th>
                            </tr>
                        </tbody>
                    </table>

                    <button className="addButton" onClick={this.agregarItem}>Agregar</button>
                </div>

                <table id="customers">
                    <thead>
                        <tr>
                            <th className="itemName">Item</th>
                            <th >Cantidad</th>
                            <th >Valor</th>
                        </tr>
                    </thead>

                    <tbody>

                        {this.state.items.map((item) => {
                            return (
                                
                                    <tr className="row" key={item.name}>                                        
                                        <td className="itemName"><form onSubmit={this.deleteItem}> <button className="deleteButton" type="submit">{item.nombre}</button><input hidden="true" name="itemName" value={item.nombre} /></form></td>
                                        <td >{item.unidades}</td>
                                        <td >${item.valor}</td>                                   
                                    </tr>                               
                            )
                        })}
                        <tr>
                            <td className="totales">Totales : </td>
                            <td className="totales">{this.state.totalUnidades}</td>
                            <td className="precioTotal">${totalP}</td>
                        </tr>
                    </tbody>



                </table>

                <button className="printPdf" onClick={this.pdfGenerateor} >Descargar PDF</button>
            </MyForm>
        );
    }
}

const MyForm = styled.div`
    text-align: center;
    
   
    min-height: 40rem;
    min-width: 100%;
    max-width: 10rem;
    border-radius: 3rem;
.row{
    font-weight:bold;
}
    .inputName{
        text-align: center;
        font-size: calc(8px + 2vmin);
        background-color: #7398b6;
        border: 0px solid #7398b6;
    }
   button{
    background-color: rgb(255,249,80);
    
   }
   .deleteButton{
       width: 100%;
       height:100%;
       background-color: #7398b6;
       border-color: #7398b6;
       padding: 0;
       border: none;
       background: none;
       font-weight:bold;
   }
    .img{
        width: 100%;
        height: 18rem;
        position:relative;
        
    }
    .totales{
        font-weight: bold;
    }
    .precioTotal{
        color: green;
        font-weight: bold;
    }
   
    .label{
        color:white;        
    }
    .input{
        border-radius:2rem;
        
    }
    table{
        width: 100%;
    }
   
      tbody{
          width:100%;
       
      }
      
     
      .itemName{
          overflow: hidden;
          color: red;
          border: 1px solid #dddddd;
          text-align: center;
          padding: 8px;
          max-width: 10rem;
          font-weight:bold;
          
         
      }
      .addButton{
          margin-top: 2rem;
          margin-bottom: 2rem;
          border: 2px solid black;
          border-radius: 2rem;
          height:3rem;
          width: 50%;
      }

      .printPdf{
        margin-top: 2rem;
        margin-bottom: 2rem;
        border: 2px solid black;
        border-radius: 2rem;
        height:3rem;
        width: 50%;
      }

      #customers {
        font-family: Arial, Helvetica, sans-serif;
        border-collapse: collapse;
        width: 100%;
      }
      
      #customers td, #customers th {
        border: 1px solid #ddd;
        padding: 8px;
        
      }
      
    
      
      #customers tr:hover {background-color: #ddd;}
      
      #customers th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: center;
        background-color: black;
        color: white;
      }

      @media (min-width: 48em) {
      
        .img{
            width: 40%;          
            position:relative;
            
        }
        .dataTable{
            max-width:25rem;
         
            margin: 0 auto;
        }
     
    `;











