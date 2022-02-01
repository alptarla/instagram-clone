const rules = {
  email: [
    {
      required: true,
      message: 'Please input your email!',
    },
    {
      type: 'email',
      message: 'Please enter an valid email!',
    },
  ],
  password: [{ required: true, message: 'Please input your password!' }],
  username: [{ required: true, message: 'Please input your username!' }],
};

export default rules;
