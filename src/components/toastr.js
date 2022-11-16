import toastr from 'toastr'

toastr.options = {
  "closeButton": true,
  "debug": false,
  "newestOnTop": false,
  "progressBar": true,
  "positionClass": "toast-top-right",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}

// função para receber os parâmetros mesagem, tipo e titulo
// e exibir uma mensagem personalizada apartir dos
// parâmetros passados para função
export function mostrarMensagem(titulo, mensagem, tipo) {
  toastr[tipo](mensagem, titulo)
}

// mensegem de erro
export function mensagemErro(mensagem) {
  mostrarMensagem('Erro', mensagem, 'erro')
}

// mensagem de sucesso
export function mensagemSucesso(mesagem) {
  mostrarMensagem('Sucesso', mesagem, 'success')
}

// mensegem de alarta
export function mesagemAlerta(mensagem) {
  mostrarMensagem('Alerta', mensagem, 'warning')
}


