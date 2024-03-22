import { useState } from "preact/hooks";
import { FunctionComponent, JSX } from "preact";

export const AddForm: FunctionComponent = () => {
  const [error, setError] = useState<string>("");
  const [successMessage, setsuccessMessage] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const submitHandler = async (
    e: JSX.TargetedEvent<HTMLFormElement, Event>,
  ) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);

    if (name === "" || email === "") {
      setError("You must provide all the fields");
      setsuccessMessage("");
      return;
    }
    try {
      const response = await fetch("/agendaclientside", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setsuccessMessage("Contact added successfully");
        setName("");
        setEmail("");
      } else {
        setError("Error adding contact");
        setsuccessMessage("");
      }
    } catch (error) {
      setError("Error adding contact");
      setsuccessMessage("");
    }
  };
  return (
    <div class="addform">
      <h2>Add New Contact</h2>
      <form
        action="/agendaclientside"
        method="POST"
        onSubmit={submitHandler}
      >
        <div>
          <input
            onFocus={(e) => setError("")}
            onInput={(e) => setName(e.currentTarget.value)}
            type="text"
            id="name"
            name="name"
            placeholder="Name"
          />
        </div>

        <div>
          <input
            onFocus={(e) => setError("")}
            onInput={(e) => setEmail(e.currentTarget.value)}
            type="text"
            id="email"
            name="email"
            placeholder="Email"
          />
        </div>
        <div>
          <button
            type="submit"
            disabled={error !== ""}
            class="btn"
          >
            Add contact
          </button>
        </div>
        {error !== "" && <div class="span-2 error">{error}</div>}
        {successMessage !== "" && (
          <div class="span-2 success">{successMessage}</div>
        )}
      </form>
    </div>
  );
};

export default AddForm;
