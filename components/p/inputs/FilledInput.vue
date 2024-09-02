<template>



    <div class="relative  w-full">
        <input :type="inputAttr.type" v-model="model" class="
            peer rounded-t-lg pt-5 pb-3 px-4 outline-none border-b border-neutral-400/60 transition-all text-sm w-full bg-primary-500/10 dark:bg-primary-900/10 placeholder-transparent
            focus:border-primary " :class="inputAttr.class" :required="inputAttr.required" :id="uKey ?? dId"
            :placeholder="labelAttr.innerText" :autofocus="inputAttr.autofocus" :maxlength="inputAttr.maxlength"
            :minlength="inputAttr.minlength" />
        <label class="
            absolute left-4 top-1 text-xs transition-all opacity-60 capitalize 
            peer-focus:top-1 peer-focus:text-primary peer-focus:text-xs peer-focus:opacity-100
            peer-placeholder-shown:text-base peer-placeholder-shown:top-3 cursor-text
            " :class="labelAttr.class" :for="uKey ?? dId">{{ labelAttr.innerText }}</label>
    </div>

</template>


<script setup lang="ts">

// import type {  } from 'vue/dist';

const model = defineModel()
const dId = useId()


type InputTypeHtmlAttribute = 'text' | 'password' | 'number' | 'email' | 'checkbox' | 'radio';
interface inputPropType {
    type?: InputTypeHtmlAttribute,
    class?: string,
    required?: boolean,
    autofocus?: boolean,
    maxlength?: number,
    minlength?: number

}
interface LabelPropType {
    class?: string,
    innerText?: string
}
interface PropTypes {
    inputAttr?: inputPropType,
    labelAttr?: LabelPropType,
    uKey?: string | null

}
const props = withDefaults(defineProps<PropTypes>(), {
    inputAttr: () => ({
        type: "text",
        class: "",
        required: false,
        autofocus: false,
        maxlength: 99,
        minlength: 0


    }),
    labelAttr: () => ({
        class: "",
        innerText: ""
    }),
    uKey: null,

})


</script>