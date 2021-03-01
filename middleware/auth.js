export default ({ store, redirect }) => {
  if (!store.getters['auth/check']) {
    return redirect('/')
  }
}

// export default function({ store, redirect }) {
//   if (store.state.auth.loggedIn) {
//     return redirect('/')
//   }
// }
