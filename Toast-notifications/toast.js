let toast = document.getElementById('toast')
let x
function showToast() {
  clearTimeout(x)
  toast.style.transform = 'translateX(0)'
  x = setTimeout(() => {
    toast.style.transform = 'translateX(300px)'
  }, 3000)
}
function closeToast() {
  toast.style.transform = 'translateX(400px)'
}
