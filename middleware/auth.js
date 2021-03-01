// export default ({ store, redirect }) => {
//   if (!store.getters['auth/check']) {
//     return redirect('/login')
//   }
// }

export default function(context) {
  console.log('middleware is running')
}
