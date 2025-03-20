import { Component } from "./Component";

export class Leaf implements Component {
    add(component: Component): void {
      throw new Error("Method not implemented.");
    }
    remove(component: Component): void {
      throw new Error("Method not implemented.");
    }
    getChild(index: number): Component {
      throw new Error("Method not implemented.");
    }
    operation() {
        console.log('Leaf operation');
    }
}
