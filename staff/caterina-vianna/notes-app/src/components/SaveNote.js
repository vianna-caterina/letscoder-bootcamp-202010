export default function ({ onSaveNote }) {
  const handleSubmit = (event) => {
    event.preventDefault();

    const {
      target: {
        text: { value: text },
        visibility: { value: visibility },
        tags: { value: tags },
      },
    } = event;

    onSaveNote(text, visibility, tags.split(" "));
  };

  return (
    <section className="save-note">
      <form onSubmit={handleSubmit}>
        <textarea name="text"></textarea>
        <input
          type="radio"
          id="private"
          name="visibility"
          value="private"
          defaultChecked
        />
        <label htmlFor="private">private</label>
        <input type="radio" id="public" name="visibility" value="public" />
        <label htmlFor="public">public</label>
        <input type="text" id="tags" name="tags" />
        <label htmlFor="tags">tags</label>
        <button>sAVe</button>
      </form>
    </section>
  );
}
