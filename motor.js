var array=[];
array[
    //hombres
    {tipoNomina:A,fechaPrimeroEmpleo:'12-06-2022',genero:"m",monto:100},
    {tipoNomina:A,fechaPrimeroEmpleo:'12-06-2022',genero:"m",monto:400},
    {tipoNomina:A,fechaPrimeroEmpleo:'12-06-2022',genero:"m",monto:900},
    {tipoNomina:A,fechaPrimeroEmpleo:'12-06-2022',genero:"m",monto:100},
    {tipoNomina:A,fechaPrimeroEmpleo:'12-06-2022',genero:"m",monto:600},

    {tipoNomina:B,fechaPrimeroEmpleo:'30-12-1993',genero:"m",monto:1000},
    {tipoNomina:B,fechaPrimeroEmpleo:'30-12-1993',genero:"m",monto:600},
    {tipoNomina:B,fechaPrimeroEmpleo:'30-12-1993',genero:"m",monto:1000},
    {tipoNomina:B,fechaPrimeroEmpleo:'30-12-1993',genero:"m",monto:1000},
    {tipoNomina:B,fechaPrimeroEmpleo:'30-12-1993',genero:"m",monto:1000},


    //{tipoNomina:B,fechaPrimeroEmpleo:,genero:,monto:},
    {tipoNomina:C,fechaPrimeroEmpleo:'19-09-2020',genero:"m",monto:400},
    {tipoNomina:C,fechaPrimeroEmpleo:'19-09-2020',genero:"m",monto:200},
    {tipoNomina:C,fechaPrimeroEmpleo:'19-09-2020',genero:"m",monto:200},
    {tipoNomina:C,fechaPrimeroEmpleo:'19-09-2020',genero:"m",monto:1000},
    {tipoNomina:C,fechaPrimeroEmpleo:'19-09-2020',genero:"m",monto:600},

    {tipoNomina:D,fechaPrimeroEmpleo:'15-01-2019',genero:"m",monto:400},
    {tipoNomina:D,fechaPrimeroEmpleo:'15-01-2019',genero:"m",monto:300},
    {tipoNomina:D,fechaPrimeroEmpleo:'15-01-2019',genero:"m",monto:500},
    {tipoNomina:D,fechaPrimeroEmpleo:'15-01-2019',genero:"m",monto:900},
    {tipoNomina:D,fechaPrimeroEmpleo:'15-01-2019',genero:"m",monto:1000},
    
    //mujeres
    {tipoNomina:A,fechaPrimeroEmpleo:'12-06-2022',genero:"f",monto:800},
    {tipoNomina:A,fechaPrimeroEmpleo:'12-06-2022',genero:"f",monto:800},
    {tipoNomina:A,fechaPrimeroEmpleo:'12-06-2022',genero:"f",monto:800},
    {tipoNomina:A,fechaPrimeroEmpleo:'12-06-2022',genero:"f",monto:600},
    {tipoNomina:A,fechaPrimeroEmpleo:'12-06-2022',genero:"f",monto:200},

    {tipoNomina:B,fechaPrimeroEmpleo:'30-12-1993',genero:"f",monto:800},
    {tipoNomina:B,fechaPrimeroEmpleo:'30-12-1993',genero:"f",monto:700},
    {tipoNomina:B,fechaPrimeroEmpleo:'30-12-1993',genero:"f",monto:100},
    {tipoNomina:B,fechaPrimeroEmpleo:'30-12-1993',genero:"f",monto:600},
    {tipoNomina:B,fechaPrimeroEmpleo:'30-12-1993',genero:"f",monto:700},

    {tipoNomina:C,fechaPrimeroEmpleo:'19-09-2020',genero:"f",monto:200},
    {tipoNomina:C,fechaPrimeroEmpleo:'19-09-2020',genero:"f",monto:900},
    {tipoNomina:C,fechaPrimeroEmpleo:'19-09-2020',genero:"f",monto:700},
    {tipoNomina:C,fechaPrimeroEmpleo:'19-09-2020',genero:"f",monto:800},
    {tipoNomina:C,fechaPrimeroEmpleo:'19-09-2020',genero:"f",monto:100},

    {tipoNomina:D,fechaPrimeroEmpleo:'15-01-2019',genero:"f",monto:500},
    {tipoNomina:D,fechaPrimeroEmpleo:'15-01-2019',genero:"f",monto:1000},
    {tipoNomina:D,fechaPrimeroEmpleo:'15-01-2019',genero:"f",monto:600},
    {tipoNomina:D,fechaPrimeroEmpleo:'15-01-2019',genero:"f",monto:400},
    {tipoNomina:D,fechaPrimeroEmpleo:'15-01-2019',genero:"f",monto:700}
]
function calculoMotor(tipoNomina="",fechaPrimeroEmpleo='19-06-2024', genero=""){
    var montoMinimo=Math.min(array.monto);
    var montoMaximo=Math.max(array.monto);
    var p1=montoMinimo+Math.sqrt(montoMaximo-montoMinimo);
    var p2=montoMinimo+0.0175*(montoMaximo-montoMinimo);
    recomendacionLinea=Math.max(p1,p2);
    return {montoMinimo, montoMaximo, recomendacionLinea};
}