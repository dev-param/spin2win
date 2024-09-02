<template>
    <div class="flex justify-center h-screen md:items-center">
        <form @submit.prevent="login()" class="w-full max-w-md">
            <UCard class="max-w-md  w-full ring-0 shadow-none md:ring-1 rounded-3xl py-10">
                <div class=" flex flex-col gap-6">
                    <div class="">
                        <AssetsLogo />
                    </div>

                    <PInputsFilledInput v-model="loginData.data.ph" u-key="ph"
                        :input-attr="{ required: true, maxlength: 10, autofocus: true, minlength: 10 }"
                        :label-attr="{ innerText: 'Mobile Number' }" />
                    <PInputsFilledInput v-model="loginData.data.pin" u-key="password"
                        :input-attr="{ required: true, type: 'password', maxlength: 4, minlength: 4 }"
                        :label-attr="{ innerText: 'PIN' }" />
                    <UCheckbox v-model="loginData.data.rememberMe" label="Remember me" />
                    <div class=" flex flex-col items-center gap-6">

                        <PButton @click.prevent="login()" :loading="loginData.load.submit">Next</PButton>


                        <NuxtLink to="/auth/forget/">

                            <PButton variant="link">
                                Forget Password ?
                            </PButton>
                        </NuxtLink>
                        <NuxtLink to="/auth/signin/">
                            <PButton variant="soft">
                                Create Account
                            </PButton>
                        </NuxtLink>

                    </div>


                </div>

            </UCard>
            <UModal :ui="{ rounded: 'rounded-3xl', container: 'items-start', }" v-model="loginData.otpModel"
                prevent-close>
                <div class="py-32 px-9">
                    <div class="text-center">
                        <UIcon name="i-heroicons-device-phone-mobile-solid" class="w-24 h-24" />
                    </div>
                    <div class="text-2xl py-2 text-center">We Send You One time Password</div>
                    <div class="text-center text-sm opacity-55">Please check your mobile number {{
                        loginData.data.ph }}</div>
                    <div class="py-4 mt-5 flex flex-col items-center gap-8">
                        <PInputsFilledInput v-model="loginData.data.otp" u-key="otp"
                            :input-attr="{ required: loginData.otpModel }" :label-attr="{ innerText: 'OTP' }" />


                        <PButton :loading="loginData.load.submit" @click.prevent="() => {
                            login(false)
                        }">Login</PButton>

                        <PButton @click.prevent="() => { loginData.otpModel = false }" variant="soft"> Back
                        </PButton>

                    </div>
                </div>
            </UModal>
        </form>


    </div>
</template>



<script setup lang="ts">
import * as vb from 'valibot';
import { useStorage, useStorageAsync } from '@vueuse/core'

// const d = useAuthDataStore()
const localState = useStorageAsync('auth', { token: {} })
const router = useRouter()

const toast = useToast()
const loginData = reactive({
    data: {
        ph: "",
        pin: "",
        otp: "",
        rememberMe: true,
    },
    otpModel: false,
    load: {
        submit: false
    }
});



// form validation




async function login(sendOtp = true) {

    const formSchema = vb.object({
        ph: vb.pipe(vb.string(), vb.regex(/^[0-9]{10}$/, 'Mobile Number must be 10 digits')),
        pin: vb.pipe(vb.string(), vb.regex(/^[0-9]{4}$/, '4 Number PIN required to login'))
    })
    const result = vb.safeParse(formSchema, loginData.data);
    if (!result.success) {
        toast.add({
            id: 'login_error',
            title: "Invalid Login Data",
            description: "Please Check Mobile Number or Pin",
            icon: "i-heroicons-x-circle-20-solid",
            color: "red",
            timeout: 10000
        })
        return null
    }
    if (!sendOtp) {

        const OtpSchema = vb.pipe(vb.string(), vb.regex(/^[0-9]{4}$/, '4 Number PIN required to login'));


        if (!vb.is(OtpSchema, loginData.data.otp)) {
            toast.add({
                id: 'login_error',
                title: "Invalid OTP",
                description: "Please Check Your Otp InputFiled",
                icon: "i-heroicons-x-circle-20-solid",
                color: "red",
                timeout: 10000
            })
            return null
        }

    }




    await useFetch(
        "http://localhost:8000/user/login/",
        {
            method: "post",
            body: loginData.data,
            watch: false,
            server: false,
            onRequest(req) {
                loginData.load.submit = true
            },
            onResponseError({ request, response, options }) {
                console.log(response._data)
                loginData.load.submit = false
                toast.add({
                    id: 'login_error',
                    title: response._data.code ?? response.status.toString() ?? "Unexpected Error",
                    description: response._data.detail ?? response._data ?? ":( let me check ",
                    icon: "i-heroicons-x-circle-20-solid",
                    color: "red",
                    timeout: 10000
                })

            },



            onResponse({ request, response, options }) {
                loginData.load.submit = false
                if (response.status === 200) {

                    localState.value.token = response._data
                    router.push("/auth/profile/")

                } else if (response.status === 202) {
                    loginData.otpModel = true

                }
            }
        },


    )
}




</script>