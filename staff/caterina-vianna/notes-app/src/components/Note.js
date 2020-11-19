export default function Note({ onSaveNote }) {
  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const {
            target: {
              text: { value: text },
              tags: { value: tags },
              owner: { value: owner },
              visibility: { value: visibility },
            },
          } = event;

          onSaveNote(text, tags, owner, visibility);
        }}
      >
        <input type="text" name="text" placeholder="write your note" />
        <input type="tag" name="tags" placeholder="tags" />
        <input type="text" name="owner" placeholder="owner" />
        <label>
          Choose note visibility from this list
          <input list="visibility" name="visibility" />
        </label>
        <datalist id="visibility">
          <option value="public" />
          <option value="private" />
          <option value="friends" />
        </datalist>
        <button>Publish</button>
      </form>
    </div>
  );
}
