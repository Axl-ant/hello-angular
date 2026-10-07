import { Component } from '@angular/core';
import { HeaderService } from '../services/header-service/header.service';
import { Header } from '../models/header/header.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

        header: Header = new Header();
	constructor (public headerService: HeaderService) 
	{ 
	  console.log(this.headerService);
	  this.headerService.getHeader().snapshotChanges().pipe(
	    map(changes =>
		changes.map(c =>
		   ({ id: c.payload.doc.id, ...c.payload.doc.data() })
		)
	    )
	  ).subscribe(data => {
	    this.header = data[0];
	    console.log(this.header);
	    });
	}
}
