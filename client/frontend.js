import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

createApp({
    data() {
        return {
            form: {
                name: '',
                value: ''
            },
            contacts: [
                {id: 1, name: 'Vladilen', value: '+7-921-100-20-30', marked: false}
            ]
        };
    },
    methods: {
        createContact() {
            const {...contact} = this.form
            console.log(contact)

            this.contacts.push({...contact, id: Date.now(), marked: false})

            this.form.name = this.form.value = ''
        },
        markContact(id) {
            const contact = this.contacts.find(c => c.id === id)
            contact.marked = true
        },
        removeContact(id) {
            this.contacts = this.contacts.filter(c => c.id !== id)     
        }
    },
    computed: {
        canCreate() {
            return this.form.name && this.form.value
        }
    }
}).mount('#app');