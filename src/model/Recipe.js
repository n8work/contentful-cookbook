
export default class Recipe {
  constructor(id, title, steps, image, author, date, gallery) {
    this.id = id;
    this.title = title; // string
    this.steps = steps; // [string, string, ...]
    this.image = image; // string
    this.author = author; // {id:string, name:{first:string, last:string}, image:string}
    this.date = date; // Date
    this.gallery = gallery; // [string, string, ...]
  }

  get slug() {
    return this.title.replaceAll(' ', '-').toLowerCase();
  }

  static fromUntyped(data) {
    // console.log(data);
    const r = data.fields;

    // Id
    const id = data.sys.id;

    // Title
    const title = r.RecipeTitle;

    // Description
    const steps = r.RecipeDescription.content.map((p) => {
      return { complete: false, text: p.content[0].value };
    });

    // Image
    const m = r.RecipeHeroimage.fields;
    const image = m.file.url;

    // Author
    const a = r.author.fields;
    let author = {
      id: a.id,
      name: { first: a.firstName, last: a.lastName },
      image: a.profileImage.fields.file.url
    };

    // Date
    const date = Date.parse(data.sys.createdAt);

    // Gallery
    const gallery = r.RecipeImageGallery
      ? r.RecipeImageGallery.map((g) => g.fields.file.url)
      : [];

    let recipe = new Recipe(id, title, steps, image, author, date, gallery);

    console.log('======== RECIPE ========');
    console.log(recipe);
    return recipe;
  }
}
