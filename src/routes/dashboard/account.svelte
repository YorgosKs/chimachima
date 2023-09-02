<script>
  import { enhance } from "$app/forms";

  export let accountShown = false;

  export function show() {
    accountShown = !accountShown;
  }

  let questions = [
    {
      id: 1,
      text: `Bank account`,
    },
    {
      id: 2,
      text: `Credit card`,
    },
    {
      id: 3,
      text: `Debit card`,
    },
    {
      id: 3,
      text: `Cash`,
    },
  ];
</script>

{#if accountShown}
  <div
    class="fixed left-0 top-0 z-10 mx-auto flex min-h-screen w-full items-center bg-gray-50 bg-opacity-75 text-gray-600"
  >
    <div class="mx-auto h-fit w-3/5 rounded-lg border bg-gray-200 shadow-md">
      <h2 class="my-12 text-center text-3xl font-medium">Add new account</h2>
      <form
        method="POST"
        action="?/addAccount"
        use:enhance
        class="mx-auto my-12 flex h-max w-3/5 flex-col"
      >
        <select
          name="type"
          class="focus: mb-12 border-b-2 border-green-600 bg-transparent px-2 py-1 text-gray-700 placeholder-gray-400 focus-within:border-b-green-800 focus:outline-none"
          required
        >
          <option selected disabled value=""> Select account type </option>
          {#each questions as question}
            <option value={question.text}>
              {question.text}
            </option>
          {/each}
        </select>
        <label for="name" class="mb-2">Account name</label>

        <input
          type="text"
          name="name"
          placeholder="Account name"
          autocomplete="off"
          required
          class="focus: mb-12 border-b-2 border-green-600 bg-transparent px-2 py-1 text-gray-700 placeholder-gray-400 focus-within:border-b-green-800 focus:outline-none"
        />
        <label for="balance" class="mb-2">Balance</label>
        <input
          type="text"
          name="balance"
          placeholder="Balance"
          autocomplete="off"
          required
          class="focus: mb-12 border-b-2 border-green-600 bg-transparent px-2 py-1 text-gray-700 placeholder-gray-400 focus-within:border-b-green-800 focus:outline-none"
        />

        <div class="flex flex-row justify-between">
          <button
            type="submit"
            class="w-5/12 rounded-lg border-2 border-green-800 bg-transparent px-4 py-3 font-medium text-green-800 transition hover:bg-green-800 hover:text-white"
            on:click={() => (accountShown = !accountShown)}>Cancel</button
          >
          <button
            type="submit"
            class="w-5/12 rounded-lg border-2 border-green-800 bg-green-800 px-4 py-3 font-medium text-white transition hover:bg-green-900 hover:text-white"
            >Add account</button
          >
        </div>
      </form>
    </div>
  </div>
{/if}
