import { PlatformLocation } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.scss'],
})
export class InstructionComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: PlatformLocation,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    const token = this.route.snapshot.paramMap.get('token');
    if (token === 'error') {
      this.router.navigate(['/error']);
    }
    this.apiService.tokenAuth(token).subscribe(
      flag => {
        if (!flag) {
          this.router.navigate(['/error'])
        }
      }
    );
  }

}
