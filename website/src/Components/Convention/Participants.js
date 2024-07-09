import React from 'react'

import MerchCard from './MerchCard'
import "../../styles/Participants.css"

let lst = [
    {
      Owner: "André",
      img: "https://via.placeholder.com/150" ,
      desc: "lorem ipsum dolor sit amete ajectetur"
    },
    { Owner: "BDE",
      img: "https://media.discordapp.net/attachments/1026908368155201629/1249782997196996709/pinguinxtek22.png?ex=668a2cde&is=6688db5e&hm=d045cfd454da6c9a251f3761f89d1857729375c5ce340381d61c5a4014c1a8dc&=&format=webp&quality=lossless&width=385&height=747",
      desc: "Vente de boissons sur l'évènement."
    },
    { Owner: "Victor",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOMiYTXhZ0psmzrwc98iIpC5Y-WMWsBv4xTQ&s",
      desc: "Directeur d'Epitech Moulins, il nous aide gracieusement car lui même est fan de cet incroyable univers qu'est doctor who !"
    },
    { Owner: "eleventh",
      img: "https://via.placeholder.com/150",
      desc: "Bow ties are cool. I know. Dinosaurs! On a spaceship! I never know why. I only know who. There are fixed points throughout time where things must stay exactly the way they are. This is not one of them. This is an opportunity! Whatever happens here will create its own timeline, its own reality, a temporal tipping point. The future revolves around you, here, now, so do good! There's something that doesn't make sense. Let's go and poke it with a stick. Overconfidence, this, and a small screwdriver. I’m absolutely sorted."
    }
  ]
  
function Participants() {
    return (
      <div>
          <h3>Participants:</h3>
          <div class="ProductList">
              {lst.map(p => {
                return(
                  <MerchCard Owner={p.Owner} link = {p.img} desc={p.desc} />
                )
              })}
          </div>
      </div>
    );
}

export default Participants;