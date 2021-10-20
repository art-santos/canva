//Here we do exports of types for the main entity in the projects: the squares

export interface SizeInterface {
  height: number;
  width: number;
}

export interface PositionInterface {
  x: number;
  y: number;
}

export interface ContentInterface {
  id: string;
  size: SizeInterface;
  position: PositionInterface;
  color: string;
  index: number;
  isActive: boolean;
  isUndraggable: boolean;
  isResizable: boolean;
}
