<template>


    <div class="flex justify-center mt-28 p-2">
        <div class="w-full max-w-md">
            <UCard class="w-full rounded-3xl relative">
                <div class="flex   w-full justify-center">
                    <UCard :ui="{
                        ring: 'ring-4',
                        body: {
                            padding: 'px-0 py-0 sm:p-0',
                        }
                    }" class="-mt-16 rounded-full overflow-hidden">
                        <img class="w-24 h-24" :src="`https://api.dicebear.com/9.x/adventurer/svg?seed=${id}`"
                            alt="profilePic">
                    </UCard>

                </div>
                <div class="mt-3 text-center">
                    <div class="">{{ data?.mobile_number ?? "Loading..." }}</div>
                    <div class="flex justify-center items-center gap-1 text-xl">

                        Account Balance:
                        ₹{{ data?.money_balance ?? 0 }}
                        <PButton icon="i-heroicons-plus-small-solid" variant="soft" />
                    </div>
                    <div class=" flex justify-center items-center gap-1 text-xl">

                        Coins:
                        Ç00.00
                        <PButton icon="i-heroicons-plus-small-solid" variant="ghost" />
                    </div>

                </div>
            </UCard>
        </div>
    </div>

</template>

<script setup lang="ts">



definePageMeta({
    layout: 'auth-layout'
})



const id = useId()

const { data } = await useAuthFetch("/user/profile/", {
    method: "POST",
    pick: ["money_balance", "mobile_number"]
})




</script>