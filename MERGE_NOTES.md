# Merge Notes

## Source used
- Existing AX-EMP navigator repo
- `PHS_AX-SUP_Validation_Submit_v4.xlsx`

## What changed in this update
- Replaced the older AX-SUP data block with the v4 submit workbook
- Regenerated the merged `src/data/legalNavigatorData.js`
- Kept AX-EMP data intact and re-merged overlap nodes/edges with AX-SUP
- Preserved branch filter and detail-panel logic in `src/App.jsx`
- Kept relation metadata for `ISSUES/ADMINISTERS`

## Current merged dataset
- Nodes: 184
- Edges: 665
- Overlap nodes: 98

## Validation performed
- Confirmed all merged edges point to existing nodes
- Confirmed all AX-SUP sheet nodes are present in the merged dataset
- Prepared repo for local build validation
