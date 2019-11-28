import {EventEmitter, OnInit, Component} from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    this.ajustarAlturaImg();
  }



  rolarP(elem) {
    window.scroll({       // 1
        top: document
      .getElementById( elem )
        .offsetTop,       // 2
        left: 0,
        behavior: 'smooth'// 3
      });
  }


  ajustarAlturaImg() {
    const alturaJanela = window.innerHeight;
    const larguraJanela = window.innerWidth;
    if (larguraJanela > 575) {
    document.getElementById('img_princ').style['height'] = alturaJanela + 'px';
    document.getElementById('img_sec').style['max-height'] = alturaJanela + 'px';
    }
  }
}

