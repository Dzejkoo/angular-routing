import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs-compat';

import { ServersService } from '../servers.service';



@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  paramsSub: Subscription

  constructor(private serversService: ServersService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.paramsSub = this.route.params.subscribe((params: Params)=>{
      this.server = this.serversService.getServer(+params['id'])
    })
  }
  ngOnDestroy(){
    this.paramsSub.unsubscribe();
  }


}
