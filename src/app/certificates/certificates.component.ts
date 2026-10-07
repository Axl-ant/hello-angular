import { Component } from '@angular/core';
import { CertificatesService } from '../services/certificates-service/certificates.service';
@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.css'
})
export class CertificatesComponent {

	constructor(public certificatesService: CertificatesService)
	{
	  console.log(this.certificatesService);
	}
}
