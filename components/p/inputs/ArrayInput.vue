<template>
    {{ v }}
    <div ref="divEl" class="flex flex-wrap justify-center gap-2">
        <input v-for="al in aLength" v-model="v[al - 1]" maxlength="1"
            class="w-10 text-center border dark:border-gray-900 outline-none rounded-xl p-3"
            @input="(e: Event) => inputChanged(e, al)" />
    </div>
</template>


<script setup lang="ts">
const aLength = 5
const v = reactive([])
const divEl = ref<HTMLDivElement | null>(null)

function focusPreInput(e: InputEvent, key: number) {

    const prevNodeName = (e.target as HTMLInputElement).previousSibling?.nodeName ?? ""
    if (prevNodeName === "INPUT") {
        (divEl.value?.childNodes[key].previousSibling as HTMLInputElement).focus()
    }
}
function focusNextInput(e: InputEvent, key: number) {

    const prevNodeName = (e.target as HTMLInputElement).nextSibling?.nodeName ?? ""
    if (prevNodeName === "INPUT") {
        (divEl.value?.childNodes[key].nextSibling as HTMLInputElement).focus()
    }
}

function inputChanged(e: Event, key: number) {

    if ((e as InputEvent).inputType === "deleteContentBackward") {
        focusPreInput((e as InputEvent), key)
        return 0
    }
    focusNextInput((e as InputEvent), key)
}




</script>