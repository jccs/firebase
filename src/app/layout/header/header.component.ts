import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  @Input() estaAutenticado: boolean;
  @Output() EmisorEvento: EventEmitter<any> = new EventEmitter();
  ngOnInit() {
  }
  salir() {
    this.EmisorEvento.emit();
  }

}
