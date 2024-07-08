<template>

    <h1>Profile</h1>
    {{ data }}
    {{ error }}
    {{ status }}
    <UButton @click="clear()">raise</UButton>
    <UButton @click="refresh()">raise</UButton>
</template>

<script setup>

// const d = useAuthDataStore()

const { data, status, error, refresh, clear } = await useAuthFetch("user/profile/", { method: "POST", lazy: true })
// console.log(status.)


</script>