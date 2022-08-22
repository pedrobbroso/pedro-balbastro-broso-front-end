import { Router, ActivatedRoute } from '@angular/router';
import { Livro } from './../../models/livro';
import { LivroService } from './../../services/livro/livro.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

declare function blur(evento: any): any;

@Component({
  selector: 'app-cadastrar-livro',
  templateUrl: './cadastrar-livro.component.html',
  styleUrls: ['./cadastrar-livro.component.css'],
  preserveWhitespaces: true,
})
export class CadastrarLivroComponent implements OnInit {
  livroForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private livroService: LivroService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.livroForm = this.formBuilder.group({
      titulo: ['', [Validators.required, Validators.maxLength(200)]],
      anoLancamento: ['', [Validators.required, Validators.maxLength(4)]],
      autoresIds: ['', [Validators.required]],
    });
  }

  cadastraLivro() {
    if (this.livroForm.valid) {
      const livro = this.livroForm.getRawValue() as Livro;

      this.livroService.criaLivro(livro).subscribe({
        next: (resposta) => {
          alert('Livro criado com sucesso!');
          this.livroForm.reset();
        },
        error: (erro) => {
          alert('Erro ao cadastrar livro!');
        },
      });
    } else {
      alert('Preencha o formulário corretamente!');
    }
  }

  cancelar() {
    this.router.navigate(['lista-livros']);
  }
}
