<template>
    <div class="flex justify-center mt-40 items-center">
        <div class="max-w-md w-full">
            <div class="w-full">
                <div class=""></div>
                <UProgress class="w-full" :value="loadState" size="2xl"
                    :max="['Waiting to start', 'Validating...', 'Connecting to API Provider...', 'Done', 'Error', 'Already Paid']" />
            </div>
        </div>
    </div>
</template>



<script setup lang="ts">
import { load } from '@cashfreepayments/cashfree-js';

definePageMeta({
    layout: 'auth-layout'
})


const urlRoute = useRoute()
const router = useRouter()
const toast = useToast()
const loadState = ref(0)
const cashfree = await load({
    mode: "sandbox" //or production
});



const { data, status, error, } = await useAuthFetch("order/create/", {
    method: "POST", lazy: true, body: {
        data: urlRoute.params?.id ?? ""
    }, pick: ["payment_session_id"]
})


watch(status, (e) => {
    console.log(e)
    if (e === "pending") {
        loadState.value = 1
    } else if (e === "error") {
        loadState.value = 4
        toast.add({ title: error.value?.data.detail ?? "Something Went Wrong !", timeout: 0, icon: "i-heroicons-x-circle-16-solid", color: "red" })
        router.push("/wallet/")
    } else if (e === "success") {
        if (data.value?.payment_session_id) {

            loadState.value = 2
            cashfree.checkout({ paymentSessionId: data.value.payment_session_id, redirectTarget: "_blank" }).then((e: any) => {
                console.log(e)
            })
        } else {
            console.log("pending")
            loadState.value = 5
            router.push("/wallet/")


        }
    }
})

</script>