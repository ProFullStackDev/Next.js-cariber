module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '96fafee3e6b52849fca86cdcd7c16294'),
  },
});
