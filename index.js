//Importar libreria para generar pdfs a treves de plantillas
const pdf = require('html-pdf');
const generarPDF = () => {
    //Se va a guadar el html
    const contenido = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <style>
    
      * {
        font-family: Arial, sans-serif;
      }

      .container {
        display: flex;
        width: 100%;
      }



      .column {
        height: auto;
        flex: 1;
      }
      
      .column-1 {
        background-color: #3B3838;
        color: white;
        border-top: 1px solid black;
        border-bottom: 0px solid black;
        border-left: 1px solid black;
        border-right: 1px solid black;
        padding-top: 10px;
        padding-left: 15px;
        padding-bottom: 10px;
        padding-right: 10px;
        font-weight: 600;
        font-size: 12px;
      }
      
      .column-2 {
        background-color: #D9D9D9;
        text-align: center;
        font-size: 9px; 
        padding-left: 20px;
        padding-right: 20px;
        border: 1px solid black;
        font-weight: 400;
        padding-top: 10px;
        padding-bottom: 10px;
      }

      .tituloysub{
        font-size: 10px; 
        text-align: center; 
        line-height: 0px;
      }

      .segundatablablanca{
        border-color: #A6A6A6; 
        font-size: 8px; 
        text-align: center; 
        line-height: 3px; 
        background-color: #FFFFFF; 
      }

      .segundatablablanca2{
        border-color: #A6A6A6; 
        font-size: 8px; 
        text-align: center; 
        line-height: 3px; 
        background-color: #D9D9D9; 
      }
       
      .seccionIyII {
        font-size: 9px; 
        text-align: center; 
        line-height: 3px; 
        background-color: #D9D9D9; 
        border-color: #A6A6A6;
      }



      .fondbordseccI{
        background-color: #FFFFFF; 
        border-color: #A6A6A6;
      }

      .trestitulosSeccionII{
        background-color: #ffffff; 
        border-color: #A6A6A6; 
        padding-left: 0px; 
        padding-right: 0px; 
        text-align: center; 
        line-height: 4px;
      }

      .titulosseccionII{
        width: 10%; 
        background-color: #ffffff; 
        border-color: #A6A6A6; 
        padding-left: 0px; 
        padding-right: 0px; 
        text-align: center; 
        line-height: 8px;
      }

        .tresopciones{
          width: 10%; 
          background-color: #ffffff; 
          border-color: #A6A6A6; 
          padding-left: 0px; 
          padding-right: 0px; 
          padding-top: 0px;
        }
        

        .contenedortresopciones{
          height: 100%; 
          display: flex; 
          justify-content: 
          space-between; 
          align-items: center;
        }



      .primeraopcion{
          width: 100%; 
          background-color: white; 
          height: 33.33%; 
          border-bottom: 1px solid #A6A6A6; 
          padding-bottom: 0px;
      }

      .segundaopcion{
        width: 100%; 
        background-color: white; 
        height: 33.33%; 
        border-bottom: 1px solid #A6A6A6; 
        padding-top: 0px; 
        padding-bottom: 4px;
      }

     

      .terceraopcion{
        width: 100%; 
        background-color: white; 
        height: 33.33%; 
        padding-top: 0px; 
        padding-bottom: 0px; 
        margin-bottom: 0px; 
      }

      .margendospx{
        margin-left: 2px;
      }

      .margendospxsize{
        margin-left: 2px;
        font-size: 6px;
      }

      .paddingtrecepx{
        padding-left: 13px;
      }

      .paddingcincopx{
        padding-left: 5px;
      }

      .diseñocolumnahojados{
        font-size: 7px; 
        text-align: center; 
        line-height: 6px;
      }

      .bodytablahojauno{
        width: 100%; 
        background-color: #ffffff; 
        border-color: #A6A6A6;
      }

      .espaciotabladearriba{
        margin-top: 12px;
      }

      .primerparrafo{
        font-size: 5.5px; 
        font-weight: 600; 
        text-align: center; 
        line-height: 8px; 
        padding-top: 35px;
      }

  

      .tituloseccionII{
        font-size: 9px; 
        text-align: center; 
        line-height: 3px; 
        background-color: #D9D9D9; 
        border-color: #A6A6A6;
      }

      .seccionIIsubtitulos3{
        background-color: #ffffff; 
        border-color: #A6A6A6; 
        padding-left: 0px; 
        padding-right: 0px; 
        text-align: center; 
        line-height: 4px;
      }

      .temasseccionII{
        width: 12%; 
        background-color: #ffffff; 
        border-color: #A6A6A6; 
        padding-left: 0px; 
        padding-right: 0px; 
        text-align: center; 
        line-height: 8px;
      }

      .filaseccionII{
        font-size: 7px; 
        text-align: center; 
        line-height: 6px;
      }

      .casillaenblancoseccionIII{
        width: 12%; 
        background-color: #ffffff; 
        border-color: #A6A6A6; 
        padding-left: 0px; 
        padding-right: 0px;
      }

      .contenedortresopcionesseccionIII{
        width: 12%; 
        background-color: #ffffff; 
        border-color: #A6A6A6; 
        padding-left: 0px; 
        padding-right: 0px; 
        padding-top: 0px;
      }

      .tresopcionesseccionIII{
        height: 100%; 
        display: flex; 
        justify-content: space-between; 
        align-items: center;
      }

      .casillascirculos{
        width: 10%; 
        background-color: #ffffff; 
        border-color: #A6A6A6; 
        padding-left: 0px; 
        padding-right: 0px; 
        text-align: center; 
        line-height: 8px;
      }

      .tituloseccionIV{
        font-size: 9px; 
        text-align: center; 
        line-height: 3px; 
        background-color: #D9D9D9; 
        border-color: #A6A6A6;
      }

      .opcionesseccionIV{
        background-color: #ffffff; 
        border-color: #A6A6A6; 
        padding-left: 0px; 
        padding-right: 0px; 
        text-align: center; 
        line-height: 4px;
      }

      .filasseccionIV{
        font-size: 8px; 
        text-align: center; 
        line-height: 4px;
      }

      .casillascirculostexto{
        width: 70%; 
        background-color: #ffffff; 
        border-color: #A6A6A6; 
        padding-left: 0px; 
        padding-right: 0px; 
        text-align: start; 
        line-height: 8px; 
        padding-left: 5px;
      }

      .firmasynombre{
        width: 50%; 
        height: 45px; 
        background-color: #ffffff; 
        border-color: #A6A6A6; 
        padding-left: 0px; 
        padding-right: 0px; 
        text-align: center; 
        line-height: 8px;
      }

      .filafirmasynombre{
        font-size: 7px; 
        text-align: center; 
        line-height: 6px;
      }

      .parrafodos{
        font-size: 8px; 
        font-weight: 400; 
        text-align: justify; 
        line-height: 10px;
      }

      .interlineadodiezpx{
        line-height: 10px;
      }

      .interlineadoochopx{
        line-height: 8px;
      }

      .container2 {
        width: 100%;
        overflow: auto;
      }

      .seccion1{
        float: left;
        width: 49%; 
      }
      .seccion2{
        float: right;
        width: 49%;
        
        text-align: center;
      }
      
      table {
        border-collapse: collapse;
        width: 100%;
      }
  
      th {
        border: 1px solid black;
        padding: 8px;
        text-align: left;
      }

      td {
        border: 1px solid black;
        padding: 8px;
        text-align: left;
        height: 0px;
      }
  
      th {
        background-color: #ddd;
      }
  
      tr:nth-child(even) {
        background-color: #f2f2f2;
      }

      
      .container3 {
        position: absolute;
        display: flex;
        height: 80px; /* altura del 100% del viewport */
        width: 100%; /* ancho del 100% del viewport */

      }
      
      .tablacompleta {
        page-break-inside: avoid;
      }

      .seccion1columnrelleno{
        text-align: center; 
        line-height: 7px; 
        background-color: #FFFFFF; 
        border-color: #A6A6A6; 
        font-size: 7px; 
        padding: 8px 0px 8px 0px;
      }

      .seccion2columnrelleno{
        text-align: center; 
        line-height: 7px; 
        background-color: #FFFFFF; 
        border-color: #A6A6A6; 
        font-size: 7px; 
        padding: 8px 0px 8px 0px;
      }

      .seccion3columnrelleno{
        text-align: center; 
        line-height: 7px; 
        background-color: #FFFFFF; 
        border-color: #A6A6A6; 
        font-size: 7px; 
        padding: 6px 0px 6px 0px;
      }

      </style>
    


      <title>Document</title>
    </head>

    


  <body >

  

    <div> <!----------------------------------Hoja 1 ----------------------->

    <div class="container">
        <div class="column column-1">gob<span style="color: red;">.</span>mx </div>
        <div class="column column-2"> Agencia Nacional de Seguridad Industrial y de Protección al Medio Ambiente del Sector Hidrocarburos
        Unidad de Gestión Industrial</div>
    </div>
 
    <div class="container">
        <h2 class="tituloysub" style=" padding-top: 5px; font-weight: 400; " >Anexo I</h2>
    
        <p class="tituloysub" style="  padding-top: 0px; padding-bottom: 3px; line-height: 11px;" >Formato metas y acciones del PPCIEM</p>
        </div>
    
    <div class="container2 ">
       <div class="seccion1"> 
       <table class="tablacompleta">
       <tr>
         <td class="segundatablablanca2">Homoclave del formato</td>
       </tr>
       <tr>
         <td class="segundatablablanca">FF-ASEA-029</td>
       </tr>
       <tr>
         <td class="segundatablablanca2" >Lugar de elaboración</td>
       </tr>
       <tr>
         <td class="segundatablablanca"> Hola </td>
       </tr>
     </table>
       </div>

       <div class="seccion2"> 
       <table class="tablacompleta">
       <tr>
         <td class="segundatablablanca2" >Fecha de publicación del formato en el DOF</th>
       </tr>
       <tr>
         <td class="segundatablablanca"> 06 11 2018</td>
       </tr>
       <tr>
         <td class="segundatablablanca2" >Fecha de elaboración</td>
       </tr>
       <tr ">
         <td class="segundatablablanca">DD MM AAAA</td>
       </tr>
     </table>
    </div>

    
    
    <div class="container2">
    <div class="espaciotabladearriba"> 
        <table class="tablacompleta" style="width: 100%; ">
            <tr>
                <td colspan="10" style="font-size: 9px; text-align: center; line-height: 3px; background-color: #D9D9D9; border-color: #A6A6A6;">Sección I. Datos generales</td>
            </tr>
            <tr style="width: 100%; ">
                <td style="width: 10%;" class="seccion1columnrelleno" >CURR</td>
                <td style="width: 23%;" class="seccion1columnrelleno" ></td>
                <td style="width: 10%;" class="seccion1columnrelleno" >Nombre de la instalación</td>
                <td style="width: 23%;" class="seccion1columnrelleno" ></td>
                <td style="width: 11%;" class="seccion1columnrelleno" >Ubicación de la instalación</td>
                <td style="width: 23%;" class="seccion1columnrelleno" ></td>
                </tr>
        </table>
    </div>
</div>




<div class="container2">
    <div class="espaciotabladearriba"> 
        <table class="tablacompleta" style="width: 100%; ">
            <tr>
                <td colspan="10" style="font-size: 9px; text-align: center; line-height: 3px; background-color: #D9D9D9; border-color: #A6A6A6;">Sección II. Metas</td>
            </tr>
            <tr style="width: 100%; ">
                <td style=" width: 16%;" class="seccion2columnrelleno" >Meta integral de reducción con respecto al Año base (porcentaje)</td>
                <td style=" width: 14%;" class="seccion2columnrelleno" >Meta de reducción anual del 1er año (porcentaje)</td>
                <td style=" width: 14%;" class="seccion2columnrelleno" >Meta de reducción anual del 2do año (porcentaje)</td>
                <td style=" width: 14%;" class="seccion2columnrelleno" >Meta de reducción del 3er año (porcentaje)</td>
                <td style=" width: 14%;" class="seccion2columnrelleno" >Meta de reducción del 4to año (porcentaje)</td>
                <td style=" width: 14%;" class="seccion2columnrelleno" >Meta de reducción del 5to año (porcentaje)</td>
                <td style=" width: 14%;" class="seccion2columnrelleno" >Meta de reducción del 6to año (porcentaje)</td>
              
            </tr>

            <tr style="width: 100%; ">
                <td style=" width: 16%;" class="seccion2columnrelleno" >Instrumento de detección y/o medición</td>
                <td style=" width: 14%;" class="seccion2columnrelleno" ></td>
                <td style=" width: 14%;" class="seccion2columnrelleno" ></td>
                <td style=" width: 14%;" class="seccion2columnrelleno" ></td>
                <td style=" width: 14%;" class="seccion2columnrelleno" ></td>
                <td style=" width: 14%;" class="seccion2columnrelleno" ></td>
                <td style=" width: 14%;" class="seccion2columnrelleno" ></td>
                
            </tr>
            
        </table>
    </div>
</div>
    

<div class="container2">
    <div class="espaciotabladearriba"> 
        <table class="tablacompleta" style="width: 100%; ">
            <tr>
                <td colspan="10" style="font-size: 9px; text-align: center; line-height: 3px; background-color: #D9D9D9; border-color: #A6A6A6;">Sección III. Acciones programadas</td>
            </tr>
            <tr style="width: 100%; ">
                <td style="width: 12%;" class="seccion3columnrelleno" >Id del pozo, equipo o Componente</td>
                <td style="width: 12%;" class="seccion3columnrelleno" >Tipo de pozo, equipo o Componente</td>
                <td style="width: 12%;" class="seccion3columnrelleno" >Acciones para el 1er año</td>
                <td style="width: 12%;" class="seccion3columnrelleno" >Acciones para el 2do año</td>
                <td style="width: 13%;" class="seccion3columnrelleno" >Acciones para el 3er año</td>
                <td style="width: 13%;" class="seccion3columnrelleno" >Acciones para el 4to año</td>
                <td style="width: 13%;" class="seccion3columnrelleno" >Acciones para el 5to año</td>
                <td style="width: 13%;" class="seccion3columnrelleno" >Accionnes para el 6to año</td>            
              </tr>

            <tr style="width: 100%; ">
                <td style="width: 12%;" class="seccion3columnrelleno" >Metodología de estimación</td>
                <td style="width: 12%;" class="seccion3columnrelleno" ></td>
                <td style="width: 12%;" class="seccion3columnrelleno" ></td>
                <td style="width: 12%;" class="seccion3columnrelleno" ></td>
                <td style="width: 13%;" class="seccion3columnrelleno" ></td>
                <td style="width: 13%;" class="seccion3columnrelleno" ></td>
                <td style="width: 13%;" class="seccion3columnrelleno" ></td>
                <td style="width: 13%;" class="seccion3columnrelleno" ></td>
            </tr>

            <tr style="width: 100%; ">
                <td style="width: 12%;" class="seccion3columnrelleno">Metodología de estimación</td>
                <td style="width: 12%;" class="seccion3columnrelleno"></td>
                <td style="width: 12%;" class="seccion3columnrelleno"></td>
                <td style="width: 12%;" class="seccion3columnrelleno"></td>
                <td style="width: 13%;" class="seccion3columnrelleno"></td>
                <td style="width: 13%;" class="seccion3columnrelleno"></td>
                <td style="width: 13%;" class="seccion3columnrelleno"></td>
                <td style="width: 13%;" class="seccion3columnrelleno"></td>
            </tr>

            
            
        </table>
    </div>
</div>

   
  
  </div> <!----------------------------------Hoja 1 Fin ----------------------->

  <div> <!----------------------------------Hoja 2  -------------------------->


  

  

  <table class="tablacompleta espaciotabladearriba" >
    <thead >
      <tr>
        <td colspan="4" class="tituloseccionIV" >SecciónIV. Documentos anexos al formato</td>
      </tr>
      <tr class="filasseccionIV">
        <td class="opcionesseccionIV" >Si</td>
        <td class="opcionesseccionIV" >No</td>
        <td class="opcionesseccionIV" >No aplica</td>
        <td style="background-color: #ffffff; border-color: #A6A6A6; padding-left: 0px; padding-right: 0px; text-align: start; line-height: 4px; padding-left: 5px;">Documento</td>
      </tr>
    </thead>
    <tbody id="tabla-body" style="width: 100%; background-color: #ffffff; border-color: #A6A6A6; padding: ">
      <tr class="filasseccionIV" >
        <td class="casillascirculos"> <label class="margendospx" ><input type="radio"  name="estado"></label></td>
        <td class="casillascirculos"> <label class="margendospx" ><input type="radio"  name="estado"></label></td>
        <td class="casillascirculos"> <label class="margendospx" ><input type="radio"  name="estado"></label></td>
        <td class="casillascirculostexto" style="line-height: 10px;" >Justificación técnica pormenorizada solicitada en el articulo 27 de las presentes Disposiciones.</td>
      </tr>
     
      

      
      <!-- Agrega más filas aquí -->
    </tbody>
  </table>


  <table class="tablacompleta espaciotabladearriba" >
    <thead >
      <tr>
        <td  class="seccionIyII" >Nombre del responsable técnico</td>
        <td  class="seccionIyII" >Firma del responsable técnico</td>
      </tr>
    </thead>
    <tbody id="tabla-body" style="width: 100%; background-color: #ffffff; border-color: #A6A6A6; padding: ">
      <tr class="filafirmasynombre" >
        <td class="firmasynombre"> <label class="margendospx"> </td>
        <td class="firmasynombre"> <label class="margendospx"> </td>
      </tr>
      
      <!-- Agrega más filas aquí -->
    </tbody>
  </table>

  <div>
    <p class="parrafodos"> Los datos personales recabados para la atención de su trámite serán protegidos, incorporados y tratados, con fundamento en el artículo  15 de la 
    LFPA, Lo anterior en cumplimiento del décimo séptimo de los lineamientos de protección de datos personales publicados en el Diario Oficial de la 
    Federación el 30 de septiembre de 2005.
     </p>
  <div>

  <div class="container">
        <p class="primerparrafo" >De conformidad con el artículo 4 de la Ley Federal de Procedimiento Administrativo, los formatos para solicitar trámites y servicios deberán publicarse en el Diario Oficial de la
        Federación (DOF).</p>
    </div>

  </div> <!----------------------------------Hoja 2 Fin ----------------------->

  <div> <!----------------------------------Hoja 3 --------------------------->


  <table class="tablacompleta espaciotabladearriba" >
    <thead >
      <tr>
        <td class="seccionIyII" >Instructivo para el llenado del formato Anexo I </td>
      </tr>
    </thead>
    <tbody id="tabla-body" style="width: 100%; font-size: 8px; background-color: #ffffff; border-color: #A6A6A6;  ">
      <tr style="filasseccionIV" >
        <td style="width: 100%; height: 45px; background-color: #ffffff; border-color: #A6A6A6; padding-left: 0px; padding-right: 0px; line-height: 7px;">  
        
        <p class="text-align: start;  padding: 0px; margin: 0px; line-height: 0px; left: 2%;"> <strong><span style=" color: transparent;">---</span>Indicaciones generales</strong><p>
          <ol type="a" style="font-size: 8px;> 
            <li class="interlineadodiezpx">Esta solicitud deberá ser llenada en computadora. 
            <li class="interlineadodiezpx">Esta solicitud deberá presentarse a la Agencia en medios físicos, magnéticos o electrónicos.
          </ol>

        <div style=" position: relative; width: 100%;">
        <p class="text-align: start; left: 2%;"> <strong><span style=" color: transparent;">---</span>Información requerida en el formato</strong><p>
        <div>
        <ol type="i" start="1" >
          <li>Sección I: Datos generales</li>
          <ol type="a" style=" padding-top: 5px; padding-bottom: 7px;  ">
                <li class="interlineadodiezpx" >Escribir la Clave Única de Registro del Regulado.</li>
                <li class="interlineadodiezpx" >Escribir el nombre de la instalación.</li>
                <li class="interlineadodiezpx" >Escribir la ubicación de la instalación: Domicilio y coordenadas geográficas en UTM (archivos shape file).</li>
            </ol>
          <li>Sección II: Metas</li>
          <ol type="a" style=" padding-top: 5px; padding-bottom: 7px; ">
                <li class="interlineadodiezpx" >Escribir la meta integral de reducción con respecto al Año base para la instalación como un porcentaje, de acuerdo con los establecido en el artículo 26 de las personas Disposiciones. </li>
                <li class="interlineadodiezpx" >Escribir para los siguientes seis años calendario la meta de reducción de la instalación con respecto al Año base como un porcentaje, de acuerdo con lo establecido en el articulo 26 de las presentes Disposiciones.</li>
                </ol>
          <li>Sección III: Acciones programadas
            <ol type="a" style=" padding-top: 5px; padding-bottom: 0px; ">
                <li class="interlineadodiezpx" >Se deberá llenar una fila por cada pozo, equipo o Componente.</li>
                <li class="interlineadodiezpx" >En caso de programar más de una acción por año calendario por cada pozo, equipo o Componente se deberá llenar una fila por cada acción a implementar del Titulo Tercero de las presentes Disposiciones o cada acción equivalente o superior</li>
                <li class="interlineadodiezpx" >Anotar el id del pozo, equipo o Componente.</li>
                <li class="interlineadodiezpx" >Indicar el tipo de pozo, equipo o Componente de acuerdo con lo establecido en el articulo 13, fraccion I: o fraccion II, incisos b), d) y g) de las presentes Disposiciones. </li>
                <li class="interlineadodiezpx" >Indicar las acciones del Titulo Tercero de las presentes Disposiciones, o acciones equivalentes o superiores, que se realizarán por año calendario durannte los siguientes seis años.</li>
            </ol>
          </li>
          <li>Sección IV: Documentos anexos al formato
            <ol type="a" style=" padding-top: 5px; padding-bottom: 0px; ">
                <li class="interlineadodiezpx" >Adjuntar la justificación técnica pormenorizada solicitada en el articulo 27 de las presentes Disposiciones.</li>
            </ol>
          </li>
        </ol>        
        </td>
      </tr>
      <!-- Agrega más filas aquí -->
    </tbody>
  </table>

  
  
  </div> <!----------------------------------Hoja 3 Fin ----------------------->

  


 
   
  <!--Footer 1--> 
  <div style=" width:100%; height: auto; bottom: 0; background-color: #D9D9D9; border-top: 1px solid #767171; margin-top: 12px;" >
  <div style="width:22%; height: auto; display:inline-block; left:0; vertical-align: middle;  "> <img src="https://i.imgur.com/09HeOR0.png" width="100px" height="auto" style="padding-left: 18px; padding-bottom: 15px;" > </div>
  <div style="width:11%; height: auto; display:inline-block; left:20%; vertical-align: middle; "> <img src="https://i.imgur.com/Kz7xzj7.png" width="60px" height="auto"  style="padding-bottom: 11px;"> </div>
  <div style="width:11%; height: auto; display:inline-block; left:40%; vertical-align: middle; "> <img src="https://i.imgur.com/mp2K5fP.png" width="60px" height="auto"  style="padding-bottom: 15px;"> </div>
  <div style="width:12%; height: auto; display:inline-block; left:60%; vertical-align: middle;  "> <img src="https://i.imgur.com/Ws1Ngrd.png" width="60px" height="auto" style="padding-bottom: 15px;" > </div>
  <div style="width:39%; height: auto; display:inline-block; left:80%;"> 
      <p style=" line-height: 0px; padding: 0px; padding-top: 10px; margin: 0px; font-size: 8px; font-weight: 600; ">Contacto: </p>  
      <p style=" line-height: 9px; font-size: 7px; padding-right: 50px; "> Boulevard Adolfo Ruiz Cortines No. 4209,
      Colonia Jardines en la Montaña, C.P. 14210,
      Delegación Tlalpan, Ciudad de México,
      Teléfono (+52.55) 9126-0100</p>
  </div>


  </body>
  
  </html>
    `;

    const opciones = {
        "format": "A4", //A3, A4, A5, Legal, Letter 
        "orientation": "portrait",
        "border": {
            "top": ".8cm",
            "right": ".6cm",
            "bottom": ".6cm",
            "left": ".6cm",
        },
        childProcessOptions : {
          env : {
            OPENSSL_CONF : '/dev/null' ,
          } ,
        }
    }

    const directorio = "./public/files/constancia.pdf";

    pdf.create(contenido, opciones).toFile(directorio, function (err, res) {
        if (err) {
            console.log(err);
        } else {
            console.log('archivo creado');
        }
    });
}

generarPDF();