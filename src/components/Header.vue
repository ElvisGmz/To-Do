<template>
    <nav class="w-full px-4 sm:px-6 md:px-8 py-4 flex flex-col items-center border-b border-dashed border-gray-400">
        <div class="w-full max-w-screen-md text-xl flex items-center justify-between text-pink-500">
            <span>
                <span v-if="userName !== ''">Hello</span> 
                <input class="font-medium px-1 outline-none w-40" maxlength="16" :placeholder="'Write your name here'" v-model="userName" />
            </span>
            <span>
                <button class="bg-blue-400 hover:bg-blue-500 transition-all duration-300 text-base px-4 py-2.5 text-white rounded-md border-dashed" @click="addItem">
                    + New
                </button>
            </span>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'Header',
        data() {
            return {
                userName: '',
            }
        },
        methods: {
            addItem() {
                this.$emit('add', this.userName)
            }
        },
        mounted() {
            this.userName = localStorage.getItem('userName') || ''
        },
        watch: {
            modelValue(value) {
                localStorage.setItem('userName', value)
            },
            userName(value) {
                localStorage.setItem('userName', value)
            }
        },
    }
</script>