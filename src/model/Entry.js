export default class Entry {
  constructor(data) {
    this.data = data;

    this.id = data.sys.id;
    this.type = data.sys.contentType.sys.id;
  }

  render() {
    return (
      <div>
        <h2>{this.type}</h2>
        <p className="muted">{this.id}</p>
      </div>
    );
  }
}
