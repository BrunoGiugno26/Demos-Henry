const {calcularTotal} = require("../index");
const mockGetItems = jest.fn(() =>{
    
        //Realmente aca vamos a buscar datos de una BDD
        return[
            {name:"Producto A",price:10,quantity:2},
            {name:"Producto B",price:5,quantity:3},
        ];
    });

//quiero asegurarme de que cuando calcularTotal se ejecuta... la cb que le envio se ejucte tambien

describe("En la funcion calcularTotal",() =>{
    it("La funcion que paso como parametro debe ejecutarse al menos una vez",()=>{
        calcularTotal(mockGetItems);
        expect(mockGetItems).toHaveBeenCalled();
    });
});