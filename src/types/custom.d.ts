declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.jpg" {
  const value: string;
  export default value;
}

declare module "*.jpeg" {
  const value: string;
  export default value;
}

declare module "*.gif" {
  const value: string;
  export default value;
}

declare module "*.svg" {
  const value: string;
  export default value;
}

declare module "*.webp" {
  const value: string;
  export default value;
}
declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

declare module "isotope-layout" {
  export default class Isotope {
    constructor(
      element: Element | string,
      options?: {
        itemSelector?: string;
        layoutMode?: string;
        filter?: string;
      }
    );
    arrange(opts: { filter?: string }): void;
    reloadItems(): void;
    layout(): void;
  }
}
