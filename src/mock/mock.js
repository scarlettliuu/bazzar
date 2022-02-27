/* eslint-disable eqeqeq */
const Mock = require('mockjs')
const existedUser = function (user) {
  // isExist means whether system has already exist this user
  // 0 means this user can be registered with current information
  // 1 means user ID is not available
  // 2 means username is not available
  // const Random = Mock.Random
  let isExist = 0
  const userList = [
    {
      id: '1234567899',
      username: 'Tom',
      password: '123456',
      tel: '',
      email: ''
    }
  ]
  for (let i = 0; i < userList.length; i++) {
    if (userList[i].id == user.body['id']) {
      isExist = 1
      return isExist
    }
    if (userList[i].username == user.body['username']) {
      isExist = 2
      return isExist
    }
  }
  console.log(user.body['id'])
  return isExist
}
Mock.mock('bazzar/registration', existedUser)
Mock.mock('http://localhost:8081/login', 'post', (req) => {
  // if (option !== null) {
  // const { username, password } = JSON.parse(req.body)
  return {
    status: 200,
    message: 'Login Successfully!',
    token: '12Q3we'
  }
  // } else {
  //   return Mock.mock({
  //     status: 400,
  //     message: 'No params!'
  //   })
  // }
})
// Mock.mock('http://localhost:8080/login', 'post', function(option) {
//   template
// })
