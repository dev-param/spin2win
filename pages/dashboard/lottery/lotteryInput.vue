<template>

    <div ref="divEl" class="flex flex-wrap justify-center gap-2 items-center">
        <input v-for="al in aLength" v-model="v[al - 1]" maxlength="1"
            class="w-14 text-center border dark:border-gray-900 outline-none rounded-xl py-3 px-2 ring-primary"
            :class="[focusedInput === al ? 'ring-1' : '']" @focus="(e) => {
                focusedInput = al
            }" @keydown="(e) => e.preventDefault()" />
        <PButton class="w-80 " variant="solid">Next</PButton>

    </div>
    <div class="flex flex-wrap gap-3 mt-6 justify-evenly">
        <div class="" v-for="btn in valueFrom">
            <PButton variant="soft" @click="(e: Event) => {

                v[focusedInput - 1] = btn;
                (e.target as HTMLButtonElement).disabled = true;

                if (v.length < aLength) {

                    focusedInput = focusedInput + 1
                }

            }
                ">{{ btn }}</PButton>
        </div>
    </div>
</template>


<script setup lang="ts">


const props = defineProps<{
    aLength: number,
    valueFrom: [number],


}
>()

// useToNumber

const v = reactive<[number | string]>([''])
const focusedInput = ref<number>(1)



</script>