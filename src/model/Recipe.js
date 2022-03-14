export default class Recipe {
  constructor(id, title, description, image, author, date) {
    this.id = id;
    this.title = title; // string
    this.description = description; // [string, string, ...]
    this.image = image; // string
    this.author = author; // {id:string, name:{first:string, last:string}, image:string}
    this.date = date; // Date
  }

  render() {
    return (
      <>
        <h2>{this.title}</h2>
        <p className="recipe-author">
          by {this.author.name.first} {this.author.name.last}
        </p>

        <div className="recipe-step-heroimage">
            <img src={this.image} alt={this.title} />
        </div>

        <ul className="recipe-step-list">
          {this.description.map((d, index) => (
            <li className="recipe-step">
              <div className="recipe-step-number-box">
                <p className="recipe-step-number">{index + 1}</p>
              </div>
              <p key={Math.random()} className="recipe-step-body">
                {d}
              </p>
            </li>
          ))}
        </ul>
      </>
    );
  }

  static fromUntyped(data) {
    const r = data.fields;

    // Id
    const id = data.sys.id;

    // Title
    const title = r.RecipeTitle;

    // Description
    const description = r.RecipeDescription.content.map(
      (p) => p.content[0].value
    );

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

    let recipe = new Recipe(id, title, description, image, author, date);
    console.log('======== RECIPE ========');
    console.log(recipe);
    return recipe;
  }
}
