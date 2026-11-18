# Midjourney prompt pack — country landscapes

Twelve prompts tuned to the Plant Atlas palette. Each country card
is layered: landscape photo → dark gradient overlay → bone/white
typography. So reach for **rich, atmospheric light** — golden hour,
mist, dawn blue — not flat midday. Aspect ratio matches the cards.

## How to use

1. Open Midjourney in Discord.
2. Paste the `/imagine` line for a country.
3. Upscale the version you like, then **download at ~1600×1000**
   (right-click → *Save image* on the web gallery is fine).
4. Save as **`<code>.jpg`** in this folder — `br.jpg`, `pe.jpg`, etc.
   The card will pick it up automatically. No code change needed.
5. Aim for ~200–500 KB per file. A heavier JPG works but slows the page.

> MJ outputs PNG by default. Either export JPG from MJ, or convert
> locally:  `sips -s format jpeg -s formatOptions 85 input.png --out <code>.jpg`
> (macOS, built-in — no install.)

---

## 🇧🇷 Brazil — `br.jpg`   *biome: canopy*

```
/imagine prompt: aerial view of the Amazon rainforest at golden hour, dense emerald canopy stretching to horizon, slow river catching warm light, thin mist weaving between treetops, backlit atmospheric haze, cinematic documentary photography, Terrence Malick light, deep greens with warm amber accents --ar 16:10 --style raw --v 7
```

## 🇵🇪 Peru — `pe.jpg`   *biome: canopy*

```
/imagine prompt: Peruvian Andes above the Sacred Valley at dawn, terraced slopes descending into cloud forest, swirling mist hugging ridgelines, warm first light on distant peaks, ancient stonework hinted below, cinematic aerial landscape, deep blues and emerald greens with ochre earth --ar 16:10 --style raw --v 7
```

## 🇮🇩 Indonesia — `id.jpg`   *biome: canopy*

```
/imagine prompt: Jatiluwih rice terraces of Bali at golden hour, cascading emerald paddies, farmers' paths catching reflected light, low mist pooling in valleys, volcanic silhouette on the horizon, cinematic aerial, warm greens with amber highlights --ar 16:10 --style raw --v 7
```

## 🇯🇲 Jamaica — `jm.jpg`   *biome: canopy*

```
/imagine prompt: Blue Mountains of Jamaica at dawn, mist-wrapped forested peaks in deep emerald green, coffee plantation terraces hinted on lower slopes, soft blue atmospheric haze catching sunrise, cinematic tropical landscape photography, cool greens with warm sunrise accents --ar 16:10 --style raw --v 7
```

---

## 🇨🇳 China — `cn.jpg`   *biome: mountain*

```
/imagine prompt: Huangshan mountains at sunrise, granite peaks piercing a sea of clouds, lone pine tree in silhouette on a cliff, pastel blue-grey mist, traditional Chinese landscape painting atmosphere in photorealism, cinematic aerial, cool tones with pale gold accents --ar 16:10 --style raw --v 7
```

## 🇯🇵 Japan — `jp.jpg`   *biome: mountain*

```
/imagine prompt: misty Kyoto hills at dawn, layered mountain ridges fading into soft blue-grey atmospheric perspective, traditional satoyama landscape with a small village and terraced fields, cedar forest, cinematic serene atmosphere, Japanese ink-painting light, muted blues and sage greens --ar 16:10 --style raw --v 7
```

---

## 🇲🇽 Mexico — `mx.jpg`   *biome: dry*

```
/imagine prompt: Copper Canyon Mexico at sunset, vast layered canyon walls in terracotta and ochre, agave and saguaro silhouettes in foreground, warm desert light, dramatic long shadows, cinematic landscape photography, rich earth tones with deep amber sky --ar 16:10 --style raw --v 7
```

## 🇲🇦 Morocco — `ma.jpg`   *biome: dry*

```
/imagine prompt: Atlas Mountains of Morocco at dawn, Berber villages on ochre hillsides, snow-capped peaks catching first light, argan trees scattered on terraces, warm earth tones with cool blue shadows, cinematic documentary landscape photography --ar 16:10 --style raw --v 7
```

## 🇿🇦 South Africa — `za.jpg`   *biome: dry*

```
/imagine prompt: Cederberg Wilderness South Africa at golden hour, sandstone rock formations in warm ochre, fynbos vegetation in sage and amber, dramatic late light, long shadows, cinematic landscape photography, rich earth palette --ar 16:10 --style raw --v 7
```

## 🇰🇪 Kenya — `ke.jpg`   *biome: dry*

```
/imagine prompt: Maasai Mara at golden hour, a lone acacia tree on endless golden grassland, soft purple distant hills, warm backlight, documentary photography of African savanna, wide aerial perspective, warm yellows with dusty violet horizon --ar 16:10 --style raw --v 7
```

## 🇦🇺 Australia — `au.jpg`   *biome: dry*

```
/imagine prompt: Australian outback at dusk, red earth stretching to horizon, a monolith glowing deep orange-red, eucalyptus trees in silhouette, deep cobalt dusk sky above the warm red land, cinematic landscape photography --ar 16:10 --style raw --v 7
```

---

## 🇮🇳 India — `in.jpg`   *biome: monsoon*

```
/imagine prompt: Western Ghats of India during monsoon, cascading waterfalls through emerald tea terraces, low-hanging clouds wrapping forested peaks, deep saturated green vegetation, shafts of warm sunlight breaking through mist, cinematic aerial photography, lush greens with golden light --ar 16:10 --style raw --v 7
```

---

## Style notes

- **Avoid**: people in frame, logos, text, signs, obvious tourism shots.
  The cards already carry a flag emoji and country name — the photo is
  land, not postcard.
- **Favour**: aerial or elevated angles, mist/haze/golden-hour, depth
  of field with real atmospheric perspective.
- **Palette** per biome, in case you want to adjust prompts:
  - *canopy* — deep emerald, warm amber, river silver
  - *mountain* — cool blue-grey, pale gold, pine green
  - *dry* — terracotta, ochre, sage, dusty violet
  - *monsoon* — saturated emerald, warm gold shafts

If you want variants, swap `--style raw` for `--stylize 500` for more
MJ-interpretation, or add `--chaos 15` for looser compositions.

## Alt tool: Niji vs. v7

These are set to `--v 7` which gives cinematic-photoreal. If you prefer
a more painterly, almost-illustration feel (less realistic, more
"forest book"), try `--v 7 --style raw --stylize 800`.
