<script>
  import { enhance } from "$app/forms";

  export let form;
</script>

<svelte:head>
  <title>Sign in | ChimaChima</title>
</svelte:head>

<div class="mx-auto my-0 flex h-screen w-full bg-slate-50 text-gray-100">
  <!-- {#if form?.success}
    <div class="mt-4 w-3/6 bg-slate-100 p-4 text-black">
      <p>Username : {form?.data?.username}</p>
      <p>Password : {form?.data?.password}</p>
    </div>
  {/if} -->
  <div class="mx-auto my-48 h-fit w-3/5 rounded-lg bg-green-600 shadow-md">
    <h2 class="my-12 text-center text-3xl font-medium">Sign in</h2>
    <form
      method="POST"
      use:enhance
      class="mx-auto my-12 flex h-max w-2/5 flex-col"
    >
      <span class="px-1 py-2 text-red-400">{form?.message || ""}</span>

      <label for="username" class="mb-2">Username</label>
      <input
        type="text"
        name="username"
        placeholder="Username"
        class="focus: mb-12 border-b-2 border-slate-50 bg-transparent px-2 py-1 text-gray-50 placeholder-gray-300 focus-within:border-b-slate-300 focus:outline-none"
      />
      <label for="password" class="mb-2">Password</label>

      <input
        type="password"
        name="password"
        placeholder="Password"
        class="focus: mb-12 border-b-2 border-slate-50 bg-transparent px-2 py-1 text-gray-50 placeholder-gray-300 focus-within:border-b-slate-300 focus:outline-none"
      />
      <button
        type="submit"
        class="rounded-lg bg-slate-50 px-4 py-2 text-green-600 hover:bg-slate-300 hover:text-green-800 focus:outline-none"
        >Sign in</button
      >
    </form>
  </div>
</div>
