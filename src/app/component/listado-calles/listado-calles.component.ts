import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Calles } from 'src/app/interfaces/calles';

const listaCalles: Calles[] = [
  { nombreOficial: "Las heras", alturaDesde: 50, alturaHasta: 2344, observaciones: 'callejero', usuarioCambio: 'Proceso Automatico'},
  { nombreOficial: "Caseros", alturaDesde: 18, alturaHasta: 2344, observaciones: 'Argentina', usuarioCambio: 'Proceso Automatico'},
  { nombreOficial: "Las piedras", alturaDesde: 20, alturaHasta: 2344, observaciones: 'casero', usuarioCambio: 'Proceso Automatico'},
  { nombreOficial: "San juan", alturaDesde: 50, alturaHasta: 2344, observaciones: 'callejero', usuarioCambio: 'Proceso Automatico'},
  { nombreOficial: "Jujuy", alturaDesde: 18, alturaHasta: 2344, observaciones: 'Argentina', usuarioCambio: 'Proceso Automatico'},
  { nombreOficial: "Jacinto Diaz", alturaDesde: 20, alturaHasta: 2344, observaciones: 'casero', usuarioCambio: 'Proceso Automatico'},
  { nombreOficial: "San Martin", alturaDesde: 50, alturaHasta: 2344, observaciones: 'callejero', usuarioCambio: 'Proceso Automatico'},
  { nombreOficial: "Carlos Casares", alturaDesde: 18, alturaHasta: 2344, observaciones: 'Argentina', usuarioCambio: 'Proceso Automatico'},
  { nombreOficial: "Calle Falsa", alturaDesde: 800, alturaHasta: 1500, observaciones: 'zona residencial', usuarioCambio: 'MockMaster3000' },
  { nombreOficial: "Avenida Ficticia", alturaDesde: 100, alturaHasta: 2000, observaciones: 'calle comercial', usuarioCambio: 'Mockatron' },
  { nombreOficial: "Calle de los Sueños", alturaDesde: 500, alturaHasta: 2500, observaciones: 'zona industrial', usuarioCambio: 'Mockerino' },
  { nombreOficial: "Avenida Imaginaria", alturaDesde: 200, alturaHasta: 1800, observaciones: 'calle principal', usuarioCambio: 'MockyMcMockface' },
  { nombreOficial: "Calle de la Fantasía", alturaDesde: 300, alturaHasta: 2100, observaciones: 'intersección con Calle Libertad', usuarioCambio: 'Mockingbird' },
  { nombreOficial: "Avenida Ilusión", alturaDesde: 1000, alturaHasta: 3000, observaciones: 'calle sin salida', usuarioCambio: 'Mockenstein' },
  { nombreOficial: "Calle de la Imaginación", alturaDesde: 700, alturaHasta: 2500, observaciones: 'área comercial', usuarioCambio: 'Mockito' },
  { nombreOficial: "Avenida de los Sueños", alturaDesde: 1500, alturaHasta: 2700, observaciones: 'calle peatonal', usuarioCambio: 'MockyMocker' },
  { nombreOficial: "Calle de la Ilusión", alturaDesde: 400, alturaHasta: 2200, observaciones: 'calle arbolada', usuarioCambio: 'The Mockmeister' },
  { nombreOficial: "Avenida de las Quimeras", alturaDesde: 600, alturaHasta: 2400, observaciones: 'calle principal del barrio', usuarioCambio: 'Mockingjay' },
  { nombreOficial: "Calle de los Engaños", alturaDesde: 900, alturaHasta: 1900, observaciones: 'zona residencial', usuarioCambio: 'Proceso Automatico' },
  { nombreOficial: "Avenida de los Ensueños", alturaDesde: 1200, alturaHasta: 2600, observaciones: 'zona de parques', usuarioCambio: 'Mocker' },
  { nombreOficial: "Calle de los Encantos", alturaDesde: 1300, alturaHasta: 2800, observaciones: 'calle con bancos', usuarioCambio: 'MockyMock' },
  { nombreOficial: "Avenida de las Fantasías", alturaDesde: 1400, alturaHasta: 2900, observaciones: 'área residencial exclusiva', usuarioCambio: 'Mockalicious' },
]

@Component({
  selector: 'app-listado-calles',
  templateUrl: './listado-calles.component.html',
  styleUrls: ['./listado-calles.component.scss'],
})

export class ListadoCallesComponent implements OnInit, AfterViewInit  {
  displayedColumns: string[] = ['nombreOficial', 'alturaDesde', 'alturaHasta', 'observaciones', 'usuarioCambio', 'buscar'];
  dataSource = new MatTableDataSource<Calles>(listaCalles);

  clearInput(value: any): void {
    value = '';
  }
 
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor() { }

  ngOnInit(): void {
  }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel = "Items por pagina"
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
