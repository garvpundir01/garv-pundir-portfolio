document.addEventListener('DOMContentLoaded', () => {
  const currentLocation = location.href;
  const menuItem = document.querySelectorAll('nav ul li a');
  menuItem.forEach(link => {
    if(link.href === currentLocation){
      link.className = "active";
    }
  });
});
