import { ImageEditor } from "./ImageEditor";
import { Memento } from "./Memento";

export class ImageEditorBackupManager {
  private mementos: Memento[] = []

  constructor(private readonly imageEditor: ImageEditor) {}

  backup(): void {
    this.mementos.push(this.imageEditor.save());
  }

  undo(): void {
    const memento = this.mementos.pop();
    if (!memento) {
      return;
    }
    this.imageEditor.restore(memento);

  }
}
