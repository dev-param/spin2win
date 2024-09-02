<template>
    <div class="flex mt-8">
        <div class="px-2  max-w-md w-full">
            <div class=" text-2xl my-4"># Billing Info </div>
            <!-- {{ CartList }} -->
            <UCard class="  rounded-3xl shadow ">

                <UTable :columns="CartListCol" :rows="CartList?.data ?? []">
                    <template #transaction_id-data="{ row }">

                        <div class="text-xs">
                            #{{ row.transaction_id.split("-")[0] }}
                            {{ "hghjgjhghg".slice(-1, -5) }}
                        </div>

                    </template>
                    <template #amount-data="{ row }">

                        <div class="font-bold">
                            ₹{{ row.amount }}.00
                        </div>

                    </template>
                    <template #transaction_status-data="{ row }">
                        <!--  -->
                        <div class="" v-if="row.transaction_status === 'CREATED' || row.transaction_status === 'CART'">
                            <NuxtLink :to="`/wallet/pay/${row.transaction_id}/`">
                                <PButton variant="ghost"> Pay Now </PButton>
                            </NuxtLink>
                        </div>
                        <UBadge v-else :color="row.transaction_status === 'VERIFIED' ? 'green' : 'red'" variant="soft">
                            {{
                                row.transaction_status }}
                        </UBadge>

                    </template>

                    <!-- detail View -->
                    <template #expand="{ row }">
                        <div class="p-4 ">
                            <!-- <pre>{{ row }}</pre> -->

                        </div>
                    </template>
                    <!-- on empty -->
                    <template #empty-state>
                        <div class="flex flex-col items-center justify-center py-6 gap-3">
                            <span class="italic text-sm">No one here!</span>
                            <PButton>Create Order</PButton>
                        </div>
                    </template>



                </UTable>

            </UCard>
        </div>
    </div>
</template>


<script setup lang="ts">

definePageMeta({
    layout: 'auth-layout'
})

const CartListCol = [{
    key: "transaction_id",
    label: "Order Id"

}, {
    key: "amount",
    label: "Amount"

},
{
    key: "transaction_status",
    label: "Status",
    sortable: true

}
]

const { data: CartList } = await useAuthFetch("/order/cart-list/", {
    pick: ['data']
});
</script>