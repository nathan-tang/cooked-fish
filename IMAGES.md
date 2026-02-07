# Royalty-Free Image Sources for cooked.fish

This document outlines recommended sources for high-quality, royalty-free fish and recipe images.

## Strategy

- Store images in `/public/images/` directory
- Use Next.js `<Image>` component for automatic optimization
- Vercel automatically serves images via CDN (no S3/CloudFront needed)
- Credit photographers in image metadata or footer

## Recommended Sources

### Unsplash (Recommended)
- **URL:** https://unsplash.com
- **License:** Free to use, commercial and non-commercial
- **Attribution:** Nice to give credit, not legally required
- **Quality:** Excellent high-resolution images
- **Search tips:**
  - "grilled salmon"
  - "cooked fish"
  - "fish fillet"
  - "baked cod"
  - "seared tuna"
- **API:** Available for programmatic access if needed

### Pexels
- **URL:** https://www.pexels.com
- **License:** Free to use, commercial and non-commercial
- **Attribution:** Optional but appreciated
- **Quality:** Very good, large collection
- **Search tips:**
  - "fish dish"
  - "seafood platter"
  - "cooked salmon"
  - "fish recipe"

### Pixabay
- **URL:** https://pixabay.com
- **License:** Free for commercial use, no attribution required
- **Quality:** Good, though sometimes less professional than Unsplash
- **Note:** Check individual image licenses, some require Pixabay attribution

### Wikimedia Commons
- **URL:** https://commons.wikimedia.org
- **License:** Varies (CC0, CC-BY, CC-BY-SA, etc.)
- **Attribution:** Required for most images
- **Quality:** Variable but can find excellent food photography
- **Benefit:** Lots of specific fish species photos

## Image Specifications

### Recipe Hero Images
- **Size:** 1200x800px minimum
- **Format:** WebP (with JPG fallback)
- **Aspect ratio:** 3:2 preferred
- **File size:** Keep under 200KB after optimization

### Recipe Thumbnails
- **Size:** 600x400px
- **Format:** WebP (with JPG fallback)
- **Aspect ratio:** 3:2
- **File size:** Keep under 100KB

## Implementation with Next.js

```tsx
import Image from "next/image";

// Example usage
<Image
  src="/images/grilled-salmon-teriyaki.webp"
  alt="Grilled salmon teriyaki with sesame seeds and green onions"
  width={1200}
  height={800}
  className="rounded-lg"
  priority={false}
/>
```

## Naming Convention

Use kebab-case matching recipe slugs:
- `/images/grilled-salmon-teriyaki.webp`
- `/images/pan-seared-barramundi-lemon-butter.webp`
- `/images/baked-cod-mediterranean-vegetables.webp`

## Current Placeholder

Currently using: `/images/placeholder.jpg`

Replace with actual images as recipes are added.

## Photo Attribution

Store photographer credits in a credits file for footer display:

```json
{
  "grilled-salmon-teriyaki.webp": {
    "photographer": "Jane Smith",
    "source": "Unsplash",
    "url": "https://unsplash.com/photos/abc123"
  }
}
```

## Backup: AI-Generated Images (Not Recommended)

While tools like Midjourney or DALL-E can generate food images, we recommend using real photography for authenticity and trust. Users want to see what the dish actually looks like.

## Searching Tips

**Good search terms:**
- "[fish name] cooked"
- "[fish name] grilled"
- "fish fillet [cooking method]"
- "[cuisine] fish dish"
- "fish dinner plate"

**Avoid:**
- Raw fish (unless recipe is for sushi/poke)
- Fish out of water (unless relevant to recipe story)
- Shellfish (maintains fish-only positioning)

## Next Steps

1. Create `/public/images/` directory if it doesn't exist
2. Download 30-40 high-quality images for current recipes
3. Optimize images using tools like:
   - https://squoosh.app (browser-based)
   - `sharp` (Node.js library)
   - ImageOptim (macOS app)
4. Update recipe data to use new image paths
5. Add photographer credits to footer

## Tools for Bulk Download

- **Unsplash API:** https://unsplash.com/developers
- **Pexels API:** https://www.pexels.com/api/

Can automate download and optimization for batch processing.
