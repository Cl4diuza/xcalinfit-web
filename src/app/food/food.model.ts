export class Food {
  public id: string;
  public name: string;
  public content: string;
  public calories: number;
  public protein: number;
  public carb: number;
  public fat: number;
  public imagePath: string;

  constructor(
    id: string,
    name: string,
    content: string,
    calories: number,
    protein: number,
    carb: number,
    fat: number,
    imagePath: string
  ) {
    this.id = id;
    this.name = name;
    this.content = content;
    this.calories = calories;
    this.protein = protein;
    this.carb = carb;
    this.fat = fat;
    this.imagePath = imagePath;
  }
}
