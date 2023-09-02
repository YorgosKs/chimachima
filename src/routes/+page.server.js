import db from "$lib/server/database.js";

export async function load() {
  try {
    const userCollection = db.collection("user");
    const user = await userCollection.find().toArray();
    const usersSerialized = user.map((user) => ({
      ...user,
      _id: user._id.toString(),
    }));

    return {
      users: usersSerialized || [], // Return an array even if users is null
    };
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      body: {
        error: "Error getting users",
      },
    };
  }
}
