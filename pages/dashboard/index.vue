<template>
    <div class="mt-10 mx-2">
        <div class="flex flex-wrap gap-5">

            <DashboardLotteryTicketCart v-for="l in data?.lottery" :name="l.name" product_type="lottery"
                :price="l.price" :img="l.images[0]" :code="l.code" />

        </div>
    </div>
</template>

<script setup lang="ts">


definePageMeta({
    layout: 'auth-layout'
})




const { data, status } = await useAuthFetch("/lottery/games/", {
    pick: ["lottery"],
    // transform: (res_data)=>{
    //     res_data
    // }
})

</script>