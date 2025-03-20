export interface Component {
    operation(): void;
    add(component: Component): void;
    remove(component: Component): void;
    getChild(index: number): Component;
}
