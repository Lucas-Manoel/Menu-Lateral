var menuitem = document.querySelectorAll('.item-menu')

function selectLink(){
    menuitem.forEach((item)=>
    item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}
menuitem.forEach((item) =>
   item.addEventListener('click', selectLink)
)
//expandir o Menu

var btnexp = document.querySelector('#btn-exp')
var menuside= document.querySelector('.menu-lateral')

btnexp.addEventListener('click', function(){
    menuside.classList.toggle('expandir')
})