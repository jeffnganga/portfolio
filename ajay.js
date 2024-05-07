
function submitForm() {
    document.getElementById("findme").submit();
  }

  const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
  });


  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));

  function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display ='flex'
  }

  function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display ='none'
  }