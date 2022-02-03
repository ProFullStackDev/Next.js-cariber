module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/user/get-me',
      handler: 'user.getMe',
    },
    {
      method: 'PUT',
      path: '/user/update-me',
      handler: 'user.updateMe',
    },
  ],
};
