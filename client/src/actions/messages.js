export const sendMessage = (message, user) => {
  return new Promise((resolve, reject) => {
    /**
     * get current user here.
     */
    const user_id = user.id;

    fetch('/api/message/save', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message,
        user_id
      })
    })
    .then((res) => {
      if (res.success) {
        resolve(res.message)
      }

      reject(res.message)
    })
    .catch(error => {
      console.log(error)
      reject(error)
    });
  })
}
