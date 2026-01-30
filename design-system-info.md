# Design System Details - Gustavo Higón Motorcycle Design

## 🎨 Color Palette (Primitives)
- **White**: #FFFFFF (Used for backgrounds, nav, and light text)
- **Black**: #000000 (Used for section backgrounds and primary text)
- **Gray Dark**: #555555 (Secondary texts and titles)
- **Border White**: rgba(255, 255, 255, 0.2)
- **Shadow Nav 1**: rgba(12, 12, 13, 0.1)
- **Shadow Nav 2**: rgba(12, 12, 13, 0.05)

## 📝 Typography (Styles from Figma)
### Font Families
- **Primary**: Montserrat (Weights: 400, 600, 700)
- **Secondary**: Inter (Weight: 400)

### Desktop Scale
- **H1**: 65px / Auto (Montserrat Regular)
- **H2**: 80px / Auto (Montserrat Regular)
- **H3**: 58px / Auto (Montserrat Regular)
- **H4**: 30px / 36px (Montserrat Regular, Letter Spacing: 1.8955px, Uppercase)
- **H5**: 24px / Auto (Montserrat SemiBold)
- **H5 Majus**: 24px / Auto (Montserrat Regular, Uppercase)
- **Body**: 18px / Auto (Montserrat Regular)
- **Button**: 18px / Auto (Montserrat Regular)

### Mobile Scale
- **H1 Mobile**: 40px / Auto
- **H2 Mobile**: 52px / Auto
- **H3 Mobile**: 36px / Auto
- **Body Mobile**: 16px / Auto (Inter Regular)

## 📏 Spacing & Layout
- **Grid base**: 4px / 8px
- **Scales**: 4px, 12px, 16px, 24px, 32px, 48px, 64px, 96px
- **Container Padding**: 24px mobile, 48px desktop
- **Section Padding**: 48px horizontal, 96px vertical
- **Button Padding**: 62px horizontal, 22px vertical
- **Max Width**: 1440px (Main container)

## 🎯 Component Tokens
- **Button**: 2px solid White border, transparent background (default), White background (hover)
- **Nav Shadow**: Combined Shadow Nav 1 and Shadow Nav 2 (0px 1px 4px)
- **Image Overlays**: 
  - Standard: from rgba(0,0,0,0.8) to rgba(0,0,0,0)
  - Portfolio: from rgba(0,0,0,0.9) to rgba(0,0,0,0)