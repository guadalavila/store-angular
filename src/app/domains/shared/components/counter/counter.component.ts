import { CommonModule } from '@angular/common';
import { Component, Input, signal, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  @Input({ required: true }) duration = 0;

  @Input({ required: true }) message = '';

  counter = signal(0);
  counterRef: number | undefined;

  constructor() {
    //nada asincrono. para declarar variables
    // solo una vez
    console.log('constructor');
    console.log('_'.repeat(50));
  }

  ngOnInit() {
    // se ejecuta despues del render y solo una vez
    //asyncrono
    //peticiones http, inicializar variables
    console.log('ngOnInit');
    console.log('_'.repeat(50));
    // this.counterRef = window.setInterval(() => {
    //   console.log('run interval');
    //   this.counter.update((statePrev) => statePrev + 1);
    // }, 1000);
  }

  ngOnChanges(changes: SimpleChanges) {
    //se ejecuta antes y durante el render.. si cambia un valor se ejecuta
    //detecta cambios en las propiedades
    console.log('ngOnChanges');
    console.log('_'.repeat(50));
    console.log(changes);
    const duration = changes['duration'];
    if (duration) {
      this.doSomething();
    }
    console.log(duration);
  }

  ngAfterViewInit() {
    //despues del ngOnnit
    //despues del render y  para saber si los componentes hijos estan listo
    console.log('ngAfterViewInit');
    console.log('_'.repeat(50));
  }

  ngDestroy() {
    //se ejecuta cuando el componente se destruye
    //limpiar memoria
    console.log('ngDestroy');
    console.log('_'.repeat(50));
    window.clearInterval(this.counterRef);
  }

  doSomething() {
    console.log('duration cambio');
  }
}
