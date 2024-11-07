import React, { useRef } from "react";

export const SignUpForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted...");
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      const username = formData.get("username") as string;
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;
      console.log("Data: ", { username, email, password });
    }
  };
  return (
    <div>
      <h1>SignUpForm</h1>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">User Name:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>

        <input type="submit" value="submit" />
      </form>
    </div>
  );
};
