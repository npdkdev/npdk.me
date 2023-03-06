import './src/styles/global.css'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'

let docTitle = document.title
export const shouldUpdateScroll = ({ routerProps: { location }, getSavedScrollPosition }) => {
  const { pathname } = location
  const scroltoTop = [`/skill`, `/blog`, `/portofolio`]
  if (scroltoTop.indexOf(pathname) !== -1) {
    window.scrollTo(0, 0)
  }
  window.scrollTo(0, 0)
  return false
}
// window.addEventListener("blur", () => {
//   document.title = "Come Back Beib ;("
// })
// window.addEventListener("focus", () => {
//   document.title = docTitle
// })
