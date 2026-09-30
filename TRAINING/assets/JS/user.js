document.addEventListener('DOMContentLoaded' , function(){ 
 var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, {});

   const adduserbutton = document.getElementById('add-user-button')
    adduserbutton.addEventListener('click' , () => {
      document.querySelector('.backk-full').classList.add('show')
          document.querySelector('.backk-full-bg').classList.remove('dis-none')
    })
  document.querySelector('.backk-full-bg').addEventListener('click',()=>{
   document.querySelector('.backk-full').classList.remove('show')
    document.querySelector('.backk-full-bg').classList.add('dis-none')
  })

});