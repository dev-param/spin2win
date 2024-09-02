<template>


    <div class="flex justify-center py-10">
        <div class="w-full max-w-4xl ">
            <div class="">
                <UCarousel v-slot="{ item }" :items="data?.images"
                    :ui="{ item: 'basis-full items-center h-64 overflow-hidden' }" class="rounded-3xl overflow-hidden "
                    indicators>
                    <img :src="`http://localhost:8000${item}`" class="w-full min-h-full" draggable="false">
                </UCarousel>
            </div>
            <div class="flex flex-col xl:flex-row justify-between mt-4 border border-gray-500/30 rounded-3xl p-4 mx-2">
                <div class="w-full  ">
                    <h1 class="capitalize text-primary text-2xl font2">{{ data?.name }}</h1>
                    <div class="">
                        <div class="text-2xl">1st Price: ₹{{ data?.first_price }}.00</div>
                        <div class="text-xl">2nd Price: ₹{{ data?.second_prize }}.00</div>
                        <div class="text-md">3rd Price: ₹{{ data?.third_prize }}.00</div>
                    </div>
                    <div class="mt-4" v-if="data?.price">Buy a ticket just at: ₹{{ data?.price }}</div>

                    <UBadge v-else color="red" variant="solid">Out of stock</UBadge>

                    <div class="capitalize mt-8">
                        details:
                        <blockquote class="ubuntu-sans font-thin">{{ data?.details }}</blockquote>
                    </div>
                </div>
                <UDivider orientation="vertical" size="sm" type="dotted" class="mx-4 hidden xl:block" />
                <UDivider orientation="horizontal" size="sm" type="dotted" class=" my-5  xl:hidden" />
                <div class="w-full mt-4 xl:mt-0">
                    <div class="flex flex-col gap-6">

                        <div class="">
                            <LotteryInput :a-length="15" :value-from="data?.number_code.code ?? []" />
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
import LotteryInput from './lotteryInput.vue';
definePageMeta({
    layout: 'auth-layout'
})
const urlRouter = useRoute()
const { data, status } = await useAuthFetch(`/lottery/games/${urlRouter.params?.code}/`, {
    pick: ['images', 'name', 'code', 'details', 'price', 'number_code', 'first_price', 'second_prize', 'third_prize', '_at']
})
</script>