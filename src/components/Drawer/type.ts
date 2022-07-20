export type PushState = string | number;
export type SizeType = 'large' | 'middle' | 'small';
export type placementType = 'top' | 'right' | 'left' | 'bottom';
export type EventType =
    | React.KeyboardEvent<HTMLDivElement>
    | React.MouseEvent<HTMLDivElement | HTMLButtonElement>
    | React.MouseEvent<HTMLSpanElement, MouseEvent>
    | KeyboardEvent;
export type DrawerRef = {
    push: (placement: string) => void;
    pull: (placement: string) => void;
    zIndex: number;
    pushDistance?: number;
};
