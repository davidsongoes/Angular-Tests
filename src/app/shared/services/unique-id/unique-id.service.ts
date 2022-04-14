import { Injectable } from "@angular/core";
import { v4 as uuidv4 } from "uuid";

@Injectable()
export class UniqueIdService {
  private NumberOfGeneratedIds = 0;

  public generateUniqueIdWithPrefix(prefix: string): string {
    if (!prefix) {
      throw new Error("Prefix cannot be empty!");
    }
    const uniqueId = this.generateUniqueId();
    this.NumberOfGeneratedIds++;
    return `${prefix}-${uniqueId}`;
  }

  public getNumberOfGeneratedUniqueIds(): number {
    return this.NumberOfGeneratedIds;
  }

  private generateUniqueId(): string {
    return uuidv4();
  }
}
