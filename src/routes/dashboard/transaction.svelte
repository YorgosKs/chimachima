<script>
  import { enhance } from "$app/forms";

  export let accountNames;

  export let transactionShown = false;

  export function show() {
    transactionShown = !transactionShown;
  }

  let selected;
</script>

{#if transactionShown}
  <div
    class="fixed left-0 top-0 z-10 mx-auto flex min-h-screen w-full items-center bg-gray-50 bg-opacity-75 text-gray-600"
  >
    <div class="mx-auto h-fit w-3/5 rounded-lg border bg-gray-200 shadow-md">
      <h2 class="my-12 text-center text-3xl font-medium">
        Add new transaction
      </h2>
      <form
        method="POST"
        action="?/addTransaction"
        use:enhance
        class="mx-auto my-12 flex h-max w-3/5 flex-col"
      >
        <select
          name="accountName"
          class="focus: mb-12 border-b-2 border-green-600 bg-transparent px-2 py-1 text-gray-700 placeholder-gray-400 focus-within:border-b-green-800 focus:outline-none"
          required
        >
          <option selected disabled value=""> Select your bank </option>
          {#each accountNames as accountName}
            {#each accountName as bank}
              <option value={bank.name}>
                {bank.name}
              </option>
            {/each}
          {/each}
        </select>
        <label for="amount" class="mb-2">Amount</label>

        <input
          type="text"
          name="amount"
          placeholder="Amount"
          autocomplete="off"
          required
          class="focus: mb-12 border-b-2 border-green-600 bg-transparent px-2 py-1 text-gray-700 placeholder-gray-400 focus-within:border-b-green-800 focus:outline-none"
        />
        <label for="description" class="mb-2">Description</label>
        <input
          type="text"
          name="description"
          placeholder="Description"
          autocomplete="off"
          required
          class="focus: mb-12 border-b-2 border-green-600 bg-transparent px-2 py-1 text-gray-700 placeholder-gray-400 focus-within:border-b-green-800 focus:outline-none"
        />

        <div class="flex flex-row justify-between">
          <button
            type="submit"
            class="w-5/12 rounded-lg border-2 border-green-800 bg-transparent px-4 py-3 font-medium text-green-800 transition hover:bg-green-800 hover:text-white"
            on:click={() => (transactionShown = !transactionShown)}
            >Cancel</button
          >
          <button
            type="submit"
            class="w-5/12 rounded-lg border-2 border-green-800 bg-green-800 px-4 py-3 font-medium text-white transition hover:bg-green-900 hover:text-white"
            >Add transaction</button
          >
        </div>
      </form>
    </div>
  </div>
{/if}
