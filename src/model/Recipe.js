export default class Recipe {
  constructor(id, title, description, image, author, date, gallery) {
    this.id = id;
    this.title = title; // string
    this.description = description; // [string, string, ...]
    this.image = image; // string
    this.author = author; // {id:string, name:{first:string, last:string}, image:string}
    this.date = date; // Date
    this.gallery = gallery; //
  }

  get slug() {
    return this.title.replaceAll(' ', '-').toLowerCase();
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
            <li key={index} className="recipe-step">
              <div className="recipe-step-number-box">
                <p className="recipe-step-number">{index + 1}</p>
              </div>
              <p className="recipe-step-body">{d}</p>
            </li>
          ))}
        </ul>

        <ul className="gallery">
          {this.gallery.map((g, index) => (
            <li key={index} className="gallery-item">
              <img src={`${g}`} alt="" />
            </li>
          ))}
        </ul>
      </>
    );
  }

  static fromUntyped(data) {
    console.log(data);
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

    // Gallery
    const gallery = r.RecipeImageGallery
      ? r.RecipeImageGallery.map((g) => g.fields.file.url)
      : [];

    let recipe = new Recipe(
      id,
      title,
      description,
      image,
      author,
      date,
      gallery
    );

    console.log('======== RECIPE ========');
    console.log(recipe);
    return recipe;
  }
}
