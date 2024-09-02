<template>
    <form @submit.prevent class="flex justify-center h-screen md:items-center">
        <UCard class="max-w-md w-full ring-0 shadow-none md:ring-1 rounded-3xl py-10">
            <div class=" flex flex-col gap-6">
                <div class="">
                    <AssetsLogo />
                </div>
                <PInputsFilledInput u-key="ph"
                    :input-attr="{ required: true, maxlength: 10, autofocus: true, minlength: 10 }"
                    :label-attr="{ innerText: 'Mobile Number' }" />
                <PInputsFilledInput u-key="password" :input-attr="{ required: true, maxlength: 50, minlength: 8 }"
                    :label-attr="{ innerText: 'Password' }" />
                <PInputsFilledInput u-key="password2" :input-attr="{ required: true, maxlength: 50, minlength: 8 }"
                    :label-attr="{ innerText: 'Password Confirm' }" />

                <div class="font-semibold">Pin Required For Login *</div>
                <PInputsFilledInput u-key="pin" :input-attr="{ required: true, maxlength: 4, minlength: 4 }"
                    :label-attr="{ innerText: 'PIN' }" />
                <PInputsFilledInput u-key="pin2" :input-attr="{ required: true, maxlength: 4, minlength: 4 }"
                    :label-attr="{ innerText: 'PIN Confirm' }" />

                <div class="my-5">
                    <UCheckbox label="I agree with all term and conditions" required="true"></UCheckbox>
                </div>
                <div class="flex flex-col items-center gap-6">

                    <PButton type="submit">Create Account</PButton>


                    <NuxtLink to="/auth/login/">
                        <PButton variant="soft">
                            Already Have an Account ?
                        </PButton>
                    </NuxtLink>
                </div>


            </div>

        </UCard>
    </form>
</template>