import { Component } from '@angular/core';
import item from 'src/assets/json/CargaView.json'
import TipoDeDocumentos from 'src/assets/json/TipoDeDocumentos.json'

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.css']
})
export class CargaComponent  {

carga:any = item;

documentos: any = TipoDeDocumentos;

}
