import { HttpParams } from '@angular/common/http';
import { StringHelper } from './string.helper';

export class HttpHelper {

  public static getPaginatorParams(searchTerm: string, pageIndex: number = 0, pageSize: number = 10): HttpParams {

    let params = new HttpParams();
    
    if (searchTerm)
      params = params.append('searchTerm', searchTerm);

    params = params.append('pageIndex', pageIndex.toString());
    params = params.append('pageSize', pageSize.toString());
    
    return params;
  }
}
