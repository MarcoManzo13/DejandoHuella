<template>
    <div style="border: solid red; min-width: 100%;">
        <v-row>
            <v-col cols="12">
                <v-card>
                    <v-card-title>
                        Chat con
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-card-text>
                        <v-list dense>
                            <v-subheader v-if="messages.length === 0">
                                Envía un mensaje...
                            </v-subheader>
                            <v-list-item v-for="(message, index) in messages" :key="index">
                                <v-list-item-content :class="message.sender === 'me' ? 'text-right' : ''">
                                    <v-list-item-title>
                                        {{ message.text }}
                                    </v-list-item-title>
                                    <v-list-item-subtitle>
                                        {{ message.time }}
                                    </v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </v-card-text>
                    <v-card-actions>
                        <v-text-field v-model="newMessage" label="Type your message..." outlined @keyup.enter="sendMessage" />
                        <v-btn color="primary" @click="sendMessage">
                            Send
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            messages: [],
            newMessage: ''
        };
    },
    methods: {
        sendMessage() {
            if (this.newMessage.trim() === '') return;
            this.messages.push({
                sender: 'me',
                text: this.newMessage,
                time: new Date().toLocaleTimeString()
            });
            // Simulating a reply from another user after a short delay
            setTimeout(() => {
                this.messages.push({
                    sender: 'other',
                    text: 'Hello! How can I help you?',
                    time: new Date().toLocaleTimeString()
                });
            }, 1000);
            this.newMessage = '';
        }
    }
};
</script>

<style>
.text-right {
    text-align: right;
}
</style>
