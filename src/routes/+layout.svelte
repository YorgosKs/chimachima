<script>
  import "../app.css";
  export let data;
</script>

<div
  class="   mx-auto flex min-h-screen w-full flex-row justify-around bg-gray-200 py-12"
>
  {#if data.status === 200}
    <nav
      class=" left-0 top-0 mx-0 flex h-96 w-3/12 flex-col items-center justify-center rounded-2xl border bg-white text-black shadow-sm"
    >
      <a
        href="/dashboard"
        class="&& my-2 block h-10 w-9/12 rounded-md border py-2 text-center shadow-sm transition hover:bg-green-800 hover:text-white"
        >Dashboard</a
      >
      <a
        href="/accounts"
        class="my-2 h-10 w-9/12 rounded-md border py-2 text-center shadow-sm transition hover:bg-green-800 hover:text-white hover:shadow-sm"
        >Accounts</a
      >
      <a
        href="/transactions"
        class="my-2 h-10 w-9/12 rounded-md border py-2 text-center shadow-sm transition hover:bg-green-800 hover:text-white hover:shadow-sm"
        >Transactions</a
      >
      <a
        href="/login"
        class="my-2 h-10 w-9/12 rounded-md border py-2 text-center shadow-sm transition hover:bg-green-800 hover:text-white"
        >Login</a
      >
      <a
        href="/register"
        class="my-2 h-10 w-9/12 rounded-md border py-2 text-center shadow-sm transition hover:bg-green-800 hover:text-white hover:shadow-sm"
        >Register</a
      >
    </nav>
  {/if}
  <div class=" mx-0 flex w-8/12 rounded-xl shadow-md">
    <main>
      <slot />
    </main>
  </div>
</div>

<style>
  main {
    margin: 0 auto;
    width: 100%;
  }
</style>
