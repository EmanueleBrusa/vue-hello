const { createApp } = Vue; 

    createApp({
    
        data() {
            return {
                hello: '<h1>dormire è importante</h1>',
                image: 'https://images-ext-1.discordapp.net/external/80nGQ3_F9mc_lLPPDNlM5XzZNaaR_HmWyTNZlVz7DzU/https/picsum.photos/seed/picsum/200/300'
            };
        }
    }).mount('#app');