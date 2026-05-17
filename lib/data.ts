<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;family=JetBrains+Mono:wght@400;500&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
    tailwind.config = {
      darkMode: "class",
      theme: {
        extend: {
          "colors": {
            "on-tertiary-fixed": "#111c2d",
            "secondary": "#b9c7e0",
            "on-surface-variant": "#c7c4d8",
            "surface-dim": "#0b1326",
            "surface-variant": "#2d3449",
            "on-tertiary-container": "#d1dcf4",
            "primary-fixed": "#e2dfff",
            "surface-container-low": "#131b2e",
            "on-error-container": "#ffdad6",
            "inverse-surface": "#dae2fd",
            "on-primary-container": "#dad7ff",
            "on-error": "#690005",
            "primary": "#c3c0ff",
            "surface-tint": "#c3c0ff",
            "on-primary": "#1d00a5",
            "primary-fixed-dim": "#c3c0ff",
            "surface-container-lowest": "#060e20",
            "on-secondary-fixed-variant": "#3a485c",
            "surface-bright": "#31394d",
            "surface-container-high": "#222a3d",
            "secondary-container": "#3c4a5e",
            "on-surface": "#dae2fd",
            "primary-container": "#4f46e5",
            "tertiary-container": "#566175",
            "surface": "#0b1326",
            "tertiary": "#bcc7de",
            "error": "#ffb4ab",
            "error-container": "#93000a",
            "tertiary-fixed-dim": "#bcc7de",
            "secondary-fixed-dim": "#b9c7e0",
            "tertiary-fixed": "#d8e3fb",
            "on-secondary-container": "#abb9d2",
            "secondary-fixed": "#d5e3fd",
            "on-secondary-fixed": "#0d1c2f",
            "inverse-primary": "#4d44e3",
            "on-tertiary": "#263143",
            "background": "#0b1326",
            "on-background": "#dae2fd",
            "inverse-on-surface": "#283044",
            "surface-container": "#171f33",
            "outline-variant": "#464555",
            "outline": "#918fa1",
            "on-secondary": "#233144",
            "on-primary-fixed": "#0f0069",
            "surface-container-highest": "#2d3449",
            "on-primary-fixed-variant": "#3323cc",
            "on-tertiary-fixed-variant": "#3c475a"
          },
          "borderRadius": {
            "DEFAULT": "0.125rem",
            "lg": "0.25rem",
            "xl": "0.5rem",
            "full": "0.75rem"
          },
          "spacing": {
            "sm": "8px",
            "lg": "24px",
            "unit": "4px",
            "gutter": "16px",
            "xl": "40px",
            "md": "16px",
            "xs": "4px",
            "container-max": "1440px"
          },
          "fontFamily": {
            "body-lg": ["Space Grotesk"],
            "label-md": ["Space Grotesk"],
            "body-sm": ["Space Grotesk"],
            "headline-md": ["Space Grotesk"],
            "body-md": ["Space Grotesk"],
            "display-lg": ["Space Grotesk"],
            "code-md": ["JetBrains Mono"],
            "headline-lg": ["Space Grotesk"]
          },
          "fontSize": {
            "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
            "label-md": ["12px", {"lineHeight": "1.2", "letterSpacing": "0.05em", "fontWeight": "600"}],
            "body-sm": ["14px", {"lineHeight": "1.5", "fontWeight": "400"}],
            "headline-md": ["24px", {"lineHeight": "1.3", "fontWeight": "600"}],
            "body-md": ["16px", {"lineHeight": "1.5", "fontWeight": "400"}],
            "display-lg": ["48px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700"}],
            "code-md": ["14px", {"lineHeight": "1.6", "fontWeight": "400"}],
            "headline-lg": ["32px", {"lineHeight": "1.2", "letterSpacing": "-0.01em", "fontWeight": "600"}]
          }
        },
      },
    }
  </script>
<style>
    body { font-family: 'Space Grotesk', sans-serif; }
    .code-font { font-family: 'JetBrains Mono', monospace; }
    .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
  </style>
</head>
<body class="bg-background text-on-background min-h-screen flex flex-col">
<!-- TopNavBar (Shared Component) -->
<nav class="fixed top-0 w-full z-50 flex justify-between items-center px-lg h-16 bg-surface/80 backdrop-blur-xl border-b border-white/10 shadow-[0_0_15px_rgba(128,131,255,0.1)]">
<div class="font-headline-lg text-headline-lg font-bold text-primary tracking-tight">LaptopAI</div>
<div class="hidden md:flex items-center gap-lg">
<a class="font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors" href="#">How it works</a>
<a class="font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors" href="#">Documentation</a>
<a class="font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors" href="#">API</a>
</div>
<div class="flex items-center gap-md">
<button class="material-symbols-outlined text-on-surface-variant hover:bg-white/5 p-2 rounded transition-all duration-300">settings</button>
<button class="material-symbols-outlined text-primary hover:bg-white/5 p-2 rounded transition-all duration-300">account_circle</button>
</div>
</nav>
<main class="flex-1 flex pt-16 h-[calc(100vh-64px)] overflow-hidden">
<!-- Left Sidebar: Preference Scores -->
<aside class="w-64 border-r border-white/5 bg-surface-container-low/50 flex flex-col pt-8 overflow-y-auto">
<div class="px-6 mb-8">
<h2 class="text-primary font-headline-md font-bold">Preference Scores</h2>
<p class="text-on-surface-variant text-label-sm font-label-sm uppercase tracking-wider">Optimization Weights</p>
</div>
<nav class="flex flex-col gap-sm px-4">
<!-- Performance -->
<div class="p-3 bg-surface-bright/10 border-l-4 border-primary">
<div class="flex justify-between items-center mb-2">
<span class="flex items-center gap-2 text-on-surface font-label-md">
<span class="material-symbols-outlined text-sm">speed</span> Performance
            </span>
<span class="text-primary font-code-md text-sm">92%</span>
</div>
<div class="h-1 bg-surface-variant w-full overflow-hidden">
<div class="h-full bg-primary" style="width: 92%"></div>
</div>
</div>
<!-- Graphics -->
<div class="p-3 hover:bg-surface-bright/10 transition-colors">
<div class="flex justify-between items-center mb-2">
<span class="flex items-center gap-2 text-on-surface-variant font-label-md">
<span class="material-symbols-outlined text-sm">memory</span> Graphics
            </span>
<span class="text-on-surface-variant font-code-md text-sm">75%</span>
</div>
<div class="h-1 bg-surface-variant w-full overflow-hidden">
<div class="h-full bg-secondary" style="width: 75%"></div>
</div>
</div>
<!-- Multitasking -->
<div class="p-3 hover:bg-surface-bright/10 transition-colors">
<div class="flex justify-between items-center mb-2">
<span class="flex items-center gap-2 text-on-surface-variant font-label-md">
<span class="material-symbols-outlined text-sm">layers</span> Multitasking
            </span>
<span class="text-on-surface-variant font-code-md text-sm">88%</span>
</div>
<div class="h-1 bg-surface-variant w-full overflow-hidden">
<div class="h-full bg-secondary" style="width: 88%"></div>
</div>
</div>
<!-- Portability -->
<div class="p-3 hover:bg-surface-bright/10 transition-colors">
<div class="flex justify-between items-center mb-2">
<span class="flex items-center gap-2 text-on-surface-variant font-label-md">
<span class="material-symbols-outlined text-sm">laptop_mac</span> Portability
            </span>
<span class="text-on-surface-variant font-code-md text-sm">45%</span>
</div>
<div class="h-1 bg-surface-variant w-full overflow-hidden">
<div class="h-full bg-secondary" style="width: 45%"></div>
</div>
</div>
<!-- Budget -->
<div class="p-3 hover:bg-surface-bright/10 transition-colors">
<div class="flex justify-between items-center mb-2">
<span class="flex items-center gap-2 text-on-surface-variant font-label-md">
<span class="material-symbols-outlined text-sm">payments</span> Budget
            </span>
<span class="text-on-surface-variant font-code-md text-sm">60%</span>
</div>
<div class="h-1 bg-surface-variant w-full overflow-hidden">
<div class="h-full bg-secondary" style="width: 60%"></div>
</div>
</div>
</nav>
</aside>
<!-- Center Column: Chat Area -->
<section class="flex-1 bg-surface-container flex flex-col border-r border-white/5 relative">
<div class="flex-1 overflow-y-auto p-lg flex flex-col gap-lg">
<!-- Welcome Message -->
<div class="max-w-3xl mx-auto w-full text-center py-xl">
<h1 class="font-display-lg text-display-lg text-primary mb-sm">Welcome back.</h1>
<p class="font-body-lg text-on-surface-variant">Your hardware preferences are synced. How can I assist with your workstation search today?</p>
</div>
<!-- Chat Bubble: User -->
<div class="w-full flex flex-col items-end">
<div class="font-label-md text-on-surface-variant mb-unit uppercase px-md">User</div>
<div class="bg-surface-variant border border-white/10 p-md max-w-[80%] text-on-surface font-body-md rounded-lg">
            I need a high-performance machine for 3D rendering and software development. My budget is flexible but I value thermal efficiency over portability.
          </div>
</div>
<!-- Chat Bubble: System -->
<div class="w-full flex flex-col items-start">
<div class="font-label-md text-primary mb-unit uppercase px-md">System</div>
<div class="bg-surface-container-high border border-primary/20 p-md max-w-[80%] text-on-surface font-body-md rounded-lg">
            Analyzing current market data against your 92% Performance and 75% Graphics preference weightings. I have identified three workstations that maximize multi-core throughput and VRAM allocation while maintaining stable clock speeds under heavy load.
          </div>
</div>
</div>
<!-- Chat Input & Technical Footer -->
<div class="p-lg bg-surface-container border-t border-white/10 mt-auto">
<div class="relative max-w-4xl mx-auto flex gap-md items-center bg-surface-container-lowest border border-white/10 p-sm rounded-lg focus-within:border-primary transition-colors">
<input class="flex-1 bg-transparent border-none focus:ring-0 text-on-surface font-body-md px-md" placeholder="Specify your technical requirements..." type="text"/>
<button class="bg-primary text-on-primary font-label-md py-2 px-6 rounded-lg hover:brightness-110 active:scale-95 transition-all">
            PROCESS
          </button>
</div>
<footer class="mt-lg pt-lg border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-outline text-label-sm font-label-sm gap-md">
<p class="max-w-xl text-center md:text-left">
            This AI is optimized using a weighted scoring algorithm to match user preference. Powered by Claude API.
          </p>
<div class="flex items-center gap-lg">
<span class="font-bold text-on-surface uppercase">© Copyright Abeseg</span>
<div class="flex gap-md">
<a class="hover:text-on-surface transition-colors" href="#">Weighted Scoring</a>
<a class="hover:text-on-surface transition-colors" href="#">Claude API</a>
</div>
</div>
</footer>
</div>
</section>
<!-- Right Column: Recommendations -->
<aside class="w-80 bg-surface-dim p-lg flex flex-col gap-lg overflow-y-auto">
<div class="border-b border-white/5 pb-md">
<h3 class="text-on-surface font-headline-md font-bold">Top Matches</h3>
<p class="text-on-surface-variant font-label-md">Ranked by Preference Fit</p>
</div>
<!-- Card 1 -->
<div class="bg-surface-container-highest border border-primary/30 p-md flex flex-col gap-md">
<div class="flex justify-between items-start">
<h4 class="text-primary font-bold text-lg leading-tight">NextGen Pro 16</h4>
<span class="bg-primary/20 text-primary px-2 py-1 text-[10px] font-bold rounded">98% FIT</span>
</div>
<div class="space-y-1">
<div class="flex justify-between text-xs font-code-md">
<span class="text-on-surface-variant">CPU</span>
<span class="text-on-surface">M3 Max 16-Core</span>
</div>
<div class="flex justify-between text-xs font-code-md">
<span class="text-on-surface-variant">RAM</span>
<span class="text-on-surface">64GB Unified</span>
</div>
<div class="flex justify-between text-xs font-code-md">
<span class="text-on-surface-variant">GPU</span>
<span class="text-on-surface">40-Core GPU</span>
</div>
</div>
<button class="w-full bg-primary text-on-primary font-label-md py-2 text-center uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all">
          VIEW SPECIFICATIONS
        </button>
</div>
<!-- Card 2 -->
<div class="bg-surface-container border border-white/5 p-md flex flex-col gap-md grayscale hover:grayscale-0 transition-all cursor-pointer">
<div class="flex justify-between items-start">
<h4 class="text-on-surface font-bold text-lg leading-tight">Ether Air 13</h4>
<span class="bg-secondary/20 text-secondary px-2 py-1 text-[10px] font-bold rounded">82% FIT</span>
</div>
<div class="space-y-1">
<div class="flex justify-between text-xs font-code-md">
<span class="text-on-surface-variant">CPU</span>
<span class="text-on-surface">M3 8-Core</span>
</div>
<div class="flex justify-between text-xs font-code-md">
<span class="text-on-surface-variant">RAM</span>
<span class="text-on-surface">24GB Unified</span>
</div>
<div class="flex justify-between text-xs font-code-md">
<span class="text-on-surface-variant">GPU</span>
<span class="text-on-surface">10-Core GPU</span>
</div>
</div>
<button class="w-full border border-white/20 text-on-surface font-label-md py-2 text-center uppercase tracking-widest hover:bg-white/5 active:scale-95 transition-all">
          VIEW SPECIFICATIONS
        </button>
</div>
<!-- Card 3 -->
<div class="bg-surface-container border border-white/5 p-md flex flex-col gap-md grayscale hover:grayscale-0 transition-all cursor-pointer">
<div class="flex justify-between items-start">
<h4 class="text-on-surface font-bold text-lg leading-tight">Titan X1</h4>
<span class="bg-secondary/20 text-secondary px-2 py-1 text-[10px] font-bold rounded">79% FIT</span>
</div>
<div class="space-y-1">
<div class="flex justify-between text-xs font-code-md">
<span class="text-on-surface-variant">CPU</span>
<span class="text-on-surface">i9-14900HX</span>
</div>
<div class="flex justify-between text-xs font-code-md">
<span class="text-on-surface-variant">RAM</span>
<span class="text-on-surface">128GB DDR5</span>
</div>
<div class="flex justify-between text-xs font-code-md">
<span class="text-on-surface-variant">GPU</span>
<span class="text-on-surface">RTX 4090 16GB</span>
</div>
</div>
<button class="w-full border border-white/20 text-on-surface font-label-md py-2 text-center uppercase tracking-widest hover:bg-white/5 active:scale-95 transition-all">
          VIEW SPECIFICATIONS
        </button>
</div>
</aside>
</main>
</body></html>