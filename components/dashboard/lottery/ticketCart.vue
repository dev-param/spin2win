<template>
    <div class="w-full max-w-sm  ">
        <div class="border-gray-500/20 border  rounded-2xl pt-4  ">
            <div class="px-3 mb-2">

                <h1 class="capitalize text-primary text-2xl font2">{{ name }}</h1>
                <div class="capitalize font-thin text-sm">{{ product_type }}</div>
            </div>
            <div class="">
                <img :src="`http://localhost:8000${img}`" alt="">
            </div>
            <div class="p-4">

                <div class="flex justify-between">
                    <div class="">Winner Announcement:</div>
                    <div class="">Every Sunday</div>
                </div>
                <div class="flex justify-between">
                    <div class="">Price:</div>
                    <div class="">{{ price ? `₹${price}.00` : 'out of stock' }}</div>
                </div>
            </div>
            <UDivider type="dashed" size="sm" />
            <div class="flex justify-between px-4 my-5">
                <div class=""></div>
                <div class="">
                    <PButton :to="`/dashboard/lottery/${code}/`" variant="link">Buy Now </PButton>
                </div>
            </div>

        </div>

    </div>
</template>


<script setup lang="ts">


defineProps<{
    name: string,
    product_type: string,
    price: number
    img: string,
    code: string

}>()

</script>