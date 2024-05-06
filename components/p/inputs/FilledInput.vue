<template>

    <div class="relative  w-full">
        <input :type="inputType" class="
        peer rounded-t-lg pt-5 pb-3 px-4 outline-none border-b border-neutral-400/60 transition-all text-sm w-full bg-primary-500/10 dark:bg-primary-900/10 placeholder-transparent
        focus:border-primary " :placeholder="inputLabel" :id="uId" />
        <label class="
        absolute left-4 top-1 text-xs transition-all opacity-60 capitalize 
        peer-focus:top-1 peer-focus:text-primary peer-focus:text-xs peer-focus:opacity-100
        peer-placeholder-shown:text-base peer-placeholder-shown:top-3
        " :for="uId">{{ inputLabel }}</label>
    </div>
</template>



<script setup>

defineProps({
    inputLabel: { default: "", type: String },
    inputType: { default: "text", type: String },

})
function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}
const uId = makeid(5) 
</script>