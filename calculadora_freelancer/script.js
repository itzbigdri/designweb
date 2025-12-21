document.addEventListener('alpine:init', () => {
    Alpine.store('sistema', {
        servicos: [],
        nome: '',
        valor: '',
        addServico() {
            this.servicos.push({
                id: Date.now(),
                nome: this.nome,
                valor: parseInt(this.valor)
            })

            this.nome = ''
            this.valor = ''
        },
        get total() {
            let total = 0
            
            if (this.servicos.length === 0){
                return 0
            }

            this.servicos.forEach(element => {
                total += element.valor
            });

            return total
        }
    })
})