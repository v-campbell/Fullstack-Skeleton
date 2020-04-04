export const loginUtil = (user) =>
  $.ajax({
    method: "POST",
    url: "/api/session",
    data: { user },
  });

export const signupUtil = (user) =>
  $.ajax({
    method: "POST",
    url: "/api/users",
    data: { user },
  });

export const logoutUtil = () =>
  $.ajax({
    method: "DELETE",
    url: "/api/session",
  });
