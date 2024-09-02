<template>

    <div class="flex justify-center items-center pt-9">
        <form @submit.prevent="checkout" class="w-full max-w-md md:border rounded-3xl p-8">
            <div class="my-4 font-bold text-center text-primary-800/80 text-xl font-mono">
                Enter Amount To Checkout
            </div>
            <div class="">

                <PInputsFilledInput u-key="ph"
                    :input-attr="{ required: true, maxlength: 6, autofocus: true, minlength: 3 }"
                    :label-attr="{ innerText: 'Amount' }" v-model="formCollector.data.amount" />
            </div>
            <div class="pt-6">

                <PButton type="submit" :loading="formCollector.load">Checkout</PButton>
            </div>
        </form>

    </div>


</template>

<script setup>
definePageMeta({
    layout: 'auth-layout'
})
// import { load } from '@cashfreepayments/cashfree-js';
const formCollector = reactive({ data: { amount: 0 }, load: false })

const router = useRouter();

// const cashfree = await load({
//     mode: "sandbox" //or production
// });
// const { data: cart_list } = await useAuthFetch("order/cart-list/", {
//     lazy: true
// })



const checkout = async () => {
    formCollector.load = true
    const { data, status, error, } = await useAuthFetch("order/add-cart/", {
        method: "POST", lazy: true, body: {
            money: formCollector.data.amount
        }, pick: ["order_id", "detail"]
    })
    console.log(status)
    if (status.value === "success") {
        router.push(`/wallet/pay/${data.value.order_id}/`)
    } else {
        alert("please check your value")
    }

    formCollector.load = false
}






// const { data, status, error, refresh, execute } = await useAuthFetch("order/create/", {
//     method: "POST", lazy: true, immediate: false, body: {
//         money: "500"
//     }
// })


</script>