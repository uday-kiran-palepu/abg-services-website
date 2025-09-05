# Q Path Diagnostics Website

## Overview
Professional healthcare website for Q Path Diagnostics - Hyderabad's first at-home diagnostic service provider offering ABG, ECG, and X-Ray tests.

## Code Structure & Organization

### Page-Specific Components
Each page contains its own complete code structure for easy maintenance:

- **HomePage** (`src/pages/HomePage.tsx`) - Main landing page with hero, services overview, and process
- **ABGPage** (`src/pages/ABGPage.tsx`) - ABG test service details and booking
- **ECGPage** (`src/pages/ECGPage.tsx`) - ECG test service details and booking  
- **XRayPage** (`src/pages/XRayPage.tsx`) - X-Ray service details and booking
- **ContactPage** (`src/pages/ContactPage.tsx`) - Contact form and information

### Shared Components
- **Header** (`src/components/Header.tsx`) - Navigation with direct service links
- **Footer** (`src/components/Footer.tsx`) - Site-wide footer with contact info
- **ServiceHero** (`src/components/ServiceHero.tsx`) - Hero sections for service pages
- **AnimatedSection** (`src/components/AnimatedSection.tsx`) - Scroll-triggered animations
- **AnimatedCard** (`src/components/AnimatedCard.tsx`) - Interactive card components
- **FloatingActions** (`src/components/FloatingActions.tsx`) - WhatsApp and call buttons
- **OptimizedImage** (`src/components/OptimizedImage.tsx`) - Responsive image component

## Editable Content Guide

### 🖼️ Image Updates
All images are marked with `/* EDITABLE: Image description */` comments:

**Hero Images (1200x628 pixels):**
- ABG Page: `backgroundImage="https://images.pexels.com/photos/3844581/pexels-photo-3844581.jpeg"`
- ECG Page: `backgroundImage="https://images.pexels.com/photos/7449057/pexels-photo-7449057.jpeg"`
- X-Ray Page: `backgroundImage="https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg"`
- Homepage: `backgroundImage="https://images.pexels.com/photos/4225920/pexels-photo-4225920.jpeg"`

**Section Images:**
- Look for `<OptimizedImage src="..." />` components
- Replace `src` URLs to update images
- Maintain aspect ratios for best results

### 🔗 Link Updates
All navigation and contact links are marked with `/* EDITABLE: Link description */`:

**Phone Numbers:**
- Main: `+918712197228` (update in all `tel:` and `wa.me` links)
- Display: `+91 87121 97228` (update display text to match)

**Email:**
- `contact@qpathdiagnostics.com` (update in `mailto:` links)

**Navigation Links:**
- Home: `/`
- ABG: `/abg`
- ECG: `/ecg`
- X-Ray: `/xray`
- Contact: `/contact`

### 💰 Pricing Updates
Service prices are marked throughout:
- ABG Test: `₹899`
- ECG Test: `₹699`
- X-Ray Test: `₹1299`

### 📱 Mobile Responsiveness Fixes Applied

**Button Spacing Fix:**
- Added proper gap classes: `gap-4 sm:gap-6 md:gap-8`
- Applied `w-full sm:w-auto` for full-width mobile buttons
- Added `text-center` for proper mobile alignment

**Responsive Breakpoints:**
- Mobile: `< 640px` (sm)
- Tablet: `640px - 1024px` (md/lg)
- Desktop: `> 1024px` (xl)

### 🎨 Animation Features

**Framer Motion Animations:**
- Scroll-triggered animations with Intersection Observer
- Hover effects on cards and buttons
- Loading states and micro-interactions
- Staggered animations for lists and grids

**Animation Types:**
- `fade-up`, `slide-left`, `slide-right`, `zoom-in`, `bounce-in`
- Customizable delays and durations
- Reduced motion support for accessibility

### 🎯 Sections That Can Be Hidden/Shown

**Hero Section Elements:**
```tsx
// Hide floating particles
<div className="absolute inset-0 overflow-hidden pointer-events-none" style={{display: 'none'}}>

// Hide trust badges
{showTrustBadges && ( // Set to false to hide

// Hide CTA buttons
<motion.div className="flex flex-col sm:flex-row gap-4 justify-center" style={{display: 'none'}}>
```

**Service Page Sections:**
- Benefits section: Wrap in conditional rendering
- Process steps: Modify `process` array to empty `[]`
- Pricing cards: Add conditional display logic

### 📋 Form Integration

**Google Sheets Setup:**
1. Create Google Sheets with columns: fullName, phone, email, serviceType, preferredDate, preferredTime, message, consent
2. Set up Google Apps Script for form handling
3. Replace the API endpoint in `ContactPage.tsx` handleSubmit function
4. Update form validation and success messages as needed

### 🔧 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### 📱 Mobile Testing
Test on various devices:
- iPhone SE (375px)
- iPhone 12 (390px)
- iPad (768px)
- Desktop (1024px+)

### 🎨 Customization Tips

**Colors:**
- Primary Green: `#1E8449`
- Primary Blue: `#2980B9`
- Text: `#34495E`
- Update in `tailwind.config.js` for global changes

**Typography:**
- Font: Poppins (loaded from Google Fonts)
- Weights: 300, 400, 500, 600, 700
- Line heights: 1.6 for body, 1.2 for headings

**Spacing:**
- Uses 8px spacing system (Tailwind default)
- Consistent padding: `py-16 sm:py-20` for sections
- Responsive margins and gaps throughout

## Performance Optimizations

- Lazy loading for images
- Responsive image srcsets
- Optimized animations with GPU acceleration
- Reduced bundle size with tree shaking
- Proper loading states and error boundaries

## Accessibility Features

- WCAG 2.1 AA compliance
- Proper heading hierarchy (H1 → H6)
- Alt text for all images
- Keyboard navigation support
- Focus indicators
- Screen reader friendly
- Reduced motion support


This Website is mainly for the ABG Services related only