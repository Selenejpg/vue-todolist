/*
MILESTONE 1
Stampare all'interno di una lista, un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
*/ 

var app = new Vue (
    {
        el: "#root",
        data: {
            //Ogni todo sarà un oggetto, formato da due proprietà:
            //- text, una stringa che indica il testo del todo
            //- done, un booleano (true/false) che indica se il todo è stato fatto oppure no

            newToDo: '',
            todos: [
                {
                  text: 'Fare la spesa',  
                  done: false
                },
                {
                    text: 'Annaffiare le piante',  
                    done: false
                },
                {
                    text: 'Pulire la cucina',  
                    done: false
                }       
            ]
        },
        methods:{
            removeToDo: function (toDoIndex) {
                this.todos.splice(toDoIndex, 1)
            },
            addToDo: function () {
                let objToDo = {
                    text: this.newToDo,
                    done: false,
                }
                if (!this.newToDo == '' ) {
                    this.todos.push(objToDo);
                    this.newToDo = ''
                }
            },
            done: function (element) {
                if (element.done == true) {
                    element.done = false
                } else {
                    element.done = true
                }
            }
        }
    }
)