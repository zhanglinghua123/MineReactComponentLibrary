export interface RowContextState {
    gutter?: Gutter | [Gutter, Gutter];
    wrap?: boolean;
}

type RowAligns = 'top' | 'middle' | 'bottom' | 'stretch';
type RowJustify = 'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly';

export type Gap = number | undefined;
// export type Gutter = number | undefined | Partial<Record<Breakpoint, number>>;
export interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
    gutter?: Gutter | [Gutter, Gutter];
    align?: RowAligns
    justify?: RowJustify
    prefixCls?: string;
    direction?: "rtl" | "left";
    wrap?: boolean;
}
export type Gutter = number 
