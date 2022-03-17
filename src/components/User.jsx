export default class User {
  constructor(id, fn, ln, userpic) {
    this.id = id;
    this.fn = fn;
    this.ln = ln;
    this.userpic = userpic;
  }

  static fromUntyped(data) {
    const r = data.fields;

    // Id
    const id = data.sys.id;

    // Profile Image
    // data.fields.profileImage.fields.file.url
    const userpic = r.profileImage.fields.file.url;

    // First Name
    const fn = r.firstName;

    // Last Name
    const ln = r.lastName;

    let user = new User(id, fn, ln, userpic);

    return user;
  }
}
