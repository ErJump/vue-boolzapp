const app = new Vue({
    el: '#root',
    data: {
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent',
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent',
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received',
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent',
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: '_5',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: '_6',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: '_7',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: '_8',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Murdoc Niccals',
                avatar: '_9',
                visible: true,
                messages: [
                    {
                        date: '9/01/2020 14:30:50',
                        message: 'Stripping for cash is yet another of my many talents',
                        status: 'received'
                    },
                    {
                        date: '9/01/2020 14:31:10',
                        message: 'Really?',
                        status: 'sent'
                    },
                    {
                        date: '9/01/2020 14:31:55',
                        message: 'Yes',
                        status: 'received'
                    },
                    {
                        date: '9/01/2020 14:32:30',
                        message: "You know, success doesn't bring happiness. Only material stuff like money, cars and iPods can do that. And I've already got all that. So I have to find other ways to amuse myself.",
                        status: 'received'
                    },
                    {
                        date: '9/01/2020 14:32:40',
                        message: "Ahahahahahahahah",
                        status: 'sent'
                    },
                ],
            },
        ],
        user : {
            name: 'Jump',
            avatar: '_io',
        },
        activeIndex: 0,
        newMessage: '',
        searchValue:'',
        repliesList: [
            'Scusa, ora non ti posso rispondere',
            '???',
            'Non ho capito',
            'On Cracker Island it was born',
            "I'm a scary gargoyle on a tower",
        ],
        toggle: {contactIndex : null, messageIndex: null},
        contactIsReplying: false,
        userIsWriting: false,
        emojiList: ['😀', '😂', '😍', '😊', '😁', '😆', '😇', '😉', '😌', '😘', '😚', '😋', '😜', '😝', '😛', '😳', '😁', '😂', '😃', '😄', '😅', '😆', '😇', '😈', '😉', '😊', '😋', '😌', '😍', '😎', '😏', '😐', '😑', '😒', '😓', '😔', '😕', '😖', '😗', '😘', '😙', '😚', '😛', '😜', '😝', '😞', '😟', '😠', '😡', '😢', '😣', '😤', '😥', '😦', '😧', '😨', '😩', '😪', '😫', '😬', '😭', '😮', '😯', '😰', '😱', '😲', '😳', '😴', '😵', '😶', '😷'],
        emojiMenu: false,
    },
    methods: {
        //rende active index = all'indice clickato
        setActiveIndex: function(index) {
            this.activeIndex = index;
            this.resetToggle();
        },
        //completa il path per l'avatar
        completeImgPath: function(img) {
            return 'img/avatar' + img + '.jpg';
        },
        //aggiunge un messaggio alla chat
        pushNewUserMessage: function(message) {
            const messageTrim = message.trim();
            if(messageTrim != '') {
                this.contacts[this.activeIndex].messages.push({
                    date: new Date().toLocaleString(),
                    message: message,
                    status: 'sent',
                    newUserMessageValue: true,
                });
            };
            this.newMessage = '';
            this.emojiMenu = false;
        },
        //restituisce l'orario dalla data senza secondi
        getTimeFromDate: function (date) {
            if (date != null) {
                const tempArray = date.split(" ");
                const timeSplitted = tempArray[1].split(':');
                const time = timeSplitted[0] + ':' + timeSplitted[1];
                return time;
            } else {
                return ''
            }
        },
        //restituisce la data senza orario
        getDateFromDate: function (date) {
            if (date != null) {
                const tempArray = date.split(" ");
                return tempArray[0];
            } else {
                return ''
            }
        },
        //restituisce un numero randomico tra 0 e la lunghezza del array
        getRandomNumberWithArrayLength: function(array) {
            return Math.floor(Math.random() * array.length);
        },      
        //il contact risponde al messaggio dell'utente
        replyToMessage: function(message) {
            const randomValue = this.getRandomNumberWithArrayLength(this.repliesList);
            if(message.newUserMessageValue == true){
                this.contacts[this.activeIndex].messages.push({
                    date: new Date().toLocaleString(),
                    message: this.repliesList[randomValue],
                    status: 'received',
                    newUserMessageValue: false,
                }); 
            };
        },
        //mette un delay al reply message
        setDelayReply: function(message) {
            this.contactIsReplying = true;
            setTimeout(() => {
                this.replyToMessage(message);
                this.contactIsReplying = false;
            }, 1000);
        }, 
        //cerca un contatto
        searchContact: function(searchValue) {
            this.contacts.forEach(contact => {
                if(contact.name.toLowerCase().includes(searchValue.toLowerCase())) {
                    contact.visible = true;
                } else {
                    contact.visible = false;
                }
            });
        },
        //cambia il toggle attivo
        interactToggleMenu: function(index) {
            if(this.contacts[this.activeIndex].messages[0].status != 'default'){
                this.toggle = {contactIndex : this.activeIndex, messageIndex: index};
            }
        },
        //verifica che il toggle sia attivo
        isToggleActive : function(index) {
            return this.toggle.contactIndex == this.activeIndex && this.toggle.messageIndex == index;
        },
        //resetta il toggle
        resetToggle: function() {
            this.toggle = {contactIndex : null, messageIndex: null};
        },
        //cancella il messaggio selezionato
        delMessage: function(index) {
            if(this.contacts[this.activeIndex].messages.length != 1) {
            this.contacts[this.activeIndex].messages.splice(index, 1);
            } else {
                this.contacts[this.activeIndex].messages = [{
                    date: null,
                    message: "Scrivi  un messaggio per iniziare la chat",
                    status: 'default'
                }];
            }
            this.resetToggle();
        },
        //controlla se l'utente sta scrivendo
        isUserWriting: function() {
            if(this.newMessage.length > 0) {
                this.userIsWriting = true;
            } else {
                this.userIsWriting = false;
            }
        },
        //sposta il contatto in cima alla lista dei contatti
        moveContactToTop: function() {
            const tempContact = this.contacts[this.activeIndex];
            this.contacts.splice(this.activeIndex, 1);
            this.contacts.unshift(tempContact);
            this.activeIndex = 0;
        },
        //verifica la posizione dell'ultimo messaggio del contatto nella chat attiva
        getLastContactMessageIndex: function(array) {
            for (let i = array.length - 1; i >= 0; i--) {
                if(array[i].status == 'received') {
                    return i;
                }
            }
            return -1;
        },
        //verifica la posizione dell'ultimo messaggio dell'utente nella chat attiva
        getLastUserMessageIndex: function(array) {
            for (let i = array.length - 1; i >= 0; i--){
                if(array[i].status == 'sent') {
                    return i;
                }
            }
            return -1;
        },
        //cambia il booleano di emojiMenu
        emojiMenuStatusSwitch: function() {
            this.emojiMenu = !this.emojiMenu;
        },
        //aggiunge l'emoji al newMessage
        addEmojiToNewMessage: function(emoji) {
            this.newMessage += emoji;
        },
        //rimuove il messaggio di default
        delDefaultMessage: function (array){
            if (array[this.activeIndex].messages[0].status == 'default'){
                array[this.activeIndex].messages.splice(0,1);
            }
        },
    },
});

