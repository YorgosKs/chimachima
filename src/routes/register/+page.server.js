import db from "$lib/server/database.js";
import { redirect, fail } from "@sveltejs/kit";

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request, cookies }) => {
    const data = await request.formData();
    const username = data.get("username");
    const password = data.get("password");
    const userCollection = await db.collection("user");
    const user = await userCollection.findOne({
      username: username,
    });

    if (username === "" || password === "") {
      return fail(400, {
        username,
        password,
        message: "Fill username or  password",
      });
    }

    if (user) {
      return fail(401, { username, message: "Username already exists" });
    }

    await userCollection.insertOne({
      username: username,
      password: password,
    });

    const userCreated = await userCollection.findOne({
      username: username,
    });

    cookies.set("username", userCreated._id, { path: "/" });
    throw redirect(303, "/dashboard", { message: "User created successfully" });
  },
};
