export const setAuthToken = (user) => {
  const currentUser = {
    email: user.email,
  };
  console.log(currentUser);
  // get jwt token

  //https://genius-car-server-neon.vercel.app
  //fetch("https://book-house--server-blue.vercel.app/jwt", {
  fetch("https://book-house-server.vercel.app/jwt", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      // local storage is the easiest but not the best place to store jwt token
      localStorage.setItem("book-worm", data.token);
      console.log("token", data.token);
    });
};
