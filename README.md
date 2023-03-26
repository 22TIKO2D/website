# Tie Työhön's website

This is the [website](https://webpages.tuni.fi/22tiko2d/) for
[Tie Työhön](https://github.com/22TIKO2D/GAME-PROJECT-GOTY-2023) game.
It was made using [SvelteKit](https://kit.svelte.dev/) and
[Windi CSS](https://windicss.org/).

SvelteKit is a so-called JavaScript Meta-framework, which uses
[Svelte](https://svelte.dev/) as the underlying framework.
This is similar to the popular [Next.js](https://nextjs.org/) Meta-framework,
which in turn uses [React](https://reactjs.org/).
I chose to use Svelte purely out of preference for it.

Windi CSS is an alternative to the popular
[Tailwind CSS](https://tailwindcss.com/) framework.
I chose Windi, yet again, out of preference.

## Building

I chose to use the [pnpm](https://pnpm.io/) package manager,
so install that first if you don't already have it.
After that clone the repository and run the following commands:

```sh
pnpm install
pnpm build
pnpm postbuild
```

or simply `pnpm install && pnpm build && pnpm postbuild`,
after which you should have a directory called "build" with the produced output.
