
# Division1 and Master1 Restoration Guide

This guide explains how to restore the Division1 and Master1 functionality that was archived on [current date].

## Archived Files

### Pages
- `Division1Page.tsx` - Complete Division1 page component
- `Master1Page.tsx` - Complete Master1 page component

### Components  
- `CharterToDivision1.tsx` - Component for generating Division1 from project charters
- `GuidedDivision1.tsx` - Guided Division1 creation workflow
- `Division1Review.tsx` - Review and enhancement functionality
- `Division1Generator.tsx` - Main Division1 generation component
- `ModuleIcons-archived.tsx` - Master1 and Division1 icons and logos

### Hooks & Types
- `useDivision1Generator.ts` - Hook for Division1 generation logic
- `useSpecificationProcessor.ts` - Hook for specification file processing
- `types-csi.ts` - TypeScript types for CSI functionality

## Restoration Steps

### 1. Restore Pages
```bash
# Move archived pages back to pages directory
mv src/archived/Division1Page.tsx src/pages/Division1.tsx
mv src/archived/Master1Page.tsx src/pages/Master1.tsx
```

### 2. Restore Components
```bash
# Create division1 directory and restore components
mkdir -p src/components/division1
mv src/archived/CharterToDivision1.tsx src/components/division1/
mv src/archived/GuidedDivision1.tsx src/components/division1/
mv src/archived/Division1Review.tsx src/components/division1/
mv src/archived/Division1Generator.tsx src/components/
```

### 3. Restore Hooks & Types
```bash
# Restore hooks and types (overwrite placeholder files)
mv src/archived/useDivision1Generator.ts src/hooks/
mv src/archived/useSpecificationProcessor.ts src/hooks/
mv src/archived/types-csi.ts src/types/
```

### 4. Restore Icons
```bash
# Merge archived icons back into ModuleIcons.tsx
# Copy Master1Logo, Master1Icon exports from ModuleIcons-archived.tsx
# Add them back to the main ModuleIcons.tsx file
```

### 5. Update App.tsx Routes
Add these routes back to src/App.tsx:
```typescript
import Division1 from "./pages/Division1";
import Master1 from "./pages/Master1";

// Add routes:
<Route path="/division1" element={<Division1 />} />
<Route path="/master1" element={<Master1 />} />
```

### 6. Update Navigation
Add Division1 and Master1 back to any navigation components or menus where they were previously referenced.

## Notes
- All functionality was preserved exactly as it was when archived
- No breaking changes were made to the codebase structure
- Placeholder files were created to prevent import errors during the removal process
- These should be overwritten during restoration

## Testing After Restoration
1. Verify all routes work correctly
2. Test Division1 generation functionality
3. Test Master1 specification synthesis
4. Verify all icons and components render properly
5. Check that all TypeScript types are properly imported
