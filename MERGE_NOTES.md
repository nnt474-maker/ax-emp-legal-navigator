# Merge Notes

## Source used
- Existing AX-EMP navigator repo
- `PHS_AX-SUP_Validation_FINAL.xlsx`

## What changed
- Added AX-SUP nodes and edges into the same navigator
- Created `src/data/legalNavigatorData.js` as the merged data source
- Updated `src/App.jsx` to support:
  - branch filter: All / AX-EMP / AX-SUP
  - merged detail panel with applied axes
  - overlap display for duplicated nodes across branches
- Added relation metadata for `ISSUES/ADMINISTERS`
- Updated `README.md`

## Current merged dataset
- Nodes: 162
- Edges: 556
- Overlap nodes: 77

## Validation performed
- Confirmed all merged edges point to existing nodes
- Ran TypeScript parser check on `src/*.jsx` and `src/data/*.js`
