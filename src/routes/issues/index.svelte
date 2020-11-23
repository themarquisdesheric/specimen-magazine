<script lang="ts">
  type Person = {
    name: string,
    title: string,
  }

  type Issue = {
    slug: string,
    title: string,
    date: number,
    number: number,
    tags: string[],
    contributors: Person[],
    interviewees: Person[],
  }
</script>

<svelte:head>
	<title>Issues</title>
</svelte:head>

<h1>Issues</h1>
<ul>
	<li>Issue #1: Berkeley?</li>
	<li>Issue #2: Stanford</li>
</ul>
