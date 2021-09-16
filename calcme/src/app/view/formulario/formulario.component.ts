import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { Pessoa } from 'src/app/model/Pessoa';
import { PessoaService } from 'src/app/service/PessoaService';
import {MatSnackBar} from '@angular/material/snack-bar';



@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  private pessoa!: Pessoa;
  formulario!: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder, private pessoaService: PessoaService, private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.pattern(".*\\S.*[a-zA-z0-9 ]")]],
      email: [null, [Validators.required, Validators.email]],
      telefone: [null, [Validators.required, Validators.pattern('[()0-9]+'), Validators.maxLength(11), Validators.minLength(11)]]
    });
    
  }

  savePessoa(formDirective: FormGroupDirective) {
    this.pessoa = this.formulario.value;
    
    this.pessoaService.savePessoa(this.pessoa);
    
    formDirective.resetForm();
    this.formulario.reset();
    this._snackBar.open("Cadastro realizado com sucesso.", '',{
      duration: 2000
    });
  
  }

}
