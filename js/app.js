var chatComponent = Vue.extend({
    template: `
        <style type="text/css" scoped>
            div{ color: red;}
        
            .chat {
                    padding: 0;
            }
    
            .chat li {
                margin-bottom: 10px;
                padding-bottom: 10px;
            }
    
            .chat li.left .chat-body {
                margin-left: 70px;
            }
    
            .chat li.right .chat-body {
                text-align: right;
                margin-right: 70px;
            }
    
            .panel-body {
                overflow-y: scroll;
                height: 400px;
            }
        </style>
        
        <div class="panel panel-primary">
            <div class="panel-heading">Chat</div>
            <div class="panel-body">
                <ul class="chat list-unstyled">
                    <li class="clearfix"
                        v-bind:class="{left: !isUser(o.email), right: isUser(o.email)}" v-for="o in chat.messages">
                        <span v-bind:class="{'pull-left': !isUser(o.email), 'pull-right': isUser(o.email)}">
                            <img src="{{ o.photo }}" class="img-circle" alt="">
                        </span>
                        <div class="chat-body">
                            <strong>{{ o.name }}</strong>
                            <p>{{ o.text }}</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="panel-footer">
                <div class="input-group">
                    <input type="text" class="form-control imput-md" placeholder="digite a sua mensagem" />
                    <span class="input-group-btn">
                        <button class="btn btn-success btn-md">Enviar</button>
                    </span>
                </div>
            </div>
         </div> 
    `,
    data: function() {
        return {
            user: {
                email: 'argentinaraphael@gmail.com',
                neme: 'Raphael'
            },

            chat: {
                messages: [
                    {
                        email: "fulano@gmail.com",
                        text: "Olá, eu sou o Fulano, como vcê está?",
                        name: "Fulano",
                        photo: "http://placehold.it/50/000FFF/fff&text=00"

                    },

                    {
                        email: "argentinaraphael@gmail.com",
                        text: "Estou jóia, meu nome é Raphael",
                        name: "Raphael",
                        photo: "http://placehold.it/50/777FFF/000&text=EU"

                    },
                    {
                        email: "fulano@gmail.com",
                        text: "Em qual cidade você mora?",
                        name: "Raphael",
                        photo: "http://placehold.it/50/777FFF/000&text=EU"

                    }
                ]
            }
        };
    },
    methods: {
        isUser: function (email) {
            return this.user.email == email;
        }
    }
});

var roomsComponent = Vue.extend({
    template: `
    <div class="col-md-4" v-for="o in rooms">
        <div class="panel panel-primary">
            <div class="panel-heading text-center">
                {{ o.name }}
            </div>
            <div class="panel-body text-center">
                {{ o.description }}
                <p><a href="javascript:void(0)" v-on:click="goToChat">Entrar</a></p>
            </div>
        </div>
    </div>
    `,
    data:function(){
        return {
            rooms: [
                {id: "001", name: "PHP", description: "Entusiasta do PHP"},
                {id: "002", name: "Java", description: "Developer experts"},
                {id: "003", name: "C#", description: "Os caras do C#"},
                {id: "004", name: "C++", description: "Fissurados por programação"},
                {id: "005", name: "Javascript", description: "Olha a web aí!"},
                {id: "006", name: "Vue.js", description: "Chat dos caras do data-binding"}
            ]
        };
    },
    methods: {
        goToChat: function(){
            this.$router.router.go('/chat')
            // console.log('teste');
        }
    }
});

var appComponent = Vue.extend({});

var router = new VueRouter();

router.map({
    '/chat': {
        component: chatComponent
    },
    '/rooms': {
        component: roomsComponent
    }
});

router.start(appComponent,"#app");