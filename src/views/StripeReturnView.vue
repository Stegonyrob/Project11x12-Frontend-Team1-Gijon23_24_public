<script setup>
import StripeMessages from "@/components/payments/StripeMessages.vue";
import { loadStripe } from "@stripe/stripe-js";
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const messages = ref([]);
const clientSecret = ref('');


const currentRoute = computed(() => {
  return useRoute().query;
});
clientSecret.value = currentRoute.value?.payment_intent_client_secret;

let stripe;

onMounted(async () => {
  const { publishableKey } = await fetch("/api/config").then((res) => res.json());   
  stripe = await loadStripe(publishableKey);

  const {error, paymentIntent} = await stripe.retrievePaymentIntent(
    clientSecret.value,
  );

  if (error) {
    messages.value.append(error.message);
  }
  messages.value.push(`Payment ${paymentIntent.status}: ${paymentIntent.id}`)
});

</script>

<template>
  <body>
    <main>
      <a href="/">home</a>
      <h1>Thank you!</h1>
      <StripeMessages
        v-if="clientSecret"
        :messages="messages"
      />
    </main>
  </body>
</template>s