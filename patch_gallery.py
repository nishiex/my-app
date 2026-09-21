from pathlib import Path
import re
p = Path('components/Gallery.tsx')
s = p.read_text(encoding='utf-8')

# 1 Replace import
s = s.replace('import { useEffect, useMemo, useRef, useState } from "react";', 'import { useEffect, useRef, useState } from "react";')

# 2 replace block from 'type GalleryCategory' to end of CATEGORIES
pattern = r'type\s+GalleryCategory[\s\S]*?const\s+CATEGORIES[\s\S]*?\];\s*\n'
replacement = 'type GalleryItem = {\n  id: number;\n  image: string;\n  category: "Kiosk" | "Setup" | "In Action" | "Events";\n  alt: string;\n};\n\n'
s_new = re.sub(pattern, replacement, s, flags=re.M)
if s_new == s:
    print('pattern2 not matched')
else:
    s = s_new

# 3 replace activeCategory block
pattern2 = r'  const \[activeCategory[\s\S]*?\}, \[activeCategory\]\);\s*\n'
replacement2 = '  const [activeIndex, setActiveIndex] = useState(0);\n\n  # Filters removed: always show all gallery items.\n  const filteredItems = GALLERY_ITEMS;\n\n'
s_new = re.sub(pattern2, replacement2, s, flags=re.M)
if s_new == s:
    print('pattern3 not matched')
else:
    s = s_new

# 4 replace gsap effect dependency
s = s.replace('}, [filteredItems.length]);', '}, []);')

# 5 replace second useEffect dependency if left
s = s.replace('}, [activeCategory]);', '}, []);')

# 6 remove handleCategoryChange function if any remaining
s = re.sub(r'  const handleCategoryChange[\s\S]*?\};\s*\n', '  # (removed) const handleCategoryChange = ...\n\n', s)

# 7 remove filters markup exact snippet
old_block = '''          {/* Filters */}
          <div className="w-full overflow-x-auto overflow-y-hidden pb-1 sm:w-auto">
            <div className="hidden sm:flex min-w-max items-center gap-1.5">
              {CATEGORIES.map((category) => {
                const active = category === activeCategory;

                return (
                  <button
                    key={category}
                    type="button"
                    data-gallery-filter
                    aria-pressed={active}
                    onClick={() => handleCategoryChange(category)}
                    className={`rounded-full border px-4 py-2 text-[9px] font-medium uppercase tracking-[0.05em] transition-all duration-300 sm:px-5 sm:text-[10px] ${
                      active
                        ? "border-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-white shadow-[0_0_22px_rgba(34,211,238,0.18)]"
                        : "border-cyan-300/25 bg-white/[0.015] text-slate-300 hover:border-cyan-300/60 hover:text-white"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
'''
if old_block in s:
    s = s.replace(old_block, '          {/* Filters removed */}\n')
else:
    print('filters block exact match not found; attempting regex removal')
    s = re.sub(r'\{\/\*\s*Filters\s*\*\/\}[\s\S]*?<\/div>\s*<\/div>\s*\n', '          {/* Filters removed */}\n', s)

# 8 replace Swiper key
s = s.replace('key={`${activeCategory}-${filteredItems.length}`}', 'key={`gallery-${filteredItems.length}`}')

# 9 write back
p.write_text(s, encoding='utf-8')
print('patched')
