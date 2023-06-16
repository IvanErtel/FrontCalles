import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Calles } from 'src/app/interfaces/calles';

const listaCalles: Calles[] = [
  { nombreOficial: "Las heras", alturaDesde: 50, alturaHasta: 2344, observaciones: 'callejero', usuarioCambio: 'Proceso Automatico'},
  { nombreOficial: "Las heras", alturaDesde: 18, alturaHasta: 2344, observaciones: 'Argentina', usuarioCambio: 'Proceso Automatico'},
  { nombreOficial: "Las heras", alturaDesde: 20, alturaHasta: 2344, observaciones: 'casero', usuarioCambio: 'Proceso Automatico'},
  { nombreOficial: "Las heras", alturaDesde: 50, alturaHasta: 2344, observaciones: 'callejero', usuarioCambio: 'Proceso Automatico'},
  { nombreOficial: "Las heras", alturaDesde: 18, alturaHasta: 2344, observaciones: 'Argentina', usuarioCambio: 'Proceso Automatico'},
  { nombreOficial: "Las heras", alturaDesde: 20, alturaHasta: 2344, observaciones: 'casero', usuarioCambio: 'Proceso Automatico'},
  { nombreOficial: "Las heras", alturaDesde: 50, alturaHasta: 2344, observaciones: 'callejero', usuarioCambio: 'Proceso Automatico'},
  { nombreOficial: "Las heras", alturaDesde: 18, alturaHasta: 2344, observaciones: 'Argentina', usuarioCambio: 'Proceso Automatico'},
  { nombreOficial: "Las heras", alturaDesde: 20, alturaHasta: 2344, observaciones: 'casero', usuarioCambio: 'Proceso Automatico'},
  { nombreOficial: "Las heras", alturaDesde: 50, alturaHasta: 2344, observaciones: 'callejero', usuarioCambio: 'Proceso Automatico'},
  { nombreOficial: "Las heras", alturaDesde: 18, alturaHasta: 2344, observaciones: 'Argentina', usuarioCambio: 'Proceso Automatico'},
  { nombreOficial: "Las heras", alturaDesde: 20, alturaHasta: 2344, observaciones: 'casero', usuarioCambio: 'Proceso Automatico'},
  { nombreOficial: "Las heras", alturaDesde: 50, alturaHasta: 2344, observaciones: 'callejero', usuarioCambio: 'Proceso Automatico'},
  { nombreOficial: "Las heras", alturaDesde: 18, alturaHasta: 2344, observaciones: 'Argentina', usuarioCambio: 'Proceso Automatico'},
  { nombreOficial: "Las heras", alturaDesde: 20, alturaHasta: 2344, observaciones: 'casero', usuarioCambio: 'Proceso Automatico'},
  { nombreOficial: "Las heras", alturaDesde: 50, alturaHasta: 2344, observaciones: 'callejero', usuarioCambio: 'Proceso Automatico'},
  { nombreOficial: "Las heras", alturaDesde: 18, alturaHasta: 2344, observaciones: 'Argentina', usuarioCambio: 'Proceso Automatico'},
  { nombreOficial: "Las heras", alturaDesde: 20, alturaHasta: 2344, observaciones: 'casero', usuarioCambio: 'Proceso Automatico'},
];
@Component({
  selector: 'app-listado-calles',
  templateUrl: './listado-calles.component.html',
  styleUrls: ['./listado-calles.component.scss'],
})

export class ListadoCallesComponent implements OnInit, AfterViewInit  {
  displayedColumns: string[] = ['nombreOficial', 'alturaDesde', 'alturaHasta', 'observaciones', 'usuarioCambio'];
  dataSource = new MatTableDataSource<Calles>(listaCalles);

  clearInput(value: any): void {
    value = '';
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  constructor() { }

  ngOnInit(): void {
  }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
