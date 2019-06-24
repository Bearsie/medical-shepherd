import { mergeStyles } from '@uifabric/merge-styles';

export const svgIcons = mergeStyles({
  width: '25px',
  height: '25px',
});

export const itemTitleWithNoEllipsis = mergeStyles({
  selectors: {
    '.item-title': { wordBreak: 'break-word', whiteSpace: 'pre-wrap' },
  },
});

export const chipWithNoEllipsis = mergeStyles({
  height: 'auto',
  margin: '3px',
  lineHeight: '1.5',
  maxWidth: '100%',
  
  selectors: {
    '.chip-label': { wordBreak: 'break-word', whiteSpace: 'pre-wrap' },
  },
})

export const colorPrimary = '#16ade1';
export const colorSecondary = '#1B3954';
