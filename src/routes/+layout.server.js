export function load({ cookies }) {
  const userid = cookies.get("username");

  if (userid) {
    return { status: 200 };
  } else {
    return { status: 401, body: { error: "Unauthorized" } };
  }
}
