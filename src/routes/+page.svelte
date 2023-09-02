<script>
  export let data;
</script>

<svelte:head>
  <title>Dashboard | ChimaChima</title>
</svelte:head>

<h1>Users</h1>

<ul>
  {#each data.users as user}
    <li>{user.username}</li>
    <li>{user.password}</li>
  {/each}
</ul>
