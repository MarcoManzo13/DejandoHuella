<template>
    <div>
        <v-layout>
            <v-app-bar>
                <template v-slot:prepend>
                    <v-app-bar-nav-icon
                        v-if="isMobile"
                        variant="text"
                        @click.stop="drawer = !drawer"
                    />
                    <v-app-bar-title>
                        Dejando Huella
                    </v-app-bar-title>
                </template>
                <template v-slot:append>
                    <NuxtLink v-if="!isMobile" icon to="/">
                        <v-btn style="color: #000;" variant="plain" class="mx-2" prepend-icon="mdi-home-outline">
                            Inicio
                        </v-btn>
                    </NuxtLink>
                    <NuxtLink v-if="!isMobile" icon to="/Reporte">
                        <v-btn style="color: #000;" variant="plain" class="mx-2" prepend-icon="mdi-emoticon-sad-outline">
                            Perdidos
                        </v-btn>
                    </NuxtLink>
                    <NuxtLink v-if="!isMobile" icon to="/Encontrados">
                        <v-btn style="color: #000;" variant="plain" class="mx-2" prepend-icon="mdi-emoticon-happy-outline">
                            Avistamientos
                        </v-btn>
                    </NuxtLink>
                    <NuxtLink v-if="!isMobile" icon to="/Chat">
                        <v-btn style="color: #000;" variant="plain" class="mx-2" prepend-icon="mdi-chat-processing-outline">
                            Chat
                        </v-btn>
                    </NuxtLink>
                    <NuxtLink v-if="!isMobile" icon to="/PerfilUsuario">
                        <v-btn style="color: #000;" variant="plain" class="mx-2" prepend-icon="mdi-account-circle-outline">
                            Perfil
                        </v-btn>
                    </NuxtLink>
                </template>
            </v-app-bar>
            <v-navigation-drawer
                v-model="drawer"
                temporary
            >
                <template class="d-flex my-3" elevation="0">
                    <v-btn
                        variant="text"
                        @click="closeMenu"
                    >
                        <Icon name="mdi:close" size="2em"/>
                    </v-btn>
                </template>
                <v-divider></v-divider>
                <v-list dense nav>
                    <template v-for="item in menuItems" :key="item.title">
                        <NuxtLink :to="item.to" style="text-decoration: none; color: #000;">
                            <v-list-item :prepend-icon="item.icon" :title="item.title" :value="item.value" active-class="activeLink"/>
                        </NuxtLink>
                    </template>
                </v-list>
            </v-navigation-drawer>
            <v-main>
                <slot />
            </v-main>
        </v-layout>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                drawer: false,
                isMobile: false,
                menuItems: [
                    { to: "/", title: 'Inicio', icon: 'mdi-home-variant', value: 'inicio' },
                    { to: "/Reporte", title: 'Reporte', icon: 'mdi-emoticon-sad-outline', value: 'reporte' },
                    { to: "/Encontrados", title: 'Encontrados', icon: 'mdi-emoticon-happy-outline', value: 'encontrados' },
                    { to: "/Chat", title: 'Chat', icon: 'mdi-chat-processing-outline', value: 'chat' },
                    { to: "/PerfilUsuario", title: 'PerfilUsuario', icon: 'mdi-account-circle-outline', value: 'perfilUsuario' },
                ],
            }
        },
        mounted() {
            this.checkIsMobile();
            window.addEventListener('resize', this.checkIsMobile);
        },
        beforeDestroy() {
            window.removeEventListener('resize', this.checkIsMobile);
        },
        methods: {
            checkIsMobile() {
                this.isMobile = window.innerWidth <= 1280;
            },
            closeMenu() {
                this.drawer = !this.drawer;
            },
        },
    }
</script>

<style scoped>
</style>
