const Avatar = (params) => {
 console.log(params)
   return `
       <picture>
             <img src="https://randomuser.me/api/portraits/lego/${params.id}.jpg" alt="lego"/>
            <p>${params.name}</p>
         </picture>
    `
 }

 export default Avatar