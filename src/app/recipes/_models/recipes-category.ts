export class RecipesCategory {
  name: string;

  public normalize() {
    return {
      name: this.name
    }
  }
  
}
