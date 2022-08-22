import { EditarLivroComponent } from './livros/editar-livro/editar-livro.component';
import { CadastrarLivroComponent } from './livros/cadastrar-livro/cadastrar-livro.component';
import { ListarLivrosComponent } from './livros/listar-livros/listar-livros.component';
import { EditarAutorComponent } from './autor/editar-autor/editar-autor.component';
import { CadastrarAutorComponent } from './autor/cadastrar-autor/cadastrar-autor.component';
import { ListarAutorComponent } from './autor/listar-autor/listar-autor.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'lista-autores',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'lista-autores',
    component: ListarAutorComponent,
  },
  {
    path: 'cadastra-autor',
    component: CadastrarAutorComponent,
  },
  {
    path: 'edita-autor/:autorId',
    component: EditarAutorComponent,
  },
  {
    path: 'lista-livros',
    component: ListarLivrosComponent,
  },
  {
    path: 'cadastra-livro',
    component: CadastrarLivroComponent,
  },
  {
    path: 'edita-livro/:livroId',
    component: EditarLivroComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
