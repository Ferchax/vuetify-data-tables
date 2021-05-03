<template>
    <v-card class="mx-auto mt-5" max-width="900">
        <v-tabs>
            <v-tab>Item One</v-tab>
            <v-tab>Item Two</v-tab>
            <v-tab>Item Three</v-tab>        
            <v-tab-item>
                <form-1/>
            </v-tab-item>
            <v-tab-item>
                <form-2/>
            </v-tab-item>
            <v-tab-item>
                <form-3/>
            </v-tab-item>
        </v-tabs>
    </v-card>
</template>

<script>
import Form1 from './Form1.vue'
import Form2 from './Form2.vue'
import Form3 from './Form3.vue'

export default {
    components: {
        Form1,
        Form2,
        Form3
    }
}
</script>

<style lang="scss" scoped>

</style>
