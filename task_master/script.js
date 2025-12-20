document.addEventListener('alpine:init', () => {
    Alpine.store('sistema', {
        visibilidade: 'todas',
        texto: '',
        tarefas: [
            {
                id: 1,
                nome: 'Limpar a casa',
                status: false
            }
        ],

        criarTarefa() {
            this.tarefas.push({
                id: Date.now(),
                nome: this.texto,
                status: false
            })

            this.texto = ''
        },

        deletarTarefa(id) {
            this.tarefas = this.tarefas.filter(tarefa => tarefa.id !== id)
        },

        get qtdPendentes(){
            return this.tarefas.filter(tarefa => tarefa.status === false).length
        },

        get filtrarTarefas() {
            if (this.visibilidade === 'pendentes'){
                return this.tarefas.filter(tarefa => tarefa.status === false)
            } else if (this.visibilidade === 'feitas'){
                return this.tarefas.filter(tarefa => tarefa.status === true)
            } 
            
            return this.tarefas
        }
    })
})