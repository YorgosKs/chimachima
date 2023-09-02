<script>
  import { enhance } from "$app/forms";
  import { afterUpdate } from "svelte";
  import Account from "./account.svelte";
  import Transaction from "./transaction.svelte";
  import { getContext } from "svelte";

  /** @type {import('./$types').PageData} */
  export let data;

  /** @type {import('./$types').ActionData} */
  export let form;
  let account;
  let transaction;

  let accountShown;
  let transactionShown;

  afterUpdate(() => {
    if (form?.accountState === true && accountShown === true) {
      account.show();
    }

    if (form?.transactionState === true && transactionShown === true) {
      transaction.show();
    }
  });
</script>

<svelte:head>
  <title>Dashboard | ChimaChima</title>
</svelte:head>

<div class=" relative mb-8 flex min-h-full flex-col rounded-xl bg-white">
  <div
    class=" mx-auto my-8 flex w-11/12 items-center justify-between rounded-xl p-4"
  >
    <h2 class="text-2xl font-medium">Welcome back, user!</h2>
    <div>
      <button
        class="rounded-lg border-2 border-green-800 bg-transparent px-4 py-2 font-medium text-green-800 transition hover:bg-green-800 hover:text-white"
        on:click={() => account.show()}>New account</button
      >
      <button
        class="ml-2 rounded-lg border-2 border-green-800 bg-transparent px-4 py-2 font-medium text-green-800 transition hover:bg-green-800 hover:text-white"
        on:click={() => transaction.show(data.accounts.name)}
        >New transaction</button
      >
    </div>
  </div>
  <div class="mx-auto mb-10 w-11/12 rounded-lg bg-gray-100 shadow-md">
    <h3 class="mx-12 my-8 text-xl font-medium">Accounts</h3>
    <div class="mx-auto flex w-4/5 flex-row flex-wrap justify-between">
      {#if data.accounts.length === 0}
        <p class="mx-auto pb-16 text-center text-2xl font-medium text-gray-400">
          No accounts found
        </p>
      {:else}
        {#each data.accounts as account}
          <div
            class="mx-auto mb-12 flex min-h-full w-64 flex-col items-start justify-between rounded-md bg-green-800 px-20 py-6 text-white shadow-md"
            key={account._id}
          >
            <p class="py-1 text-sm font-thin text-gray-300">{account.type}</p>
            <p class="whitespace-nowrap py-1 text-2xl">{account.name}</p>
            <p class="py-1 text-xl font-semibold">{account.balance} €</p>
          </div>
        {/each}
      {/if}
    </div>
  </div>
  <div class="mx-auto w-11/12 bg-transparent">
    <h3 class="mx-12 text-xl font-medium">Transactions</h3>

    <div
      class="mt-8 flex w-full justify-between border-b px-0 py-3 text-center"
    >
      <p class="w-4/12 font-medium">Account name</p>
      <p class="w-4/12 font-medium">Amount</p>
      <p class="w-4/12 font-medium">Description</p>
    </div>
    {#if data.transactions.length === 0}
      <p class="mx-auto py-16 text-center text-2xl font-medium text-gray-400">
        No transactions found
      </p>
    {:else}
      <div
        class=" [&>*:nth-child(even)]:border [&>*:nth-child(odd)]:bg-gray-200"
      >
        {#each data.transactions as transaction}
          <div
            class="mt-4 flex w-full items-center justify-between rounded-lg px-0 py-3"
            key={transaction._id}
          >
            <p class="text-md w-4/12 py-1 text-center">
              {transaction.accountName}
            </p>
            <p class="text-md w-4/12 whitespace-nowrap py-1 text-center">
              {transaction.amount} €
            </p>
            <p class="text-md w-4/12 py-1 text-center">
              {transaction.description}
            </p>
          </div>
        {/each}
      </div>
    {/if}
  </div>

  <Account bind:this={account} bind:accountShown />
  <Transaction
    bind:this={transaction}
    accountNames={data.accounts.map((account) => [
      { name: account.name, id: account._id },
    ])}
    bind:transactionShown
  />
</div>
