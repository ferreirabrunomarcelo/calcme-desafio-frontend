import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Pessoa } from '../model/Pessoa';

@Injectable({
    providedIn: 'root'
})

export class PessoaService {

    private apiUrl = 'http://localhost:8080/api/v1/pessoa'
    
    constructor(private httpClient: HttpClient) {}

    public savePessoa(pessoa: Pessoa)  {
        return this.httpClient.post<Pessoa>(this.apiUrl + "/save", pessoa).subscribe();
    }
}