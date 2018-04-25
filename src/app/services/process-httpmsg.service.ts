import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';

@Injectable()
export class ProcessHttpmsgService {

  constructor() { }

  public extractData(res: Response) {
    // tslint:disable-next-line:prefer-const
    let body = res.json();

    return body || { };
  }
}
