
import { Snd_compo } from "./Snd_compo"
import { Third_compo } from "./Third_compo"


const First_compo = ()=>{

return (<>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"/>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
{/* <nav class="navbar">
<img className="ytt" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXOY-lwnvItarKcBR-qbl0HOIyf_CwuwYAsg&usqp=CAU" alt="" />

  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Services</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav> */}



<nav className="first">

<img className="iimg" src="https://searchvectorlogo.com/wp-content/uploads/2021/11/daxon-fr-logo-vector.png" alt="" />


<ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">Shops</a></li>
    <li><a href="#">Mens</a></li>
    <li><a href="#">Pages</a></li>
    <li><a href="#">Blog</a></li>
    <li><a href="#">Contact</a></li>
<i class="fa-solid fa-cart-shopping hum"> Shop Now</i>
<i class="fa-solid fa-magnifying-glass gum"></i>
</ul>
</nav>

<Snd_compo/>
<Third_compo/>











</>)

}


export {First_compo}