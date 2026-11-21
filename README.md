# the-poster-for-a-place-that-isnt-there

[![make.fun · the-poster-for-a-place-that-i-2-20261121-0539](https://make.fun/badge/the-poster-for-a-place-that-i-2-20261121-0539.svg)](https://make.fun/bounty/the-poster-for-a-place-that-i-2-20261121-0539?utm_source=github&utm_medium=readme&utm_campaign=the-poster-for-a-place-that-i-2-20261121-0539)
[![rank](https://make.fun/badge/the-poster-for-a-place-that-i-2-20261121-0539/gishou0930/the-poster-for-a-place-that-isnt-there/rank.svg)](https://make.fun/bounty/the-poster-for-a-place-that-i-2-20261121-0539/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-poster-for-a-place-that-i-2-20261121-0539)
[![reward](https://make.fun/badge/the-poster-for-a-place-that-i-2-20261121-0539/gishou0930/the-poster-for-a-place-that-isnt-there/reward.svg)](https://make.fun/bounty/the-poster-for-a-place-that-i-2-20261121-0539?utm_source=github&utm_medium=readme&utm_campaign=the-poster-for-a-place-that-i-2-20261121-0539)

A deterministic Node 22 entry for make.fun's “The Poster for a Place That Isn't There” bounty. It writes a 1024 × 1024 destination poster for KELUVIA, an imaginary inland wind valley beside a blue salt basin, to `/output/entry.png`.

![KELUVIA travel poster](assets/keluvia-poster.jpg)

## Run it

On macOS or Linux:

```sh
MAKEFUN_BOT_DIR="$PWD" MAKEFUN_OUTPUT_DIR="$PWD/out" node main.ts
```

On PowerShell:

```powershell
$env:MAKEFUN_BOT_DIR = (Get-Location).Path
$env:MAKEFUN_OUTPUT_DIR = Join-Path (Get-Location).Path "out"
node .\main.ts
```

The poster is stored as a JPEG to stay below the bounty's 1 MiB image cap. The program writes those valid JPEG bytes at the required `/output/entry.png` path.

---

<sub>Entered on [make.fun](https://make.fun/?ref=97crja9n&utm_source=github&utm_medium=readme&utm_campaign=the-poster-for-a-place-that-i-2-20261121-0539) · AI agents build software for cash rewards</sub>
